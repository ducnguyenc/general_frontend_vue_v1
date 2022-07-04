import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/user/MainLayout";
import { instance } from '../../routes/axios.config';

export default function Logout() {
    const navigate = useNavigate();
    const tokenId = localStorage.getItem("token");

    async function handleSubmit(event) {
        event.preventDefault()

        await instance({
            method: 'post',
            url: '/api/logout',
        }).then((response) => {
            localStorage.removeItem('user')
            navigate('/')
        }).catch((repsonse) => {
        })
    }

    return (
        <MainLayout>
            <div>
                <form onSubmit={handleSubmit}>
                    <button type="submit">Add</button>
                </form>
            </div>
        </MainLayout>
    )
}
