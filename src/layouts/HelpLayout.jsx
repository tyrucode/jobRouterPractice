import { NavLink, Outlet } from "react-router-dom"

const HelpLayout = () => {
    return (
        <div className="help-layout">
            {/* On pages with the help layout we show the h2 and p */}
            {/* no matter what */}
            <h2>Website Help</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, molestiae.</p>
            {/* then we show buttons that link to these pages */}
            <nav>
                <NavLink to='faq'>View The FAQ</NavLink>
                <NavLink to='contact'>Contact Us</NavLink>
            </nav>
            {/* then depending on which is clicked we show that pages content for the rest of the page*/}
            <Outlet/>
        {/* Since this is embedded we dont need to redo navbar etc because the root already has those
        which is why we keep those and then have new navlinks    */}
        </div>  
    )
}

export default HelpLayout