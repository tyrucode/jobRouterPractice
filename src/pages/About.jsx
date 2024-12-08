import { useState } from "react"
import { Navigate } from "react-router-dom"


const About = () => {
    // BASIC USER VALIDATION AND TESTING NAVIGATE
    // create a state for the user mario, he is automatically logged in
    const [user, setUser] = useState('mario') 
    // if mario isnt logged in send him to the home page
    if (!user) {
        return(
            <Navigate to='/' />
            //if we didnt want the user to navigate backwards though you type
            // replace={true} and itll work
        )
    }
    //if he is return this instead
    return (
        <div className="about">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptate doloribus optio totam saepe aliquam, et soluta
                 expedita magnam molestiae odit. Eligendi, quis mollitia?
                  Iusto velit deleniti veritatis, autem quis voluptate.</p>
            <button onClick={() => setUser(null)}>LogOut</button>
            {/* simple button that will setuser to null to make the if statement above work */}
        </div>
    )
}

export default About