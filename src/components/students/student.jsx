import React, {useState} from 'react'
import Axios from 'axios';
import './student.css'

function Student({closeModal}) {
    const [document, setDocument] = useState('');
    const [autoevaluation, setAutoevaliation] = useState('');

    const addAutoStudents = () =>{
        Axios.post('http://localhost:9000/api/student/autoevaluation',
        {
            document: document,
            autoevaluation: autoevaluation
        })
    }

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
                    <form>
                        <div className="formGroup1">
                            <label for="document">Document &nbsp;  &nbsp;   </label>
                            <input type="text" id='document' name='document' onChange={
                                (event)=>setDocument(event.target.value)
                            } />
                        </div>
                        <div className="formGroup2">
                            <label for="autoevaluation">Auto evaluation </label>
                            <input type="text" id='autoevaluation' name='autoevaluation' 
                            onChange={
                                (event)=>setAutoevaliation(event.target.value)
                            }
                            />
                        </div>
                    </form>
                </div>
                <div className="modalFooter">
                <button onClick={addAutoStudents}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Student
