import axios from "axios"
import React, { useState } from "react"
import MainLayout from "../../layouts/user/MainLayout"

function Login() {
    const [email, setEmail] = useState("duc@gmail.com")
    const [password, setPassword] = useState("12345678")
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

        axios.defaults.withCredentials = true
        axios.defaults.baseURL = 'http://localhost/'
        axios({
            method: 'post',
            url: '/api/login',
            data: {
                email: email,
                password: password,
            }
        }).then((response) => {
            let data = response.data.data
            localStorage.setItem('access_token', data.access_token)
        }).catch((error) => {
            let status = error.response.data.status
            console.log(status);
            if (status === 'fail') {
                let data = error.response.data.data
                setErrors(data)
            }
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
