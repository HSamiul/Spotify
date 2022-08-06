import '../styles/nothing.scss'
import { Link } from "react-router-dom";

// UNSAFE: Assumes user logged in
function Nothing(): JSX.Element {
    return (
        <div className="nothing">
            <p> There's nothing here! Go back to the <Link to="/profile">home page</Link></p>
        </div>
    )
}

export default Nothing