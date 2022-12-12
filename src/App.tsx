import { QueryClient, QueryClientProvider } from "react-query";
import "./App.scss";
import { UpdateData } from "./components/FormatData";

import { Maskify } from "./components/Maskify";
import { Modal } from "./components/Modal";
import { RickAndMorty } from "./components/RickAndMorty";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Maskify />
        <UpdateData />
        <RickAndMorty />
        <Modal title="Checando se primeira é verdadeiro" />
      </QueryClientProvider>
    </div>
  );
}

export default App;
