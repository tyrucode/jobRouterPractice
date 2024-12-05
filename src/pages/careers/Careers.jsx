import { Link, useLoaderData } from "react-router-dom"

const Careers = () => {
    // normally when we fetch data for a component we make a useEffect and we fetch the data with that.
    // this helps so we dont have to store the data in any local state

    //after making loader function and connecting it to our originally routes in App, we now need to access this
    //function in our actual component.
    const careers = useLoaderData();
    return (
        <div className="careers">
        {/* we take our careers data, map over it all, make them all Links to home, make them all
        have keys equal to the ids provided from the data (UUID IF NEEDED not here tho)
        then just list the respective careers title and locations */}
            {careers.map(career => (
                //we set the link to be /career/id and we turn it into a string since itll be a number
                //since we are in career layout the ur is already /career so all we do is add the id part below
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in: {career.location}</p>
                </Link>
            ))}
        </div>
    )
}
//first we make a loader function outside of the component
export const careersLoader = async () => {
    //for simplicity sake we fetch from our data folder but normally we would use axios and fetch from a api
    //using fake json server so we can pretend we are fetching our data and that its not in a different folder
    const res = await fetch('http://localhost:4000/careers')

    if (res.ok !== true) {
        throw Error('could not fetch the careers')
    }

    return res.json()
}
// THIS WILL LOOK DIFFERENT WITH AXIOS SO BEWARE OF THAT AND RESEARCH TO FIGURE IT OUT
export default Careers