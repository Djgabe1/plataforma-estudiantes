import React from 'react'

import './admin.css';
import 'bootstrap/dist/css/bootstrap.css';

function Admin() {
    return (
        <div className="adminBackground">
            <div className='adminContainer'>
            <h1 className='adminTitle'> Student List</h1>
            <div className="adminTable">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Document</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Note</th>
                    <th scope="col">Auto Evaluation</th>
                    <th scope="col"><button >Add STudent</button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export default Admin
