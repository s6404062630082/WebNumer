import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ReactDOM from "react-dom";

var ans='ans',Equation='equation',X='x';

const mainDiv = {
    display:"flex",
    width:"100%",
    margin:"0 auto"
}

const Div = {
    width:"100%",
    margin:"0 auto"
}

const Windowsstyle = {
    width:"30%",
    height:"30vh",
    border:"1px solid black",
    borderRadius:"5px",
    margin:"0 0 0 65vw",
    position:"fixed",

};

class Bisection extends Component{
    constructor(){
        super();
    }
    getValue(){
        
        var equation = document.getElementById("equation").value;
        var x = document.getElementById("InputX").value;
        
        Equation=equation;
        X=x;
        ans=eval(equation);

        document.getElementById("ShowEquation").innerHTML=Equation; //โยนค่าเข้าไปในhtml
        document.getElementById("ShowX").innerHTML=X;
        document.getElementById("ShowAns").innerHTML=ans;

       
       
    }
    render(){
        return(
            <div>
               <div style={mainDiv}>
                   <div  style={Div} >
                        <h1> Graphical Method</h1>
                        <Form>
                        <Form.Group className="mb-3">
                            
                            <div>
                                
                                <Form.Control id="equation" type="text" placeholder="equation" style={{width:"20%",margin:"0 auto"}}></Form.Control>
                                <Form.Control id="InputX" type="number" placeholder="input x" style={{width:"20%",margin:"0 auto"}}></Form.Control>
                                
                            </div>
                            <Button onClick={this.getValue}  style={{width:"10%",margin:"0 auto"}} >
                                    done
                            </Button>
                            
                            <div id="Matrixinput"></div> 
                        </Form.Group>
                        </Form>

                        <div id="ShowEquation"></div>
                        <div id="ShowX"></div>
                        <div id="ShowAns"></div>
                        
                    </div>
                   
                </div>
            </div>
            
        );
    }
}
export default Bisection;