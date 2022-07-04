import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import Echo from 'laravel-echo';
import Messagebox from './Messagebox';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

export default function PublicMessagesPage() {
    const { user } = useContext(UserContext);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    async function handleSendMessage(e) {
        e.preventDefault();
        if (!user) {
            alert('Please add your username');
            return;
        }
        if (!message) {
            alert('Please add a message');
            return;
        }

        axios({
            method: 'get',
            url: '/api/test',
            params: {
                user: user.name,
                message: message,
            }
        }).then(function (response) {
            console.log(response);
        }).error(function (err) {
            console.log(err);
        });
    }

    useEffect(() => {
        Axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
        const echo = new Echo({
            broadcaster: 'pusher',
            key: process.env.REACT_APP_MIX_ABLY_PUBLIC_KEY,
            wsHost: '127.0.0.1',
            wsPort: 6001,
            forceTLS: false,
            disableStats: true,
            encrypted: true,
        });
        echo
            .channel('channel-name')
            .subscribed(() => {
            })
            .listen('OrderShipmentStatusUpdated', (data) => {
                setMessages((oldMessages) => [...oldMessages, data]);
                setMessage('');
            });
    }, []);

    return (
        <div>
            <div>
                <div>
                    <h1>Public Space</h1>
                    <p>Post your random thoughts for the world to see</p>
                </div>
                <div>
                    {messages.map((message, key) => (
                        <Messagebox key={key} message={message} />
                    ))}
                </div>
                <div>
                    <form onSubmit={(e) => handleSendMessage(e)}>
                        <b>{user?.name}</b>
                        <div>
                            <input
                                type="text"
                                placeholder="Type your message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            <button onClick={(e) => handleSendMessage(e)}>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
