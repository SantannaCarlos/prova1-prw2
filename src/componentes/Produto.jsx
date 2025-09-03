import React from 'react'

const iconesMarca = {
  'HP': '/imagens/hp.png',
  'Dell': '/imagens/dell.png',
  'Positivo': '/imagens/positivo.png',
  'Asus': '/imagens/asus.png',
  'Xing Ling': '/imagens/xingling.png'
}

export default function Produto({nome, preco, marca, condicao}){
  const icone = iconesMarca[marca]
  return (
    <div className="card">
      <div className="marca">
        {icone ? <img src={icone} alt={marca} style={{width:'100%', height:'100%', objectFit:'contain'}} /> : marca[0]}
      </div>
      <h3>{nome}</h3>
      <p>{marca}</p>
      <p>{preco}</p>
      <p>{condicao.toUpperCase()}</p>
    </div>
  )
}
