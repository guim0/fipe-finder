import { ReactNode, useState } from "react";
import { checkFirstLetterUpcase } from "../../util/checkFirstLetterUppercase";
import styles from "./Modal.module.scss";
export const Modal = (props: { title: string }) => {
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
