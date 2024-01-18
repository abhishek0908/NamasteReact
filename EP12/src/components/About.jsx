import React from "react"
import UserClass from "./UserClass"
import UserNameContext from "../utils/UserNameContext"

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
            <UserNameContext.Consumer>
  {(data) => (
    <div>
      <p>Hello, {data.loggingUser}!</p>
    </div>
  )}
</UserNameContext.Consumer>

         <UserClass name = "First Child" location="Indore" username="@abhishek_udiya" />
        
        </div>)
}
}
export default About