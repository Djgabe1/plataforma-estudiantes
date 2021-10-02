import React from 'react'
import './student.css'

function student({closeModal}) {
    return (
        <div className='modalBackground'>
            <div className="modalContainer">
                <div className="titleCloseBtn">
                <button  onClick={()=>{closeModal(false)}}> X </button>
                </div>
                
                <div className="modalHeader">
                    <h1>Note auto evaluation</h1>
                </div>
                <div className="modalBody">
                    <form action="">
                        <div className="formGroup1">
                            <label for="doc">Document &nbsp; </label>
                            <input type="text" id='doc' name='doc' />
                        </div>
                        <div className="formGroup2">
                            <label for="auto">Auto evaluation </label>
                            <input type="text" id='auto' name='auto' />
                        </div>
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default student
