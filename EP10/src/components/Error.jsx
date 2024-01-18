import {useRouteError}  from 'react-router-dom'
const Error = ()=>{
    const error= useRouteError();
    console.log(error)
    return(
        <div className="error">
            <h1>OOPS!! Something went Wrong</h1>
            <h1>{error.status}</h1>
            <h1>{error.data}</h1>
        </div>
    )
}
export default Error;