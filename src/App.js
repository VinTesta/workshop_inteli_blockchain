import "./App.css";
import logo from "./assets/logo.svg";
import Input from "./components/Input/Input";

const SITE_URL = "https://www.inteliblockchain.co/";

function App() {
  console.log(process.env);
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center">
      <div className="flex justify-center flex-col items-center p-4 w-full">
        <a
          href={SITE_URL}
          target="_blank"
          className="flex justify-center items-center w-full md:w-2/3 lg:w-2/3"
        >
          <img
            alt="InteliBlockchain"
            src={logo}
            width={256}
            height={128}
            className="w-full mb-4 md:w-2/3"
          />
        </a>

        <div className="m-4 column-md-4 column-sm-12 bg-white bg-opacity-20 text-white rounded-lg py-8 px-4 shadow-lg w-full w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3">
          <h1 className="text-xl md:text-2xl">
            Receba sua Proof-of-Attandance NFT
          </h1>
          <h5 className="mt-4 text-sm">
            Para receber sua NFT você precisa ter participado do evento e ter uma carteira na rede Sepolia.
          </h5>
          <h5 className="mt-4 mb-4 text-sm">
            Ainda não tem uma carteira? Acesse o link e crie a sua já: 
            <a className="text-blue-500 hover:underline ms-2" href="https://metamask.io/download/">
              Clique aqui.
            </a>
          </h5>
          <form action="" method="POST" className="flex flex-col gap-4">
            <Input label="Nome" inputDescription="Esse nome será gravado no NFT para provar sua presença" placeholder="Nome" />
            <Input label="E-mail" inputDescription="Email para receber novidades" placeholder="your.email@email.com" />
            <Input label="Wallet" inputDescription="Carteira para receber o NFT na rede Sepolia" placeholder="0x00...0000" />
            <button className="text-white bg-blue-500 text-xl p-2 rounded-md shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed">Gerar NFT</button>
          </form>
        </div>
      </div>
      <p className="text-center w-full text-gray-400 text-sm">Todo o código pode ser encontrado aqui: </p>
      <p className="text-center w-full text-gray-400 text-sm">Caso tenha alguma dúvida: </p>
    </div>
  );
}

export default App;
