import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {UserContext} from "../../context/UserContext";
import MainLayout from "../../layouts/user/MainLayout";

function Login() {
    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState("1duc@gmail.com");
    const [password, setPassword] = useState("12345678");
    const history= useNavigate();
    const [errors, setErrors] = useState([{
        email: '',
        password: '',
    }]);

    function handleChangeEmail(event) {
        setEmail(event.target.value)
    }

    function handleChangePass(event) {
        setPassword(event.target.value)
    }

    async function handleSubmit(event) {
        setErrors({
            email: '',
            password: ''
        })
        event.preventDefault()

        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = 'http://localhost/';

        try {
            await axios.get('/sanctum/csrf-cookie');
            const res2 = await axios({
                method: 'post',
                url: '/api/login',
                data: {
                    email: email,
                    password: password,
                }
            })

            localStorage.setItem("isLogin", true);
            await getUser();
            history('/')

        } catch (error) {
            console.log(error);
            setErrors(error.response.data.data)
            
        }
    }
    const getUser = async () => {
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = 'http://localhost/';

        axios({
            method: 'get',
            url: '/api/user',
            data: {}
        }).then(data => {
            setUser(data.data)
        }).catch(err => {
            setUser({name: err.response.data.message})
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
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        </MainLayout>
    )
}

export default Login