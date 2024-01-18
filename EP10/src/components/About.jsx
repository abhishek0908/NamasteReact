import React from "react"
import UserClass from "./UserClass"

class About extends React.Component{
    constructor(props)
    {
        super(props)
        // console.log("Parent Constructor called")
    }
    componentDidMount()
    {

    }
    render(){
        // console.log("Parent Render")
        return(<div className="node">
            {/* Multiple child call and mounted */}
         <UserClass name = "First Child" location="Indore" username="@abhishek_udiya" />
        
        </div>)
}
}
export default About