import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../Context/UserContext';

function Login({ setMentorVisible }) {
    const userdata = useContext(UserContext);

    const navigate = useNavigate();
    return (
        <section className="vh-100 mt-5 pt-3">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>

                            {/* <!-- Email input --> */}
                            <div className="form-outline mb-3">
                                <input type="text" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a username" onChange={(event) => userdata.setUsername(event.target.value)} />
                                <label className="form-label" For="form3Example3">Username</label>
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter password" />
                                <label className="form-label" For="form3Example4">Password</label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                {/* <!-- Checkbox --> */}
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" For="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div className="d-flex row p-2" >
                                <button onClick={() => {
                                    setMentorVisible(true);
                                    navigate("/portal/mentor")
                                }} type="button" className="btn btn-primary btn-lg mt-2"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login as a Teacher</button>
                                <button onClick={() => {
                                    setMentorVisible(false);
                                    navigate("/portal/student")
                                }} to="/portal/student" type="button" className="btn btn-primary btn-lg mt-2"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login as a student</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Login