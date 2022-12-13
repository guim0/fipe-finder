import "./Home.module.scss";
import { UpdateData } from "../../src/components/FormatData";
import { Maskify } from "../../src/components/Maskify";
import { Modal } from "../../src/components/Modal";
import { RickAndMorty } from "../../src/components/RickAndMorty";
import Link from "next/link";

export function Home() {
  return (
    <div className="container">
      <Maskify />
      <UpdateData />
      <RickAndMorty />
      <Modal title="Checando se primeira é verdadeiro" />

      <h1>
        <Link href="/search"> Go on to search page</Link>
      </h1>
    </div>
  );
}

export default Home;
