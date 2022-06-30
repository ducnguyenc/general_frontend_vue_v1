import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import PublicMessagesPage from '../../components/PublicMessagesPage'
import { UserContext } from '../../context/UserContext';
import MainLayout from '../../layouts/user/MainLayout';

export default function Home() {
    const { user } = useContext(UserContext);
    let navigate = useNavigate();

    useEffect(() => {
        if (!Object.keys(user).length) {
            navigate("/")
        }
    })

    return (
        <MainLayout>
            <PublicMessagesPage />
        </MainLayout>
    )
}
