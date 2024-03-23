
import { Component } from "react"


class Parent extends Component{
    constructor(){
        super()
        this.state={
            isChildVisible:true
        }
    }
    toggleChild=()=>{
        this.setState({
                isChildVisible:!this.state.isChildVisible
            }
        )
    }

    render(){
        return(
            <>
            <h1>i am parent</h1>
            <button onClick={this.toggleChild}>toggle the child</button>
            {
                this.state.isChildVisible
                ?
                <Child/>
                :
                <h1>child hidden</h1>
            }
            </>
        )
    }
  }
  export default Parent

  class Child extends Component{
    componentWillUnmount(){
        alert("child removed from dom")
        console.log("we can clear the memory leaks")
    }
    render(){
        return(
            <h1>child visible</h1>
        )
    }
  }
