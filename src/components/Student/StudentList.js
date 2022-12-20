import React from 'react'

import { Link } from 'react-router-dom';

function Studentlist({ studentdata, mentorVisible, DeleteStudent }) {


    return (
        <>
            <tr>
                <td>{studentdata.roll_no}</td>
                <td>{studentdata.name}</td>
                <td>{studentdata.standard}</td>
                <td>{studentdata.gender}</td>
                <td><Link className='btn btn-info btn-sm me-1' to={`/portal/studentview/${studentdata.roll_no}`} >view</Link>
                    {mentorVisible ? <Link className='btn btn-primary btn-sm me-1' to={`/portal/editstudent/${studentdata.roll_no}`}>Edit</Link> : null}
                    {mentorVisible ? <button className='btn btn-primary btn-sm me-1' onClick={() => DeleteStudent(studentdata.roll_no)}>Delete</button> : null}
                </td>
            </tr>
        </>
    )
}

export default Studentlist
