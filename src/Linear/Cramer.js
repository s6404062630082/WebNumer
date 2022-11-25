import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
class Cramer extends Component{


    createInputMatrix=()=>{
        var size = document.getElementById("Matsize").value;
        var MatString="";
        
        for(var i=0; i<size;i++){
            for(var j=0; j<size;j++){
                MatString += "<input id='input"+i+j+"' type='number' step='1' placeholder='Number' style='width:50px;margin:1px;'>"
       
            }
           
            MatString += "<input id='inputans"+i+"0' type='number' step='1' placeholder='number' style='width:50px;margin:10px;'><br>";
        }
        
        console.log(MatString);
        document.getElementById("Matrixinput").innerHTML=MatString;
       
    }
    
    CramersRule=()=>{
        var Size = document.getElementById("Matsize").value;
        var mat=[];
        var matans=[];
        for(let i=0;i<Size;i++){
            mat.push([]);
            for(let j=0;j<Size;j++){
                mat[i].push(document.getElementById("input"+i+j).value);
               
            }
            matans.push([]);
            matans[i].push(document.getElementById("inputans"+i+0).value);
        
        }
        document.getElementById("matt").innerHTML=mat;
        document.getElementById("mata").innerHTML=matans;
      
        
    }
    render(){
        return(
            <div>
                <h1>Cramer's Rlue Method</h1>

                <Form>
                    <Form.Group className="mb-3">
                        <div>
                            <Form.Control id="Matsize" type="number" step="1" placeholder="Input matrix size" style={{width:"25%",margin:"0 auto"}} ></Form.Control>
                            
                        </div>
                        <br></br>
                         <Button onClick={this.createInputMatrix} >
                            OK
                        </Button>
                        <br></br><br></br> 
                        <div id="Matrixinput"></div> 
                        <Button onClick={this.CramersRule} >
                            Submit
                        </Button>
                        <br></br>
                        <br></br> 

                        <div id="matt"></div>
                        <div id="mata"></div>
                    </Form.Group>
                </Form>
               

               
            </div>

            
        );
    }
}
export default Cramer;