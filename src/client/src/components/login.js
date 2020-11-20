import React, { useState } from 'react';

import axios from 'axios';
const Login = (props) => {
    const [data, setData] = useState({
        email: '',
        password: '',
        error: null,
    });
    const { email, password, error } = data;

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setData({ ...data, error: null });
            const res = await axios.post(
                '/auth/login',
                { email, password },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );
            localStorage.setItem('token', res.data.jwt);
            props.history.push('/');
        } catch (err) {
            setData({ ...data, error: err.response.data.error });
        }
    };
    return (
        <div className="form mt-5">
            <h4 className="text muted text-center mb-5">Login form</h4>
            <div className="card p-5 shadow">
                <form>
                    <div className="form-group">
                        <label htmlFor="name" className="font-weight-bold">
                            Email
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="font-weight-bold">
                            Password
                        </label>
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    {error ? <p className="text-danger"> {error} </p> : null}
                    <div className="text-center">
                        <button
                            className="btn btn-danger"
                            onClick={handleSubmit}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
