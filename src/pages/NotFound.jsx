import { Link } from "react-router-dom"


const NotFound = () => {

    return (
        <div>
            <h2>page not found</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sit!</p>
            <p>Go to the <Link to='/'>Homepage</Link>.</p>
            {/* we use link not navlink because we dont need this styled differently when active etc */}
            {/* using / is the same as using index */}
        </div>
    )
}

export default NotFound