import { useState } from "react";
import { Mask } from "../../hooks/Mask";
import styles from "./Maskify.module.scss";

export const Maskify = () => {
  const [value, setValue] = useState("");
  return (
    <section className={styles.container}>
      <h1>Exercicio 1</h1>
      <p>Maskify</p>
      <h1>Insira alguns dados</h1>
      <input
        type="text"
        name="character"
        onChange={(e) => setValue(e.target.value)}
      />

      {value && (
        <p className={styles.output}>
          the output is: <br />
          <span> {Mask(value)}</span>
        </p>
      )}
    </section>
  );
};
