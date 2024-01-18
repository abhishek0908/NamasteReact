import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userDetail :{
                username:"dummy@123",
                name:"Dummy",
                location:"Mars",
            }
        }
        // console.log(this.props.name+"Constructor Called")
    }
    async componentDidMount()
    {
        // console.log(this.props.name+"Mount")
        const data = await fetch('https://api.github.com/users/abhishek0908')
        const userdata = await data.json()
        this.setState({
            userDetail:userdata
        })
    }
    componentDidUpdate()
    {
        console.log("Ho gya bhai update")
    }
    render(){
        
        const {name,location,login,avatar_url} = this.state.userDetail
        // console.log(name+"Render")
        return(
        <div className="user-card">
       <img className = "avatar" src={avatar_url}></img>
        <h3>Name : {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Username: {login}</h3>
        </div>
        )
    }
}
export default UserClass