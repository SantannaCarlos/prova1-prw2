import React, { useState } from 'react'
import Formulario from './componentes/Formulario'
import Secao from './componentes/Secao'

const secoes = ['Computadores','Acessórios','Impressoras','Games','Gadgets']
const marcas = ['HP','Dell','Positivo','Asus','Xing Ling']

export default function App(){
  const [produtos, setProdutos] = useState([])
  const adicionarProduto = (produto) => {
    setProdutos([...produtos, produto])
  }
  return (
    <div className="container">
      <h1>Loja de Informática</h1>
      <Formulario secoes={secoes} marcas={marcas} aoSalvar={adicionarProduto} />
      {secoes.map(secao => (
        <Secao key={secao} nome={secao} produtos={produtos.filter(p => p.secao===secao)} />
      ))}
    </div>
  )
}
