import React from "react";
import imgHome from "../../assets/home.jpg";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="container">
        <div className="p-30">
          <h1 className="titulo">Home</h1>
          <h3 className="fraseInicial">
            Seja bem-vinde ao meu primeiro programa com React!
          </h3>
        </div>
        <div className="p-30">
          <img src={imgHome} alt="Imagem Tela Inicial" className="img" />
        </div>
      </div>
    </>
  );
}

export default Home;
