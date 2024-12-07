import { Link, useLocation } from "react-router-dom"


const BreadCrumbs = () => {
    const location = useLocation();
   //we want to split up /help/contact/ into just 'help | contact for the breadcrumb
   //we make currentLink empty so we can push into it

   let currentLink = '';
//note this is just a regular method except its split onto lines for readability/note taking
   const crumbs = location.pathname
   //we take our path and split it at every '/' into their own arrays
   //the issue though is this leaves us with empty arrays that only have ' '
        .split('/')
             //which is why we add on filter too to filter out any element that is 
             //equal to an empty string
            .filter(crumb => crumb !== '')
                //so now we have just an array of words so we map them to change the current link
                //from nothing into /nameOfPage
                .map(crumb => {
                    //this makes it so if we have /help we then add on /contact
                    //because it updates the links name and adds a / (alongside the actual link)
                    currentLink += `/${crumb}`
                    //now we want to take every item from our words array , it will cycle through
                    //them making whatever it is the name of each link, and adding it to our breadCrumb
                    return (
                        <div className="crumb" key={crumb}>
                            <Link to={currentLink}>{crumb}</Link>

                        </div>
                    )  
                })


    return (
        <div className="breadcrumbs">
            {/* here we just add in the work we did above into our actual DOM return */}
            {crumbs}
        </div>
    )
}

export default BreadCrumbs