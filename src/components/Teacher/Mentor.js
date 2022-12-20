import React, { useEffect, useState } from 'react'
import MentorList from './MentorList'
import { Link } from "react-router-dom"
import axios from 'axios';

function Mentor() {
    const [mentordata, setmentorData] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    let getUsers = async () => {
        try {
            const users = await axios.get("https://638dfe2b4190defdb753283c.mockapi.io/Teacher");
            setmentorData(users.data);

        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div className="card shadow mb-4">
            <div className="card-header py-3 d-sm-flex  justify-content-between mb-4">
                <h6 className="m-0 font-weight-bold text-primary">Mentors List</h6>
                <Link className="btn btn-outline-success btn-sm" to="/portal/student">Student List</Link>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Subject</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mentordata.map((dt, index) => <MentorList key={index} mentordata={dt} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Mentor
