//importing navLink because its the only part we use in this file
import { NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
    return(
        <div className="root-layout">
            {/* our header navbar */}
            <header>
                <nav>
                    <h1>Jobarouter</h1>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='about'>About</NavLink>
                    <NavLink to='help'>Help</NavLink>
                    <NavLink to='careers'>Careers</NavLink>
                </nav>
            </header>

            <main>
    {/* basically this tells React to always render the navbar above as is and then whatever page we
        are wanting to render we will render here in the outlet under our nav bar */}
                <Outlet />
            </main>
        </div>
    )
}