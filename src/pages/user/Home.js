import React from 'react'
import MainLayout from '../../layouts/user/MainLayout'

export default function Home() {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <MainLayout>
            <div>
                <p>{user?.name}</p>
            </div>
        </MainLayout >
    )
}
