import { useState } from "react";
import { Card, Nome, Preco, Botao } from "./styles";

function CardProduto() {
  const [adicionado, setAdicionado] = useState(false);

  const handleClick = () => {
    setAdicionado(!adicionado);
  };

  return (
    <Card>
      <Nome>Fone Bluetooth</Nome>
      <Preco>R$ 199,90</Preco>

      <Botao adicionado={adicionado} onClick={handleClick}>
        {adicionado ? "Adicionado" : "Adicionar ao carrinho"}
      </Botao>
    </Card>
  );
}

export default CardProduto;
