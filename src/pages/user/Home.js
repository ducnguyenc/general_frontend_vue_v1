import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MainLayout from '../../layouts/user/MainLayout'

export default function Home() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        let access_token = localStorage.getItem('access_token');
        let email = localStorage.getItem('email');
        let name = localStorage.getItem('name');

        if (email && name) {
            setUser({
                'name': name,
                'email': email,
            });
        } else {
            axios.defaults.withCredentials = true
            axios.defaults.baseURL = 'http://localhost/'
            axios({
                method: 'get',
                url: '/api/user',
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + access_token
                }
            }).then((response) => {
                let data = response.data
                name = localStorage.setItem('email', data.email)
                email = localStorage.setItem('name', data.name)
                setUser({
                    'name': name,
                    'email': email,
                });
            }).catch((error) => {
                console.log(error)
            })
        }
    }, [])

    return (
        <MainLayout>
            <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        </MainLayout >
    )
}
