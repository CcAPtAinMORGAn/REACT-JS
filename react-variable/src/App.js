
//MARKSHEET REACT
// import './App.css';
// import React from 'react';

// function App()
// {
//   const [number1, setNumber1] = React.useState();
//   const [number2, setNumber2] = React.useState();
//   const [number3, setNumber3] = React.useState();
//   const [total, setTotal] = React.useState(0);
//   const [Percentage, setPercentage] = React.useState(0);

//   function calculateTotal()
//   {
//     setTotal(number1 + number2+ number3);
//     setPercentage((total/300)*100);
//   }

//   return(
//     <div>
//       <h2>MARKSHEET</h2>
      
//       <p>SCIENCE: <input 
//       placeholder="ENTER MARKS"
//       type="number"
//       value={number1}
//       onChange={(e) => setNumber1(+e.target.value)}/></p>
      
//       <p>ENGLISH: <input 
//       placeholder="ENTER MARKS"
//       type="number"
//       value={number2}
//       onChange={(e) => setNumber2(+e.target.value)}/></p>

//       <p>MARATHI: <input 
//       placeholder="ENTER MARKS"
//       type="number"
//       value={number3}
//       onChange={(e) => setNumber3(+e.target.value)}/></p>


      

//       <p><button onClick={calculateTotal}>CALCULATE</button></p><br></br>
//       <p>Total: {total} </p>
//       <p>Percentage: {Percentage}</p>
//     </div>
//   )
// }
// export default App;

// import './App.css';
// import React from 'react';

// function App()
// {
//   const [number1, setNumber1] = React.useState();
//   const [number2, setNumber2] = React.useState();
//   const [total, setTotal] = React.useState(0);
//   const [Avg, setAvg] = React.useState(0);

//   function calculateTotal()
//   {
//     setTotal(number1 + number2);
//     setAvg((number1 + number2)/2)
//   }

//   return(
//     <div>
//       <h2>Adding two numbers</h2>
//       <p>
//       <input
//       placeholder="First number"
//       type="number"
//       value={number1}
//       onChange={(e) => setNumber1(+e.target.value)}
//       />
//       </p>

//       <p><input
//       placeholder="Second number"
//       type="number"
//       value={number2}
//       onChange={(e) => setNumber2(+e.target.value)}
//       /></p>

//       <p><button onClick={calculateTotal}>CALCULATE</button></p>
//       <p>Total: {total} </p>
//       <p>Avg: {Avg}</p>
//     </div>
//   )
// }
// export default App;

// // CALCULATOR REACT
// import './App.css';
// import React from 'react';
// function App()
// {
//   const [number1, setNumber1] = React.useState();
//   const [number2, setNumber2] = React.useState();
//   const [add, setAdd] = React.useState(0);
//   const [Multiply, setMultiply] = React.useState(0);
//   const [Subtract, setSubtract] = React.useState(0);
//   const [Divide, setDivide] = React.useState(0);
//   function calculateAdd()
//   {
//     setAdd(number1 + number2);
//   }

//   function calculateMultiply()
//   {
//     setMultiply(number1 * number2);
//   }

//   function calculateDivide()
//   {
//     setDivide(number1 / number2);
//   }

//   function calculateSubtract()
//   {
//     setSubtract(number1 - number2);
//   }
  
//   return(
//     <div>
//       <h2>CALCULATOR</h2>
      
//       <p><input 
//       placeholder="ENTER NUMBER"
//       type="number"
//       value={number1}
//       onChange={(e) => setNumber1(+e.target.value)}/></p>
      
//       <p><input 
//       placeholder="ENTER NUMBER"
//       type="number"
//       value={number2}
//       onChange={(e) => setNumber2(+e.target.value)}/></p>

//       <p><button onClick={calculateAdd}>Add</button>
//       <button onClick={calculateMultiply}>Multiply</button>
//       <button onClick={calculateDivide}>Divide</button>
//       <button onClick={calculateSubtract}>Subtract</button></p>


//       <p>Add: {add} </p>
//       <p>Multiply: {Multiply}</p>
//       <p>Divide: {Divide}</p>
//       <p>Subtract: {Subtract}</p>
//     </div>
//   )
// }
// export default App;

//React form 
import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Form</legend>

        <p>Name:<br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </p>

        <p>Age:<br />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </p>

        <p>Email:<br />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </p>

        <p>Address:<br />
          <textarea
            rows="8"
            cols="80"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </p>

        <p>
          <input
            type="submit"
            value="Submit"
          />
        </p>
      </fieldset>
    </form>
  );
};

export default FormComponent;
