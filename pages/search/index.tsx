import styles from "./Search.module.scss";
import FormControl from "@mui/material/FormControl";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";

type IModelCar = {
  nome: string;
  codigo: string;
};
export async function getStaticProps() {
  const res = await fetch(
    "https://parallelum.com.br/fipe/api/v1/carros/marcas"
  );
  const req = await res.json();

  const data = JSON.stringify(req);

  return {
    props: { data },
  };
}

const SearchPage = ({ data }: any) => {
  console.log(data);
  return (
    <main className={styles.container}>
      <h1>Tabela Fipe</h1>
      <h3>Consulte o valor de um veiculo</h3>
      <section className={styles.modal}>
        <FormControl fullWidth>
          <InputLabel id="car-model">Modelo</InputLabel>
          <Select
            labelId="car-mode"
            id="demo-simple-select"
            // value={10}
            label="Age"
            // onChange={(e) => console.log(e.target.value)}
          >
            {/*{req.map((data: IModelCar) => (
              <MenuItem value={data.codigo}>{data.nome}</MenuItem>
            ))}*/}
          </Select>
        </FormControl>
      </section>
    </main>
  );
};
export default SearchPage;
