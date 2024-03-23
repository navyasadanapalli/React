import { Component } from "react";


class UpdatingPhase extends Component{
    state={
        count:0,
        color:"red"
    }

    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    componentDidMount(){
        console.log("did mount")
        document.title=`current count ${this.state.count}`
    }
    shouldComponentUpdate(){
        console.log("should component update");
        // document.title=`current count ${this.state.count}`
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(prevState,"previous state");
        return null
    }
    componentDidUpdate(){
        console.log("did update")
        document.title=`current count ${this.state.count}`
    }
    static getDerivedStateFromProps(props,state){
        console.log("get derived state from update")
        return{
            color:props.favcolor
        }
    }
    render(){
        return(
            <>
            <h1>counter example{this.state.count}</h1>
            <button onClick={this.increment}>increment</button>
            </>
        )
    }
}
export default UpdatingPhase;