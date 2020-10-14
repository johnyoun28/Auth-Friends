import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const initialFormValues = {
    username: "",
    password: ""
}

const Login = () => {
    const [ formValues, setFormValues ] = useState(initialFormValues)
    const history = useHistory()

    const changeHandler = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault()
        axiosWithAuth()
        .post("/login", formValues).then(res => {
            localStorage.setItem("token", res.data.payload)
            history.push('/friendslist')
            // .catch(err => {
            //     console.log(err)
            // })
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label> Name
                    <input
                     name='username'
                      value={formValues.username}
                       onChange={changeHandler}
                        type="text">
                    </input>

                </label>
                <label> Password
                    <input
                     name='password'
                      value={formValues.password}
                       onChange={changeHandler}
                        type="text">
                    </input>

                </label>
                <button>Login</button>
                
            </form>
            
        </div>
    )
}

export default Login
