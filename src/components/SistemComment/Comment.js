import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { MdDelete, MdSend } from 'react-icons/md'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TfiReload } from "react-icons/tfi";


function Comment() {
  const [registros, setRegistros] = useState('');
  const [formData, setFormData] = useState('');
  const [EmailData, setEmailData] = useState('');

  const [comentariosList, setComentarios] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3001/Comment', {
      email: EmailData,
      Comentario: formData
    }).then(() => {
      getComentarios()
    })
    var MisDatos = { EmailData, formData }
    setRegistros([...registros, MisDatos])
    handleClear();
  }

  const getComentarios = () => {
    Axios.get('http://localhost:3001/GetCommnet').then((response) => {
      setComentarios(response.data);
    });
  }
  
  const handleClear = () => {
    setFormData('');
    setEmailData('');
    document.getElementById('myFormulario').reset();
  }

  useEffect(() => {
    localStorage.setItem("registros", JSON.stringify(registros));
  }, [registros])

  const handleChangeEmail = (e) => {
    setEmailData(e.target.value)
  };

  const handleChange = (e) => {
    setFormData(e.target.value)
  };

  return (
    <Comentarios>
      <ContainerFrom id='myFormulario' onSubmit={handleSubmit}>
        <input type='email' placeholder='Email...' value={EmailData} onChange={handleChangeEmail} required />
        <Messaje>
          <textarea class="input" name="myTextarea" value={formData} onChange={handleChange} placeholder="Deja tu comentario..." required></textarea>
          <Btn>
            <button className='Btn enviar' type='submit'><MdSend /></button>
            <button className='Btn borrar' onClick={handleClear} type='button'><MdDelete /></button>
          </Btn>
        </Messaje>
      </ContainerFrom>
      <MostrarComentarios>
        <h3>Comentarios<TfiReload onClick={getComentarios}/></h3>
        <ContainerComent>
          {
            comentariosList.map((val,key)=>{
              return<div className='CommentUser' key={val.id}>
                <div className='EditComment'><p>{val.email}</p>
                  {/* <div className='Btn Edit'>
                  <button className='Editar'><MdEdit />Editar</button>
                  <button className='borrar'><MdDelete/></button>
                  </div> */}
                </div>
                <hr/>
                <p>{val.comentario}</p>
              </div>
            })
          }
        </ContainerComent>
      </MostrarComentarios>
    </Comentarios>
  )
}
const Comentarios = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 50px 10px;
  gap: 1rem;
  h3{
    margin: 0;
    color: #f7f8f3;
  }
`
const ContainerFrom = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  height: 100%;
  input{
    background-color: transparent;
    border: rgba(255, 255, 255, 0.5) 2px solid;
    color: #f7f8f3;
    border-radius: 6px;
    display: flex;
    width: 92%;
    margin: 5px;
    padding:0 5px;
  }
  .input{
    outline: none;
    width: 98%;
    height: 80px;
    border-radius: 8px;
    overflow-y: hidden;
    resize: none;
    padding: 5px;
  }
  .Btn{
    border: none;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .Btn.enviar{
    color: #1db954;
  }
  .Btn.borrar{
    color: #ff0000;
  }
  .Btn:hover svg{
    transform: scale(1.2);
  }
`
const Messaje = styled.div`
padding: 5px;
  display: flex;
  width: 100%;
`
const Btn = styled.div`
display: flex;
flex-direction: column;
padding: 5px;
gap: 0.5rem;
`
const MostrarComentarios = styled.div`
  max-width: 650px;
  width: 100%;
  height: 300px;
`
const ContainerComent = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 0.5rem;
  scroll-snap-type: x mandatory;
  overflow: auto;
  color: #000;
  &::-webkit-scrollbar{
        width: 4px;
        height: 4px;
    }
    &::-webkit-scrollbar-thumb{
        border-radius: 20px;
        background: #fff;
        padding: 1px;
    }
  .CommentUser{
    background-color: #f7f8f3;
    width: 100%;
    height: 75px;
    padding: 3px 5px;
    border-radius: 10px;
  }
  .EditComment{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  p{
    overflow: hidden;
    margin: 3px;
    font-size: 15px;
  }
  hr{
    margin: 2px;
  }
  .Edit{
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    padding: 2px;
  }
  .Edit button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: none;
    border-radius: 8px;
    padding: 0 5px;
  }
  .Edit button.Editar{
    background-color: #ff6000;
    color: #f7f8f3;
  }
  .Edit button.borrar{
    color: #ff0000;
  }
`

export default Comment
