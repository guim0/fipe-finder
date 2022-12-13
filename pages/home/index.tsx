import { UpdateData } from "../../src/components/FormatData";
import { Maskify } from "../../src/components/Maskify";
import { CheckUppercase } from "../../src/components/CheckUppercase";
import { RickAndMorty } from "../../src/components/RickAndMorty";

import { Button } from "../../src/components/Button";

export function Home() {
  return (
    <div>
      <Maskify />
      <UpdateData />
      <RickAndMorty />
      <CheckUppercase title="Checando se primeira é verdadeiro" />

      <Button href="/search">Clique para ir a página de pesquisa</Button>
    </div>
  );
}

export default Home;
