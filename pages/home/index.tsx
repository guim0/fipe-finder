import "./Home.module.scss";
import { UpdateData } from "../../src/components/FormatData";
import { Maskify } from "../../src/components/Maskify";
import { Modal } from "../../src/components/Modal";
import { RickAndMorty } from "../../src/components/RickAndMorty";

export function Home() {
  return (
    <div className="container">
      <Maskify />
      <UpdateData />
      <RickAndMorty />
      <Modal title="Checando se primeira é verdadeiro" />
    </div>
  );
}

export default Home;
