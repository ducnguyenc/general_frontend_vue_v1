import React, { useContext } from 'react'
import MainLayout from '../../layouts/user/MainLayout'
import { UserContext } from '../../context/UserContext';

export default function Home() {
    const user = JSON.parse(localStorage.getItem('user'));

    async function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <MainLayout>
            <div>
                <form onSubmit={handleSubmit}>
                    <p>{user?.name}</p>
                    <button type="submit">Add</button>
                </form>
            </div>
        </MainLayout>
    )
}
