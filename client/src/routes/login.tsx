import { useState } from 'react'
import '../styles/login.scss'

export function Login(): JSX.Element {
    return (
        <div className="login">
            <form action="/api/login" method="GET" className='login-form'>
                <input type="submit" value="Press to login" className='login-submit'/>
            </form>
        </div>
    )   
}