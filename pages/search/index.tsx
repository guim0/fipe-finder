import styles from "./Search.module.scss";
import FormControl from "@mui/material/FormControl";
import { Button, FormGroup, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type IModelCar = {
  nome: string;
  codigo: string;
};

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
  const [year, setYear] = useState("");
  const [carModel, setCarModel] = useState([]);
  const [carYear, setCarYear] = useState([]);

  const router = useRouter();
  useEffect(() => {
    if (!brand) return;

    const fetchCarModels = async () => {
      const data = await fetch(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos`
      );
      const json = await data.json();

      setCarModel(json.modelos);
      return json;
    };

    const fetchModelYear = async () => {
      const data = await fetch(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos/${model}/anos`
      );
      const json = await data.json();

      setCarYear(json);
      return json;
    };

    fetchCarModels();
    fetchModelYear();
  }, [brand, model]);
  async function handleSubmit() {
    const data = await fetch(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos/${model}/anos/${year}`
    );
    const json = await data.json();

    router.push({
      pathname: "/result",
      query: {
        name: json.Modelo,
        year: json.AnoModelo,
        value: json.Valor,
      },
    });
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
          <FormControl disabled={carModel.length < 1}>
            <InputLabel id="car-model">Modelo</InputLabel>

            <Select
              labelId="car-model"
              onChange={(e) => setModel(e.target.value as string)}
            >
              {carModel?.map((data: IModelCar) => (
                <MenuItem value={data.codigo}>{data.nome}</MenuItem>
              ))}
            </Select>
          </FormControl>
          {!(carYear.length < 1) && (
            <FormControl disabled={carYear.length < 1}>
              <InputLabel id="car-year">Ano</InputLabel>

              <Select
                labelId="car-year"
                onChange={(e) => setYear(e.target.value as string)}
              >
                {carYear?.map((data: IModelCar) => (
                  <MenuItem value={data.codigo}>{data.nome}</MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          <Button
            disabled={!carYear}
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
