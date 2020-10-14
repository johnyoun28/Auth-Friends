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
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
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
                   <div>
                        <h3 key={friend.id}>{friend.name}</h3>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                   </div>
                ))
            }
            <h2> Add New Friend</h2>
            <form onSubmit={submitHandler}>
                <label> Name
                    <input type='text' name="name" value={formValues.name} onChange={changeHandler}>
                    </input>
                </label>

                <label> Age
                    <input type='text' name="age" value={formValues.age} onChange={changeHandler}>
                    </input>
                </label>

                <label> Email
                    <input type='text' name="email" value={formValues.email} onChange={changeHandler}>
                    </input>
                </label>

                <button> Add Friend </button>
            </form>
        </div>
    )
        }


export default FriendsList
