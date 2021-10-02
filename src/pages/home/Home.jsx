import React, { useState } from 'react'

//styles
import './home.css'


//components
import Student from '../../components/students/student'
import LoginAdmin from '../../components/admin/loginAdmin';

export default function Home() {
        const [openModal, setOpenModal] = useState(false);
        const [openLogin, setOpenLogin] = useState(false);
        return (
            <div className='homeContainer'>
            <h1 className="titulo">Bienvenidos a la plataforma</h1>
            <h3 className="subtitulo">¿Que usuario eres?</h3>
            {/* Estudiante */}
            <button className='openModalBtn' 
                onClick={()=>{setOpenModal(true)}}>
                    Estudiante
            </button>
                {openModal && <Student closeModal={setOpenModal}/>}
                <br />
            {/* Administrador */}
            <button className='openModalBtn'
            onClick={()=>{setOpenLogin(true)}}>
                    Administrador
            </button>
            {openLogin && <LoginAdmin closeModal={setOpenLogin}/>}
        </div>
        )
    }

