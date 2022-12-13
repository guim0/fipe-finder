import { useRouter } from "next/router";
import styles from "./Result.module.scss";

const ResultPage = () => {
  const { query } = useRouter();
  return (
    <main className={styles.result}>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1>
            Tabela Fipe: Preço {query.name} {query.year}
          </h1>
          <div className={styles.fipeRate}>{query.value}</div>
          <p>Est é o preço de compra do veículo</p>
        </div>
      </section>
    </main>
  );
};

export default ResultPage;
