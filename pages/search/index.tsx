import styles from "./Search.module.scss";
import FormControl from "@mui/material/FormControl";
import { Button, FormGroup, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

import { ButtonSubmit } from "../../src/components/Button/ButtonSubmit";

type IModelCar = {
  nome: string;
  codigo: string;
};

{
  /*
export async function getServerSideProps() {
  const res = await fetch(
    "https://parallelum.com.br/fipe/api/v1/carros/marcas"
  );

  const req = await res.json();

  if (!req) {
    return {
      notFound: true,
    };
  }
  return {
    props: { req },
  };
}
*/
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://parallelum.com.br/fipe/api/v1/carros/marcas"
  );
  const data = await res.json();

  return {
    props: { cars: data },
  };
};

const SearchPage = ({ cars }) => {
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [carModal, setCarModal] = useState([]);

  useEffect(() => {
    if (!brand) return;

    const fetchNewData = async () => {
      const data = await fetch(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos`
      );
      const json = await data.json();
      setCarModal(json.modelos);
      return json;
    };

    fetchNewData();
  }, [brand]);
  async function handleSubmit() {
    if (!(brand && model)) return;

    if (brand && model) {
      console.log(brand, model);
    }
  }
  return (
    <main className={styles.container}>
      <h1>Tabela Fipe</h1>
      <h3>Consulte o valor de um veiculo</h3>
      <section className={styles.modal}>
        <FormGroup>
          <FormControl>
            <InputLabel id="car-brand">Marca</InputLabel>
            <Select
              labelId="car-brand"
              onChange={(e) => setBrand(e.target.value as string)}
            >
              {cars?.map((data: IModelCar) => (
                <MenuItem value={data.codigo}>{data.nome}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl disabled={carModal.length < 1}>
            <InputLabel id="car-model">Modelo</InputLabel>

            <Select
              labelId="car-model"
              onChange={(e) => setModel(e.target.value as string)}
            >
              {carModal?.map((data: IModelCar) => (
                <MenuItem value={data.codigo}>{data.nome}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            disabled={!(brand && model)}
            color="secondary"
            variant="contained"
            onClick={handleSubmit}
          >
            Concluir pesquisa
          </Button>
        </FormGroup>
      </section>
    </main>
  );
};
export default SearchPage;
