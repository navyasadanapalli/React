import React from 'react';
class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            counter:0,
            isSubscribe:false
        }
    }

    increment=()=>{
        this.setState({
            counter:this.state.counter+1
        },()=>{
            console.log(this.state.counter)
        }
        )
    }
   
    decrement=()=>{
        this.setState({
            counter:this.state.counter-1
        }
        )
    }

    reset=()=>{
        this.setState({
            counter:0
        },()=>{})
    }

    handleSubscribe=()=>{
        this.setState(
            {
            isSubscribe:!this.state.isSubscribe
            }
        )
    }
    render(){
        return(
            <div>
                <button onClick={this.handleSubscribe}>
                    {
                    this.state.isSubscribe ? "UnSubscribe":"Subscribe"
                     }
                     </button>

               
                
                {
                   this.state.isSubscribe
                   ?
                 <>
                 <h4>{this.state.counter}</h4>
                             <button onClick={this.increment}>Increment</button>
                             <button onClick={this.decrement}>Decrement</button>
                             <button onClick={this.reset}>Reset</button>
                             </>
               
               :
               <h2>Please Subscribe7</h2>
                }
             

           
               
            
            
            </div> 
            
        
    
    
        )

    }

}
export default Counter;



