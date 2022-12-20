import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';

function StudentView() {

    const params = useParams();
    const [details, setstudentData] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    let getUsers = async () => {
        try {
            const users = await axios.get(`https://638dfe2b4190defdb753283c.mockapi.io/student/${params.roll_no}`);
            setstudentData(users.data);

        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="container py-5 h-100 ">
            <div className="row d-flex justify-content-center align-items-center h-100 ">
                <div className="col col-xl-9">
                    <h2 className='m-auto' style={{ textAlign: "center" }}>STUDENT DETAILS</h2>
                    <div className="card m-auto mt-3" style={{ width: "30rem" }}>
                        <div className="card-header text-center text-uppercase">
                            <strong>{details.name}</strong>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Roll.No : {details.roll_no}</li>
                            <li className="list-group-item">Standard : {details.standard}</li>
                            <li className="list-group-item">Gender : {details.gender}</li>
                            <li className="list-group-item">Mother's Name : {details.mother_name}</li>
                            <li className="list-group-item">Father's Name : {details.father_name}</li>
                            <li className="list-group-item">Contact: {details.contact}</li>
                            <li className="list-group-item">Address : {details.address}</li>
                        </ul>
                    </div>
                    <div className="d-sm-flex  justify-content-end mt-3" >
                        <Link to="/portal/student" className="btn btn-sm btn-primary shadow-sm ">BACK</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentView
