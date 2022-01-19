import React, { useContext } from 'react';
import incomeImg from '../../assets/entrada.svg';
import outcomeImg from '../../assets/saida.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from "./styles";


export function Summary() {
  const {transactions} = useContext(TransactionsContext);

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entrada" />
        </header>
        <strong>R$1500,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong> - R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$1000,00</strong>
      </div>
    </Container>
  );
}