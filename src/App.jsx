import { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";



function App() {
  const [total,setTotal] = useState ("501");
  const [ score, setScore] = useState("501");
  const [multiplicator, setMultiplicator] = useState(1);


  const handleChange = (number) => {
    if (number == 25 && multiplicator == 3) {
      alert("TRICHEUR")
      setMultiplicator(1); 
    }else if((total -(number * multiplicator)) <0){
      alert("Tour terminé")
      setMultiplicator(1); 
    } else if((total- (number * multiplicator))==0) {
    setTotal(total- (number * multiplicator));
    setMultiplicator(1);
    alert("Victoire");
  }else{
    setTotal(total- (number * multiplicator));
    setMultiplicator(1);
  }
}


  return <>
  <h1>Flechettes</h1>
  <div className="col-3 " >
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Total</InputGroup.Text>
          <Form.Control
            placeholder="Total"
            aria-label="Total"
            aria-describedby="basic-addon1"
            disabled  // pour eviter d'écrire du texte
            value={total}
          />
        </InputGroup>
      </div>
      <div className="col-3 d-flex justify-content-center flex-wrap">
      <Button variant="success" className="col-3" onClick={() => {handleChange(25)}}>25</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(0)}}>0</Button>
      <Button variant="primary" className="col-3" onClick={() => {setMultiplicator(3)}} >Triple</Button>
      <Button variant="info" className="col-3"  onClick={() => {setMultiplicator(2)}} >Doubler</Button>
      </div>
      <div className="col-3 d-flex justify-content-center flex-wrap ">
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(17)}}>17</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(18)}}>18</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(19)}}>19</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(20)}}>20</Button>
      </div>
      <div className="col-3 d-flex justify-content-center flex-wrap ">
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(13)}}>13</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(14)}}>14</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(15)}}>15</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(16)}}>16</Button>
      </div>
      <div className="col-3 d-flex justify-content-center flex-wrap ">
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(9)}}>9</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(10)}}>10</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(11)}}>11</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(12)}}>12</Button>
      </div>
      <div className="col-3 d-flex justify-content-center flex-wrap ">
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(5)}}>5</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(6)}}>6</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(7)}}>7</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(8)}}>8</Button>
      </div>
      <div className="col-3 d-flex justify-content-center flex-wrap ">
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(1)}}>1</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(2)}}>2</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(3)}}>3</Button>
      <Button variant="outline-secondary" className="col-3" onClick={() => {handleChange(4)}} >4</Button>
      </div>
    
  
  </>;

}

export default App;
