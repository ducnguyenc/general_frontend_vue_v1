import axios from "axios";
import React, { useState } from "react";
import MainLayout from "../../layouts/admin/MainLayout";

function Register() {
    const [name, setName] = useState("duc");
    const [email, setEmail] = useState("duc@gmail.com");
    const [password, setPassword] = useState("123");
    const [errors, setErrors] = useState([{
        name: '',
        email: '',
        password: '',
    }]);

    function handleChangeName(event) {
        setName(event.target.value)
    }

    function handleChangeEmail(event) {
        setEmail(event.target.value)
    }

    function handleChangePass(event) {
        setPassword(event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault()

        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = 'http://localhost/';
        await axios.get('/sanctum/csrf-cookie').then(async function(response) {
            await axios({
                method: 'post',
                url: '/api/admin/register',
                data: {
                    name: name,
                    email: email,
                    password: password,
                }
            }).then((response) => {
            }).catch((error) => {
                setErrors(error.response.data.data);
            });
        })
    }


    return (
        <MainLayout>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={name} onChange={handleChangeName} />
                        <p>{errors.name}</p>
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" value={email} onChange={handleChangeEmail} />
                        <p>{errors.email}</p>
                    </label>
                    <label>
                        Pass:
                        <input type="text" name="password" value={password} onChange={handleChangePass} />
                        <p>{errors.password}</p>
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        </MainLayout>
    )
}

export default Register
