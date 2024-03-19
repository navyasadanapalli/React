// import { Component } from "react";

// class Circles extends Component{
//     constructor(){
//         super()
//         this.state={
//             circle:[]
//         }
//     }
//     incrrement=()=>{
//        const newCircle={
//             id:this.state.count.length+1
//         };
//         const updatedcircles=this.state.circle.concate(newCircle);
//         this.setState({
//             circle:updatedcircles
//         })
//     }
//     render(){
//         return(
//             <>
//             <button onClick={this.incrrement}>Add Circles</button>
            
//                 {
//                     this.state.Circles.map(Circles=>(
//                         <div>
//                             key={Circles.id}
//                             style={{
//                                 width: "50px",
//                                 height: "50px",
//                                 border:"2px solid black",
//                                 borderRadius:"50%",
//                                 marging:"10px",
//                                 display:"inline-block"
//                             }}
//                         </div>
//                     ))
//                 }
              
            
//             </>

//         )
//     }
// }
// export default Circles;



import React, { Component } from "react";

class Circles extends Component {
    constructor() {
        super();
        this.state = {
            circles: [] // Changed from count to circles
        };
    }

    adding = () => {
        const newCircle = {
            id: this.state.circles.length + 1
        };
        const updatedCircles = this.state.circles.concat(newCircle); // Fixed typo in concat
        this.setState({
            circles: updatedCircles // Changed Circles to circles
        });
    };

    decrement = () => {
        if (this.state.circles.length > 0) {
            const updatedCircles = this.state.circles.slice(0, -1);
            this.setState({
                circles: updatedCircles
            });
        }
    };

    render() {
        return (
            <>
                <button onClick={this.adding}>Add Circles</button>
                <button onClick={this.decrement}>decrement</button>
                <div>
                    {this.state.circles.map(circle => ( // Changed Circles to circles
                        <div
                            key={circle.id} // Moved key inside div
                            style={{
                                width: "50px",
                                height: "50px",
                                border: "2px solid black",
                                borderRadius: "50%",
                                margin: "10px", // Fixed typo in margin
                                display: "inline-block"
                            }}
                        />
                    ))}
                </div>
                
            </>
        );
    }
}

export default Circles;
