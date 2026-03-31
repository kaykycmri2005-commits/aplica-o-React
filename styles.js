import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
`;

export const Nome = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Preco = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 12px;
`;

export const Botao = styled.button`
  background-color: ${(props) =>
    props.adicionado ? "#198754" : "#6c757d"};
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;
