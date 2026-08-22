import styles from "./app.module.css";
import { useState } from "react";
import { WORDS, type Challenge } from "./utils/words";

import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { LettersUsed } from "./components/LettersUsed";

function getRandomChallenge(): Challenge {
  const index = Math.floor(Math.random() * WORDS.length);
  return WORDS[index];
}

export default function App() {
  const [attempts, setAttempts] = useState(0);
  const [letter, setLetter] = useState("");

  const [challenge, setChallenge] = useState<Challenge>(() =>
    getRandomChallenge(),
  );

  function handleRestartGame() {
    setChallenge(getRandomChallenge());
    setAttempts(0);
    setLetter("");
  }

  if (!challenge) {
    return null;
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame} />

        <Tip tip={challenge.tip} />

        <div className={styles.word}>
          {challenge.word.split("").map(() => (
            <Letter value={letter} />
          ))}
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" />
          <Button title="Confirmar" />
        </div>

        <LettersUsed />
      </main>
    </div>
  );
}
