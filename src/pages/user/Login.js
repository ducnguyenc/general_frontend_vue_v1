import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/user/MainLayout";
import { instance } from '../../routes/axios.config';

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState("duc@gmail.com");
    const [password, setPassword] = useState("12345678");
    const [errors, setErrors] = useState([{
        email: '',
        password: '',
        error: '',
    }])

    function handleChangeEmail(event) {
        setEmail(event.target.value)
    }

    function handleChangePass(event) {
        setPassword(event.target.value)
    }

    function handleSubmit(event) {
        setErrors({
            email: '',
            password: '',
            error: '',

        })
        event.preventDefault()

        instance({
            method: 'post',
            url: '/api/login',
            data: {
                email: email,
                password: password,
            }
        }).then((response) => {
            const token = JSON.stringify(response.data.token)
            localStorage.setItem('token', token)
            const user = JSON.stringify(response.data.user)
            localStorage.setItem('user', user)
        }).catch((repsonse) => {
            history('/')
        })
    }

    return (
        <MainLayout>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input type="text" name="email" value={email} onChange={handleChangeEmail} />
                        <p>{errors.email}</p>
                    </label>
                    <label>
                        Pass:
                        <input type="text" name="password" value={password} onChange={handleChangePass} />
                        <p>{errors.password}</p>
                        <p>{errors.error}</p>
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        </MainLayout>
    )
}

export default Login
