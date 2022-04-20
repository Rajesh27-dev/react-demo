import { useEffect, useState, useRef } from "react";
import "./App.css";
// import Button from "./component/Button/Button"
import { Button } from '@mui/material';

const App = () => {
  const ref = useRef();
  const [name, setName] = useState("rajesh");
  const [age, setAge] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState();
  const [phoneLength, setPhoneLength] = useState(false);
  const [numberStatement, setNumberStatement] = useState("Enter Valid Number");
  const [user, setUser] = useState({});
  const myObj = {
    name: "Rakesh",
    age: "23",
  };
  const [statement, setStatement] = useState("Not eligile to vote");
  const changeName = (e) => {
    setName(e);
  };
  const checkAge = () => {
    if (age > 18) {
      setStatement("Eligible to vote");
    } else {
      setStatement("Not eligible to vote");
    }
  };
  const phoneCheck = () => {
    if (phoneNumber && phoneNumber.length == 10) {
      setNumberStatement("valid number");
      setPhoneLength(true);
    } else {
      setNumberStatement("Enter Valid Number");
      setPhoneLength(false);
    }
  };
  useEffect(() => {
    phoneCheck();
    console.log(phoneNumber)
  }, [phoneNumber]);

  useEffect(() => {
    checkAge();
  }, [user.age]);
  const storeDetails = () => {
    console.log(name);
    setUser({ name: name, age: age, phoneNumber: phoneNumber });
    const interval = setInterval(()=>{console.log(user);clearInterval(interval);}, 3000);
    
  };
  const clearDetails =()=>{
    setName("");
    setAge("");
    phoneCheck();
    setPhoneNumber("");
  }

  return (
    <div>
      <div className="form">
        <h1>Application Form</h1>
      </div>
      <div>
        <table className="form">
          <tbody>
            <tr>
              <td className="tableTitle">Name</td>
              <td className="tableDetail">
                <input
                  value={name}
                  placeholder="enter name..."
                  onChange={(e) => {
                    changeName(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td className="tableTitle">Age</td>
              <td className="tableDetail">
                <input
                  value={age}
                  placeholder="enter age..."
                  onChange={(e) => {
                    // changeName(e.target.value);
                    setAge(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td className="tableTitle">Phone Number</td>
              <td className="tableDetail">
                <input
                  value={phoneNumber}
                  placeholder="enter phone number..."
                  disabled={phoneLength}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                ></input>
              </td>
              <td> {numberStatement} </td>
            </tr>
            <tr>
                <Button label ="Submit" onClick={()=>{
    
              console.log(user);
            }}
              />
                <td  className="td">
                <button onClick={() => {
                    clearDetails(user);
                  }}>clear</button>
              </td>
                <td>
              <button
                  onClick={() => {
                    storeDetails();
                  }}
                >
                  submit
                </button>
              </td>
            
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
