import { useState } from 'react'
import '../styles/login.scss'

export function Login(): JSX.Element {
    const [loggedIn, setLoggedIn] = useState(false)

    if (!loggedIn) {
        return (
            <div className="login">
                <form action="/api/login" method="GET">
                    <input type="submit" value="Press to login" />

                </form>
            </div>
        )   
    } else {
        return (
            <div className="login">
                
            </div>
        )
    }
}