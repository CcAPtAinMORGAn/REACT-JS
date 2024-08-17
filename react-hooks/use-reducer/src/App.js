// //React useReducer

// import React,{useReducer} from "react";
// const initialState=0
// const reducer=(state,action)=>
// {
//     if(action.type==="INCREMENT")
//     {
//         return state+1;
//     }

//     if(action.type==="DECREMENT")
//         {
//             return state-1;
//         }
//     return state;
// }

// const App=()=>{
//     const[state,dispatch]=useReducer(reducer,initialState)

//     return(
//         <>
//         <div>
//             <p>{state}</p>
//             <div>
//                 <button onClick={()=>dispatch({type:"INCREMENT"})} >+</button>
//                 <button onClick={()=>dispatch({type:"DECREMENT"})} >-</button>
//             </div>
//         </div>
        
//         </>
//     )
// }
// export default App;

// // useReducer Age increment with click alongside variable display
// import { useReducer } from 'react';

// function reducer(state, action) {
//   if (action.type === 'incremented_age') {
//     return {
//       age: state.age + 1
//     };
//   }
//   throw Error('Unknown action.');
// }

// export default function Counter() {
//   const [state, dispatch] = useReducer(reducer, { age: 21 });

//   return (
//     <>
//       <button onClick={() => {
//         dispatch({ type: 'incremented_age' })
//       }}>
//         Increment age
//       </button>
//       <p>Hello! You are {state.age}.</p>
//     </>
//   );
// }

// // useReducer Age increment with click alongside entered name and variable display. 
// import { useReducer } from 'react';

// function reducer(state, action) {
//   switch (action.type) {
//     case 'incremented_age': {
//       return {
//         name: state.name,
//         age: state.age + 1
//       };
//     }
//     case 'changed_name': {
//       return {
//         name: action.nextName,
//         age: state.age
//       };
//     }
//   }
//   throw Error('Unknown action: ' + action.type);
// }

// const initialState = { name: 'Yash', age: 21 };

// export default function Form() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   function handleButtonClick() {
//     dispatch({ type: 'incremented_age' });
//   }

//   function handleInputChange(e) {
//     dispatch({
//       type: 'changed_name',
//       nextName: e.target.value
//     }); 
//   }

//   return (
//     <>
//       <input value={state.name} onChange={handleInputChange}/>
//       <button onClick={handleButtonClick}>
//         Increment age
//       </button>
//       <p>Hello, {state.name}.<br></br> You are {state.age}.</p>
//     </>
//   );
// }

// Marksheet using useReducer
import React, { useReducer, useState } from "react";

const initialState = 0;
const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return ((action.payload/300)*100);
  }
  return state;
};

const App = () => {
  const [number1, setNumber1] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <div>
          <p>SCIENCE:- <input
              placeholder="ENTER MARKS/300"
              type="number"
              value={number1}
              onChange={(e) => setNumber1(+e.target.value)}
            />
          </p>
          <button onClick={() => dispatch({ type: "INCREMENT", payload: number1 })}>
            CALCULATE PERCENTAGE
          </button>
        </div>
        <p>PERCENTAGE IN SCIENCE IS {state} %</p>
      </div>
    </>
  );
};
export default App;

//Hotel bill using usereducer in react 
// import React, { useReducer } from 'react';

// const initialState = {
//   pizzacost: 499,
//   pizzaQuantity: 1,
//   bill: '',
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'SET_PIZZACOST':
//       return { ...state, pizzacost: action.value };
//     case 'SET_PIZZAQUANTITY':
//       return { ...state, pizzaQuantity: action.value };
//     case 'ADD_TO_CART':
//       const Pizzacost = parseInt(state.pizzacost);
//       const PizzaQuantity = parseInt(state.pizzaQuantity);
//       const originalCost = Pizzacost * PizzaQuantity;
//       const gstAmount = (18 / 100) * originalCost;
//       const totalCost = originalCost + gstAmount;

//       return {
//         ...state,
//         bill: `Original Cost: ${Pizzacost} * ${PizzaQuantity} = ${originalCost}/-
//         \nGST (18%): ${gstAmount}/-
//         \nTotal Cost: ${totalCost}/-`,
//       };
//     default:
//       return state;
//   }
// }

// function PizzaOrder() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const handlePizzacostChange = (event) => {
//     dispatch({ type: 'SET_PIZZACOST', value: event.target.value });
//   };

//   const handlePizzaQuantityChange = (event) => {
//     dispatch({ type: 'SET_PIZZAQUANTITY', value: event.target.value });
//   };

//   const handleAddToCart = () => {
//     dispatch({ type: 'ADD_TO_CART' });
//   };

//   return (
//     <form>
//       <select id="Pizzacost" value={state.pizzacost} onChange={handlePizzacostChange}>
//         <option value="499">CHEESY CHICKEN PIZZA@499/-</option>
//         <option value="489">PEPPY PANEER PIZZA@489/-</option>
//         <option value="259">MARGHERITA PIZZA@259/-</option>
//         <option value="459">VEGGIE PARADISE PIZZA@459/-</option>
//         <option value="449">FARMHOUSE PIZZA@449/-</option>
//       </select>
//       QTY <input type="number" id="PizzaQuantity" value={state.pizzaQuantity} onChange={handlePizzaQuantityChange} />
//       <input type="button" value="ADD TO CART" onClick={handleAddToCart} />
//       <br />
//       <p>BILL</p>
//       <p>
//         <textarea rows="5" cols="72" id="BILL" value={state.bill} disabled />
//       </p>
//     </form>
//   );
// }

// export default PizzaOrder;