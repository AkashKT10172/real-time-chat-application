import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Chatpage = () => {
    const [chats, setChats] = useState([]);
    const fetchChats = async () => {
        const data = await axios.get('/api/chats')
        setChats(data.data);
    }
    useEffect(() => {
        fetchChats();
    }, []);
  return (
    <div>
        {
            chats.map((chat) => (
                <p key={chat._id}>{chat.chatName}</p>
            ))
        }
    </div>
  )
}

export default Chatpage