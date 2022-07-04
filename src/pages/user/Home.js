import React, { useEffect, useState } from 'react'
import MainLayout from '../../layouts/user/MainLayout'
import { instance } from '../../routes/axios.config';

export default function Home() {
    const [user, setUser] = useState([{
        name: '',
        email: '',
    }])

    useEffect(() => {
        instance({
            method: 'get',
            url: '/api/user',
        }).then((response) => {
            setUser(response);
        }).catch((repsonse) => {
        })
    }, [])

    return (
        <MainLayout>
            <div id='container'>
                <p>{user?.name}</p>
                <p>{user?.email}</p>
            </div>
        </MainLayout >
    )
}
