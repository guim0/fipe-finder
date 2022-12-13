import styles from "./Search.module.scss";
import FormControl from "@mui/material/FormControl";
import { Button, FormGroup, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

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
//@ts-ignore
const SearchPage = ({ cars }) => {
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [carModal, setCarModel] = useState([]);
  const [carYear, setCarYear] = useState([]);
  useEffect(() => {
    if (!brand) return;

    const fetchCarDetails = async () => {
      const data = await fetch(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos`
      );
      const json = await data.json();
      setCarModel(json.modelos);
      setCarYear(json.ano);
      return json;
    };

    fetchCarDetails();
  }, [brand]);
  async function handleSubmit() {
    console.log({});
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

          <FormControl disabled={carYear.length < 1}>
            <InputLabel id="car-model">Ano</InputLabel>

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
