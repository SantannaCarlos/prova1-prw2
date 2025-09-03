import React, { useState } from 'react'

export default function Formulario({secoes, marcas, aoSalvar}){
  const [secao, setSecao] = useState(secoes[0])
  const [marca, setMarca] = useState(marcas[0])
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [condicao, setCondicao] = useState('Novo')

  const aoSubmeter = (e) => {
    e.preventDefault()
    aoSalvar({secao, marca, nome, preco, condicao})
    setNome('')
    setPreco('')
    setCondicao('Novo')
    setSecao(secoes[0])
    setMarca(marcas[0])
  }

  return (
    <form className="formulario" onSubmit={aoSubmeter}>
      <h2>Dados do Produto:</h2>
      <label>Seção:</label>
      <select value={secao} onChange={e=>setSecao(e.target.value)}>
        {secoes.map(s=><option key={s} value={s}>{s}</option>)}
      </select>

      <label>Marca:</label>
      <select value={marca} onChange={e=>setMarca(e.target.value)}>
        {marcas.map(m=><option key={m} value={m}>{m}</option>)}
      </select>

      <label>Nome:</label>
      <input value={nome} onChange={e=>setNome(e.target.value)} />

      <label>Preço:</label>
      <input value={preco} onChange={e=>setPreco(e.target.value)} />

      <div className="radio-row">
        <label><input type="radio" checked={condicao==='Novo'} onChange={()=>setCondicao('Novo')} /> Novo</label>
        <label><input type="radio" checked={condicao==='Usado'} onChange={()=>setCondicao('Usado')} /> Usado</label>
      </div>

      <button type="submit">Inserir Produto</button>
    </form>
  )
}
