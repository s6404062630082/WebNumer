import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const mainDiv = {
    display:"flex",
    width:"100%",
    margin:"0 auto"
}

const Div = {
    width:"100%",
    margin:"0 auto"
}

class Secent extends Component{
    constructor(){
        super();
    }
    
        
    getValue(){
        var equation = document.getElementById("equation").value;
        var x = document.getElementById("InputX").value;

        var Equation=equation;
        var X0=x;
        x=X0;
        var fx0 = eval(equation);
        var X1=Number(X0)-(Number(fx0)/(2*Number(X0)));
        
      
      do { 
        x=X0;
        var fx0 = eval(equation);
        x=X1;
        var fx1 = eval(equation);

        var X2=Number(X1)-((Number(fx1)*(Number(X0)-Number(X1))) / (Number(fx0)-Number(fx1) ));
        var es = Math.abs( (Number(X2)-Number(X1)) / Number(X2));
       
        X0=X1;
        X1=X2;
        
        }while((Number(es)*100) > 0.000001);
        
        document.getElementById("Showm").innerHTML=X2;
        document.getElementById("ShowM").innerHTML=X2;
        x=X2;
        var Cheak = eval(equation);
        if(Cheak<0.000001){
            Cheak=0;
        }
        document.getElementById("ShowE").innerHTML=Equation;
        document.getElementById("ShowC").innerHTML=Cheak;

       
    }
    render(){
        return(
            <div>
               <div style={mainDiv}>
                   <div  style={Div} >
                        <h1> Secent Method </h1>
                        <br></br>
                    
                            <div>
                                <Form.Control id="equation" type="text" placeholder="input equation" style={{width:"20%",margin:"0 auto"}}></Form.Control>
                                <br></br>
                                <Form.Control id="InputX" type="number" placeholder="input X" style={{width:"20%",margin:"0 auto"}}></Form.Control>
                                
                            </div>
                            <br></br>
                            <Button onClick={this.getValue}  style={{width:"10%",margin:"0 auto"}} >
                                    done
                            </Button>
                            
                        <br></br><br></br><br></br>
                        <div style={{width:"40%",margin:"0 auto",background:'#F0FFF0'}}>
                            <h>ans = </h>
                            <h style={{color:'green'}} id="Showm">  </h>
                        </div>
                        <br></br><br></br><br></br>

                        <div style={{width:"40%",margin:"0 auto",background:'#FFFFE0',textAlign:"center"}}>
                            <h4>check answer </h4>
                            <div style={{width:"70%",margin:"0 auto",textAlign:"left"}}>
                                <h>f(x) = </h>
                                <h id="ShowE"></h><br></br>
                                <h>if x = </h>
                                <h id="ShowM"></h><br></br>
                                <h>ans =  </h>
                                <h id="ShowC"></h>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Secent;