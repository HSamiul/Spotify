import '../styles/app.scss'
import { Link, Outlet } from "react-router-dom"
import { Login } from "../routes/login"

function App(): JSX.Element {
    return (
        <div className="app">
        <Outlet />
        </div>
    )
}

export default App