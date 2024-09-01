import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userInfo: {
                name: 'dummy',
                location:'Default',
            },
        };

       

        
    }

    

    async componentDidMount(){
     
        const data = await fetch(" https://api.github.com/users/akshaymarch7");
        const json = data.json();
        console.log(json)

        this.setState({
            userInfo: json,
        })
    }

  

    render(){
        


        return (
            <div className="user-card">               
               
                <h1>Name: {this.state.userInfo.name}</h1>
                <h2>Location: {this.state.location}</h2>
            </div>
        )
    }
}

export default UserClass;