// 1
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import Messagebox from './Messagebox';
import axios from 'axios';
// 2
export default function PublicMessagesPage() {
    // 3
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    async function handleSendMessage(e) {
        // 1
        e.preventDefault();
        // 2
        if (!user) {
            alert('Please add your username');
            return;
        }
        // 3
        if (!message) {
            alert('Please add a message');
            return;
        }

        try {
            // 4
            await axios.get('/sanctum/csrf-cookie');
            await axios({
                method: 'get',
                url: '/api/test?user=' + user + '&message=' + message,
                data: {
                    user: user,
                    message: message,
                }
            })

        } catch (error) {
            console.error(error);
        }
    }
    // 1
    useEffect(() => {
        // 2
        Axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
        // 3
        const echo = new Echo({
            broadcaster: 'pusher',
            key: process.env.REACT_APP_MIX_ABLY_PUBLIC_KEY,
            wsHost: '127.0.0.1',
            wsPort: 6001,
            forceTLS: false,
            disableStats: true,
            encrypted: true,
        });
        // 4
        echo
            .channel('channel-name')
            .subscribed(() => {
                console.log('You are subscribed');
            })
            // 5
            .listen('OrderShipmentStatusUpdated', (data) => {
                // 6
                console.log(data);
                setMessages((oldMessages) => [...oldMessages, data]);
                setMessage('');
            });
    }, []);
    // 4
    return (
        <div>
            <div>
                <div>
                    <h1>Public Space</h1>
                    <p>Post your random thoughts for the world to see</p>
                </div>
                <div>
                    {messages.map((message) => (
                        <Messagebox key={message.id} message={message} />
                    ))}
                </div>
                <div>
                    <form onSubmit={(e) => handleSendMessage(e)}>
                        <input
                            type="text"
                            placeholder="Set your username"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            required
                        />
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