import { Link } from "react-router-dom"

export default function Menu() {

    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/balloons' >Balloons</Link>
            <Link to='/contacts' >Contacts</Link>
        </div>
    )
}
