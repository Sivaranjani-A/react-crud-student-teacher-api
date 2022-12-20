import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useParams } from 'react-router-dom';
import axios from "axios";
const formvalidationSchema = yup.object({
    roll_no: yup
        .number()
        .required(),
    name: yup
        .string()
        .required().min(4),
    standard: yup
        .string()
        .required(),
    mother_name: yup
        .string()
        .required().min(4),
    father_name: yup
        .string()
        .required().min(4),
    contact: yup
        .string()
        .required().min(10),
    address: yup
        .string()
        .required().min(5)
})

function EditStudent() {
    const [isLoading, setLoading] = useState(false);
    const params = useParams();

    useEffect(() => {
        getUsers();
    }, []);

    let getUsers = async () => {
        try {
            const details = await axios.get(`https://638dfe2b4190defdb753283c.mockapi.io/student/${params.roll_no}`);
            myFormik.setValues(details.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    const navigate = useNavigate();

    const myFormik = useFormik({
        initialValues: {
            roll_no: "",
            name: "",
            standard: "",
            mother_name: "",
            father_name: "",
            contact: "",
            address: ""
        },
        validationSchema: formvalidationSchema,
        onSubmit: async (values) => {
            try {
                setLoading(true);
                await axios.put(`https://638dfe2b4190defdb753283c.mockapi.io/student/${params.roll_no}`, values);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
            navigate("/portal/student");

        },
    })

    return (
        <>
            <form className="container" onSubmit={myFormik.handleSubmit}>
                <div className="row mt-4 ps-5">
                    <div className="col-lg-5  mt-5">
                        <input
                            type="text"
                            className={`form-control ${myFormik.touched.name && myFormik.errors.name ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.name}
                            name="name"
                            placeholder="Name"
                            onBlur={myFormik.handleBlur}
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.name && myFormik.errors.name ? myFormik.errors.name : null}</span><br />
                        <input
                            type="text"
                            className={`form-control ${myFormik.touched.standard && myFormik.errors.standard ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.standard}
                            name="standard"
                            placeholder="Enter your class"
                            onBlur={myFormik.handleBlur}
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.standard && myFormik.errors.standard ? myFormik.errors.standard : null}</span><br />
                        <input
                            type="text"
                            className={`form-control ${myFormik.touched.roll_no && myFormik.errors.roll_no ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.roll_no}
                            name="roll_no"
                            placeholder="Roll_No"
                            onBlur={myFormik.handleBlur}
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.roll_no && myFormik.errors.roll_no ? myFormik.errors.roll_no : null}</span><br />
                        <input
                            type="text"
                            className={`form-control ${myFormik.touched.mother_name && myFormik.errors.mother_name ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.mother_name}
                            name="mother_name"
                            placeholder="Enter Mother's Name"
                            onBlur={myFormik.handleBlur}
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.mother_name && myFormik.errors.mother_name ? myFormik.errors.mother_name : null}</span><br />
                    </div>
                    <div className="col-lg-5 mt-5 ms-0">
                        <input
                            type="text"
                            className={`form-control ${myFormik.touched.father_name && myFormik.errors.father_name ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.father_name}
                            name="father_name"
                            placeholder="Enter Father's Name"
                            onBlur={myFormik.handleBlur}
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.father_name && myFormik.errors.father_name ? myFormik.errors.father_name : null}</span><br />
                        <input
                            type="text"
                            className={`form-control ${myFormik.touched.contact && myFormik.errors.contact ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.contact}
                            name="contact"
                            placeholder="Contact"
                            onBlur={myFormik.handleBlur}
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.contact && myFormik.errors.contact ? myFormik.errors.contact : null}</span><br />
                        <textarea rows="3" cols="3"
                            type="text"
                            className={`form-control ${myFormik.touched.address && myFormik.errors.address ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.address}
                            name="address"
                            placeholder="Enter address"
                            onBlur={myFormik.handleBlur}
                            onChange={myFormik.handleChange}>
                        </textarea><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.address && myFormik.errors.address ? myFormik.errors.address : null}</span><br />
                        <div className="d-sm-flex  justify-content-end mt-3">
                            <button disabled={isLoading} type="submit" className="btn btn-primary create-btn">
                                {isLoading ? "isLoading" : "Update"}
                            </button>
                        </div>
                    </div>
                </div>

            </form>
        </>
    )
}

export default EditStudent
