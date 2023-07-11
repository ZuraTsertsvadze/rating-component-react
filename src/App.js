import { useState } from "react";
import "./index.css";

function App() {
  const numbers = [1, 2, 3, 4, 5];

  const [active, setActive] = useState(0);
  const [submit, setSubmit] = useState(false);


  const Review=active


  return (
    <div className="app">
  {!submit?   <>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="number-cont">
        {numbers.map((n, i) => {
          return (
            <Number key={i} number={i + 1} onNumber={setActive} active={active}>
              {n}
            </Number>
          );
        })}
      </div>
      <Button  onSubmit={setSubmit}/>
      </> 
     : <Result onReview={Review}/>}
    </div>
  );
}

const Number = ({ children, number, onNumber, active }) => {
  return (
    <div
      className={active === number ? "active-number" : "number"}
      onClick={(e) => {
        console.log("ar");
        onNumber(number);
      }}
    >
      {children}
    </div>
  );
};

const Button = ({onSubmit}) => {

  return <button className="button"  onClick={()=>{onSubmit(true)}}>submit</button>;
};


const  Result = ({onReview}) => {
  

  return (
    <div className="result">
      <div> you select {onReview} from 5</div>
      <div>Thank you</div>
    </div>
  );
};

export default App;
