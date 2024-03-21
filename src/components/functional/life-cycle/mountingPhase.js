import axios from "axios";
import { Component } from "react";
import { InfinitySpin } from "react-loader-spinner";
import CardComponent from "../card/card-component";



class MountingPhase extends Component{
    constructor(){
        super()
        // console.log("constructore")
        this.state={
            message:"good morning",
            users:[]
        }
    }
    componentDidMount(){
        // console.log("component did mount")
        axios.get("https://dummyjson.com/users")
        .then(Response=>{
            console.log(Response)
            this.setState({
                users:Response.data.users
            })
        })

    }
    render(){
        // console.log("render")
        return(
            <>
            <h4>navya</h4>
            {
                this.state.users.length>0
                ?
                this.state.users.map(eachObject=>{
                    return(
                        
                        // <h3>{eachObject.firstName}</h3>
                        <CardComponent item={eachObject}/>
                       
                    )
                })
                :
                <>
                <InfinitySpin/>
                <h3>please wait</h3>
                </>
            }
            
            </>
        )
    }
}
export default MountingPhase;