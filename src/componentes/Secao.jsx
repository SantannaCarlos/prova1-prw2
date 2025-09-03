import React from 'react'
import Produto from './Produto'

export default function Secao({nome, produtos}){
  if(produtos.length===0) return null
  return (
    <div className="secao">
      <h2>{nome}</h2>
      <div className="cards">
        {produtos.map((p,i)=>(
          <Produto key={i} {...p} />
        ))}
      </div>
    </div>
  )
}
