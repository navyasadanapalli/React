import axios from "axios";
import { Component } from "react";


class UserData extends Component{
    constructor(){
        super()
        this.state={
            UserCollection:[]
        }
    }
    fetchData=()=>{
//         fetch('https://dummyjson.com/users')
// .then(res => res.json())
// .then(response=>{
//     this.setState({
//         UserCollection:response.users
//     })
// });

axios.get('https://dummyjson.com/users')
.then(response=>{
    console.log(response)
    if(response.status===200){
        this.setState({
            UserCollection:response.data.users
        })
    }
    else{
        alert("something went wrong")
    }
       
    });

    }
    render(){
        return(
            <>
            <h4>User Collections</h4>
            <button onClick={this.fetchData}>Click to fetch Data</button>
            {
               this.state.UserCollection.length > 0 && this.state.UserCollection.map(eachObject=>{
                    return(
                        <>
                        <h3>fullname:{`${eachObject.firstName}${eachObject.lastName}`}</h3>
                        <h3>age:{eachObject.age}</h3>
                        <h3>------------------------------------------------------------------</h3>
                        </>
                    )
                })
            }
            </>
        )
    }
}
export default UserData
