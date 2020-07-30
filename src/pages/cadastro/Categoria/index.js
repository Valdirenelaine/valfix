import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresInicias ={
    nome:'',
    descricao:'',
    cor:'',
  }
  const [categorias, setCategorias]= useState([]);
  const [values, setValues] = useState(valoresInicias);

  function setValue(chave,valor){
    setValues({
      ...values,
      [chave] :valor,
    })
  }

  function handleChager(infosDoEvento){
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
      );
  }

  return (

    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmiti(infosDoEvento){
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ])
          setValue(valoresInicias)
      }}> 
      <FormField 
        label="Nome da Categoria"
        type = "text"
        name="nome"
        value = {values.nome}
         onChange= {handleChager}
      />

      <FormField 
        label="Descrição"
        type = "text"
        name="descricao"
        value = {values.descricao}
         onChange= {handleChager}
      />
      <FormField 
        label="Cor"
        type = "color"
        name="cor"
        value = {values.cor}
         onChange= {handleChager}
      />

        <button>
          Cadastrar
        </button>
      </form>
            <ul>
              {categorias.map((categoria,indice)=>{
                return(
                  <li key ={`${categoria} ${indice}`}>
                    {categoria.nome}
                  </li>
                )
              })}
            </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;