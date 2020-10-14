import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialFriendsList = {
    id: Date.now(),
    name: "",
    age: "",
    email: ""
}

const FriendsList = () => {
    const [formValues, setFormValues] = useState(initialFriendsList)
    const [friends, setFriends] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .post('/friends', formValues)
        .then(res)
        .catch(err => {
            console.log(err)
        })
        setFriends(res.data)
    }

    useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    

    const changeHandler = e => {
        setFormValues({...formValues, [e.target.name]: e.target.value })

    }
    return (
        <div>
            <h1>Friends List</h1>
            {
                friends.map(friend => (
                    <h3 key={friend.id}>{friend.name}</h3>
                ))
            }
        </div>
    )
}

export default FriendsList
