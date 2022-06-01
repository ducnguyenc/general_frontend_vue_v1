import React from 'react'
import PublicMessagesPage from '../../components/PublicMessagesPage'
import MainLayout from '../../layouts/user/MainLayout'

export default function Chat() {
    return (
        <MainLayout>
            <PublicMessagesPage />
        </MainLayout>
    )
}
