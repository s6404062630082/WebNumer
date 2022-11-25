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

class FalsePosition extends Component{
    constructor(){
        super();
    }
    getValue(){
        var equation = document.getElementById("equation").value;
        var l = document.getElementById("InputL").value;
        var r = document.getElementById("InputR").value;
        
        var Equation=equation;
        var L=l;
        var R=r;
        var x;
        x=L;
        var fXL = eval(equation);
        x=R;
        var fXR = eval(equation);
        
        var x1 = ( (Number(L)*Number(fXR)) - (Number(R)*Number(fXL)) )/ (Number(fXR)-Number(fXL));

        x=x1;
        var fX1 = eval(equation);
        var x1Old = x1;

       

       if(Number(fX1)*Number(fXR)>0){
        R=x1;
      }
      else{
        L=x1; 
      }

      do {
        x1 = ( (Number(L)*Number(fXR)) - (Number(R)*Number(fXL)) )/ (Number(fXR)-Number(fXL));

        x=L;
        var fXL = eval(equation);
        x=R;
        var fXR = eval(equation);
        x=x1;
        var fX1 = eval(equation);

        if(Number(fX1)*Number(fXR)>0){
            R=x1;
        }
        if(Number(fX1)*Number(fXR)<0){
            L=x1; 
        }
        x1Old = x1;

        x=x1;
        }while(Math.abs(eval(equation)) > 0.000001);
       
        document.getElementById("Showm").innerHTML=x1;
        document.getElementById("ShowM").innerHTML=x1;

        x=x1;
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
                        <h1> False Position Method </h1>
                        <br></br>

                            <div>
                                <Form.Control id="equation" type="text" placeholder="input equation" style={{width:"20%",margin:"0 auto"}}></Form.Control>
                                <br></br>
                                <Form.Control id="InputL" type="number" placeholder="input L" style={{width:"20%",margin:"0 auto"}}></Form.Control>
                                <br></br>
                                <Form.Control id="InputR" type="number" placeholder="input R" style={{width:"20%",margin:"0 auto"}}></Form.Control>
                            </div>
                            <br></br>
                            <Button onClick={this.getValue}  style={{width:"10%",margin:"0 auto"}} >
                                    done
                            </Button>
                            
                            
                            <br></br><br></br><br></br>
                            <div style={{width:"40%",height:"5%",margin:"0 auto",background:'#F0FFF0'}}>
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
export default FalsePosition;