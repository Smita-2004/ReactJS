import React,{Component} from "react";
class Eventhandler extends Component{
    clickme=()=>{
        console.log('button clicked!');
    };
    render(){
        return(
            <h1><button onClick={this.clickme}>ClickMe</button> </h1>
        );
    }

}
export default Eventhandler;