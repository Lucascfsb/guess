import styles from "./app.module.css";
import { useState, useEffect } from "react";
import { WORDS, type Challenge } from "./utils/words";

import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { LettersUsed, type LettersUsedProps } from "./components/LettersUsed";

function getRandomChallenge(): Challenge {
  const index = Math.floor(Math.random() * WORDS.length);
  return WORDS[index];
}

export default function App() {
  const [score, setScore] = useState(0);
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([]);
  const [letter, setLetter] = useState("");
  const [challenge, setChallenge] = useState<Challenge>(() =>
    getRandomChallenge(),
  );

  const ATTEMPTS_MARGIN = 5;

  function handleRestartGame() {
    const isConfirmed = window.confirm("Deseja reiniciar o jogo?");
    if (isConfirmed) {
      setChallenge(getRandomChallenge());
      setScore(0);
      setLettersUsed([]);
      setLetter("");
    }
  }

  function handleConfirm() {
    if (!challenge) return;

    if (!letter.trim()) return alert("Digite uma letra");
    setLetter("");

    const value = letter.toLocaleUpperCase();
    const exists = lettersUsed.find(
      (used) => used.value.toUpperCase() === value,
    );

    if (exists) {
      setLetter("");
      return alert("Você já utilizou a letra " + value);
    }

    const hits = challenge.word
      .toLocaleUpperCase()
      .split("")
      .filter((char) => char === value).length;

    const correct = hits > 0;

    const currentScore = score + hits;

    setLettersUsed((prevState) => [...prevState, { value, correct }]);
    setScore(currentScore);

    setLetter("");
  }

  useEffect(() => {
    if (!challenge) return;

    function endGame(message: string) {
      alert(message);
      handleRestartGame();
    }

    const timer = setTimeout(() => {
      if (score === challenge.word.length) {
        return endGame("Parabéns! Você acertou a palavra " + challenge.word);
      }

      const attemptLimit = challenge.word.length + ATTEMPTS_MARGIN;

      if (lettersUsed.length >= attemptLimit) {
        return endGame(
          "Você não conseguiu acertar a palavra " + challenge.word,
        );
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [score, lettersUsed.length, challenge]);

  if (!challenge) {
    return null;
  }

  return (
    <div className={styles.container}>
      <main>
        <Header
          current={lettersUsed.length}
          max={challenge.word.length + ATTEMPTS_MARGIN}
          onRestart={handleRestartGame}
        />

        <Tip tip={challenge.tip} />

        <div className={styles.word}>
          {challenge.word.split("").map((letter, index) => {
            const letterUsed = lettersUsed.find(
              (used) => used.value.toUpperCase() === letter.toUpperCase(),
            );

            return (
              <Letter
                key={index}
                value={letterUsed?.value}
                color={letterUsed?.correct ? "correct" : "default"}
              />
            );
          })}
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input
            autoFocus
            maxLength={1}
            placeholder="?"
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button title="Confirmar" onClick={handleConfirm} />
        </div>

        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  );
}
