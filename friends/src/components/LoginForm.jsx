import React, { useState } from 'react'

const initialFormValues = {
    username: "",
    password: ""
}

const Login = () => {
    const [ formValues, setFormValues ] = useState(initialFormValues)

    const changeHandler = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label> Name
                    <input
                     name='name'
                      value={formValues.username}
                       onChange={changeHandler}
                        type="input">
                    </input>

                </label>
                <label> Password
                    <input
                     name='password'
                      value={formValues.password}
                       onChange={changeHandler}
                        type="input">
                    </input>

                </label>
                <button>Login</button>
                
            </form>
            
        </div>
    )
}

export default Login
