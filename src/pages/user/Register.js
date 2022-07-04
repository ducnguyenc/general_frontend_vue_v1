import React, { useState } from "react"
import MainLayout from "../../layouts/user/MainLayout"
import { instance } from "../../routes/axios.config"

function Register() {
    const [name, setName] = useState("duc")
    const [email, setEmail] = useState("duc@gmail.com")
    const [password, setPassword] = useState("12345678")
    const [errors, setErrors] = useState([{
        name: '',
        email: '',
        password: '',
    }])

    function handleChangeName(event) {
        setName(event.target.value)
    }

    function handleChangeEmail(event) {
        setEmail(event.target.value)
    }

    function handleChangePass(event) {
        setPassword(event.target.value)
    }

    function handleSubmit(event) {
        setErrors({
            email: '',
            password: ''
        })
        event.preventDefault()

        instance({
            method: 'post',
            url: '/api/register',
            data: {
                name: name,
                email: email,
                password: password,
            }
        }).then((response) => {
        }).catch((error) => {
            if (error.status === 'fail') {
                setErrors(error.data)
            }
        })
    }

    return (
        <MainLayout>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={name} onChange={handleChangeName} />
                        <p>{errors?.name}</p>
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" value={email} onChange={handleChangeEmail} />
                        <p>{errors?.email}</p>
                    </label>
                    <label>
                        Pass:
                        <input type="text" name="password" value={password} onChange={handleChangePass} />
                        <p>{errors?.password}</p>
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        </MainLayout>
    )
}

export default Register
