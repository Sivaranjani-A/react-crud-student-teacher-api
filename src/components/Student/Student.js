import React, { useState, useEffect } from 'react'
import Studentlist from './StudentList'
import { Link } from "react-router-dom"
import axios from "axios";


function Student({ mentorVisible }) {
    const [isLoading, setLoading] = useState(true);
    const [studentdata, setstudentData] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    let getUsers = async () => {
        try {
            const users = await axios.get("https://638dfe2b4190defdb753283c.mockapi.io/student");
            setstudentData(users.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const DeleteStudent = async (roll_no) => {
        const confirm = window.confirm("Do you want to delete this record?")

        if (confirm) {
            await axios.delete(`https://638dfe2b4190defdb753283c.mockapi.io/student/${roll_no}`);
            getUsers();
        }
    };

    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-sm-flex  justify-content-between mb-4">
                    <h6 className="m-0 font-weight-bold text-primary">Students List</h6>
                    {mentorVisible ? <Link to="/portal/admissionform" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Admission Form</Link> : null}

                </div>
                {isLoading ? <h1>Loading...</h1> : <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Roll.No</th>
                                    <th>Name</th>
                                    <th>Standard</th>
                                    <th>Gender</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentdata.map((dt, index) => <Studentlist key={index} studentdata={dt} mentorVisible={mentorVisible} DeleteStudent={DeleteStudent} />)}
                            </tbody>
                        </table>
                    </div>
                </div>}

            </div>
            {mentorVisible ? <div className="d-sm-flex  justify-content-start" >
                <Link to="/portal/mentor" className="btn btn-sm btn-primary shadow-sm ">BACK</Link>
            </div> : null}
        </>
    )
}

export default Student
