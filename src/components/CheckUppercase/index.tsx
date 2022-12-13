import { useState } from "react";
import { checkFirstLetterUpcase } from "../../hooks/checkFirstLetterUppercase";
import styles from "./CheckUppercase.module.scss";
export const CheckUppercase = (props: { title: string }) => {
  const [value, setValue] = useState("");
  return (
    <main className={styles.modal}>
      <h1>{props.title}</h1>
      <input
        placeholder="Digite"
        type="text"
        name="word"
        onChange={(e) => setValue(e.target.value)}
      />
      <p>
        Primeira letra é maiuscula?{" "}
        {value && JSON.stringify(checkFirstLetterUpcase(value))}
      </p>
    </main>
  );
};
