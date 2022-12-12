import styles from "./RickAndMorty.module.scss";

export const RickAndMorty = () => {
  return (
    <main className={styles.container}>
      <h2>Detalhe</h2>
      <p>
        Ja fiz um caso de estudo usando React-Query com esta api do rick and
        morty.
      </p>
      <a
        href="https://github.com/guim0/RickAndMorty-ReactQuery"
        target="_blank"
      >
        Clique aqui para ir pra meu github
      </a>
    </main>
  );
};
