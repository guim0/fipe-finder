import { formatData } from "../../hooks/formatData";
import styles from "./formatData.module.scss";

const obj1 = {
  name: "Marcos",
  country: "Brasil",
  age: 22,
};

const obj1WithFix = {
  country: "Japão",
  age: 33,
};

const obj2 = { name: "Marcos", country: "Brasil", age: 22 };

const obj2WithProblem = {
  price: 89.9,
  amount: 15,
  description: "camiseta 100% algodão",
};
const obj3 = {
  name: "Rafael",
  country: "Chile",
  age: 42,
};

const obj3WithProblem = { name: "Camiseta Polo", price: 59.9, amount: 30 };

export const UpdateData = () => {
  const formattedObj1 = formatData(obj1, obj1WithFix);
  const formattedObj2 = formatData(obj2, obj2WithProblem);
  const formattedObj3 = formatData(obj3, obj3WithProblem);

  return (
    <main className={styles.container}>
      <h2>Atualização de objeto</h2>
      <section>
        <p>Exemplo 1:</p>
        <div className={styles.objectComparisson}>
          <p>
            this is the <b>OLD</b> object:
          </p>
          <p>{JSON.stringify(obj1)}</p>
        </div>

        <div className={styles.objectComparisson}>
          <p>
            this is the <b>NEW</b> object:
          </p>
          <p
            dangerouslySetInnerHTML={{ __html: JSON.stringify(formattedObj1) }}
          />
        </div>
      </section>
      <section>
        <p>Exemplo 2:</p>
        <div className={styles.objectComparisson}>
          <p>
            this is the <b>OLD</b> object:
          </p>
          <span dangerouslySetInnerHTML={{ __html: JSON.stringify(obj2) }} />,
          <span
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(obj2WithProblem),
            }}
          />
        </div>

        <div className={styles.objectComparisson}>
          <p>
            this is the <b>NEW</b> object:
          </p>
          <p>{JSON.stringify(formattedObj2)}</p>
        </div>
      </section>
      <section>
        <p>Exemplo 3:</p>
        <div className={styles.objectComparisson}>
          <p>
            this is the <b>OLD</b> object:
          </p>
          <span>
            {JSON.stringify(obj3)}, {JSON.stringify(obj3WithProblem)}
          </span>
        </div>

        <div className={styles.objectComparisson}>
          <p>
            this is the <b>NEW</b> object:
          </p>
          <span>{JSON.stringify(formattedObj3)}</span>
        </div>
      </section>
    </main>
  );
};
