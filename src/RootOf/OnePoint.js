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

class OnePoint extends Component{
    constructor(){
        super();
    }
    getValue(){
        var equation = document.getElementById("equation").value;
        var x = document.getElementById("InputX").value;
        
        var Equation=equation;
        var Xnew;
        var Xold=x;
      
      do {
        x=Xold;
        var Xnew = eval(equation);
        var i = Xold;
        Xold=Xnew;
        x=Xnew;
        document.getElementById("Showm").innerHTML=Xnew;
        document.getElementById("ShowM").innerHTML=Xnew;
        }while(Number(eval(equation)) > 0.000001);
        
        document.getElementById("Showm").innerHTML=Xnew;
        document.getElementById("ShowM").innerHTML=Xnew;

        x=Xnew;
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
                        <h1> One Point Method </h1>
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
                            
                            
                        <div style={{width:"20%",height:"5%",margin:"0 auto",background:'#F0FFF0'}}>
                            <h>ans = </h>
                            <h style={{color:'green'}} id="Showm">  </h>
                        </div>
                        
                        <br></br><br></br><br></br>
                        <div style={{width:"40%",margin:"0 auto",background:'#FFFFE0',textAlign:"center"}}>
                            <h4>check answer </h4>
                            <div style={{width:"40%",margin:"0 auto",textAlign:"left"}}>
                                <h>f(x) = </h>
                                <h id="ShowE"></h><br></br>
                                <h>if x = </h>
                                <h id="ShowM"></h><br></br>
                                <h>ans = </h>
                                <h id="ShowC"></h>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        );
    }
}
export default OnePoint;