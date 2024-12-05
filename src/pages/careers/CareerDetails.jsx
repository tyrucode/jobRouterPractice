import { useLoaderData, useParams } from "react-router-dom"


const CareerDetails = () => {
    // to access the route parameter ID we use a react router hook called useParams
    // doesnt have to be called id, just have to make sure whatever we call it is what we destructure here and
    // is what we call in the App component.
    const { id } = useParams();
    const career = useLoaderData();
    
    //since in our loader function we are loading based on the ID that gets passed in it will show us the
    //specific career we are wanting depending on what page is clicked 
    return (
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting Salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, odit.  
            </div>
        </div>
    )
}
//loader function
                            //since scope is different we grab the params right here (aka the id)
export const careerDetailsLoader = async ({ params }) => {
    //destructuring further
    const { id } = params
    //call our api and get the careers ID 
    const res = await fetch('http://localhost:4000/careers/' + id)
    //in react res.ok is a built in property that if true means we have data if false means we dont have data
    if (res.ok !== true) {
        throw Error('could not find that career')
    }
    return res.json()
}

export default CareerDetails