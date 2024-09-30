import { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import imgArrow from './Assets/arrow.png'
import { Container } from "react-bootstrap";


function App() {
  const [total,setTotal] = useState ("501");
  const [multiplicator, setMultiplicator] = useState(1);
  const [arrows, setArrows] = useState(3);    // on a 3 flechettes pour chaque essai
  const [laps, setLaps] = useState(0);
  const [oldTotal, setOldTotal] = useState(0);


  const handleChange = (number) => {
 
    if (arrows - 1 == 0) {
    setArrows(3);
    setLaps(laps + 1);
    if (total - (number * multiplicator) >= 0) {
      setOldTotal (total- (number * multiplicator));
    }
    
  } else {
     setArrows(arrows-1);
  }
 
    if (number == 25 && multiplicator == 3) {
      alert("TRICHEUR")
      setMultiplicator(1); 
    }else if((total -(number * multiplicator)) <0){
      alert("Tour terminé");
      setArrows(3);
      setLaps(laps + 1);
      setMultiplicator(1); 
      setTotal(oldTotal);
      setTotal(oldTotal);
    } else if((total- (number * multiplicator))==0) {
    setTotal(total- (number * multiplicator));
    setMultiplicator(1);
    alert("Victoire");
  }else{
    setTotal(total- (number * multiplicator));
    setMultiplicator(1);
  }

}



const replay = () => {
  setMultiplicator(1); 
  setTotal(501);
  setArrows(3);
  setLaps(0);
}

  return <>
  <Container className="d-flex flex-column align-items-center">
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
  
    <div className="d-flex justify-content-center">
      <h5>Tours : {laps}</h5>
     {arrows == 3 && <>
      <img src={imgArrow} className="arrow-img"/>
      <img src={imgArrow} className="arrow-img"/>
      <img src={imgArrow} className="arrow-img"/>
    </>} 

    {arrows == 2 && <>
      <img src={imgArrow} className="arrow-img"/>
      <img src={imgArrow} className="arrow-img"/>
      </>} 

      {arrows == 1 && <>
      <img src={imgArrow} className="arrow-img"/>
     
      </>} 

     </div>

      {/* code a afficher quand le score est egale ou pas a 0 */}


      {total == 0 ? <>
      { /*afficher qq chose si mon score est égale à zero*/}
        <button variant="primary" className="mt-3" onClick={replay}>Rejouer</button>
      
      </> : <> 
       { /* afficher qq chose si mon score n'est pas égale à zero */}
      
     
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
  
    

    
  
      </> }
    
  </Container>
  </>;

}

export default App;
