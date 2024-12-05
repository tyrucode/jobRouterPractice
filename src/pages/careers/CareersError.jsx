import { Link, useRouteError } from "react-router-dom"


const CareersError = () => {
    //react router gives us this hook to use to access the error from our loader function that we are throwing
    //in career details
    const error = useRouteError();

    return (
        <div className="careers-error">
            <h2>Error</h2>
            <p>{error.message}</p>
            <Link to='/'>Back to the homepage.</Link>
        </div>
    )
}

export default CareersError