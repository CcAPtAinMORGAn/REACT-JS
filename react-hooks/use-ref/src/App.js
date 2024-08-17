// REACT USEREF
import React ,{useState,useEffect,useRef} from "react";
function App(){
    
    const[myData,setMyData]=useState("")

    // So here count is initially 0 but useEffect has count.current+1 thus 0+1=1 so count.current=1 even
    // when nothing is typed.But when we enter a character suppose 'a' count.current=1+1=2
    // whenever we put a character in input field entire app component renders and useRef is used to store
    // the value of how many times it rendered previously.

    // To count the exact number of characters entered we can use -1
    // const count=useRef(-1);

    const count=useRef(0);
    // const[count,setCount]=useState(0)
    console.log("useref file",count)

        useEffect(()=>{

            count.current=count.current+1;

            // When we  use setCount(count+1) in useEffect it utilizes useState which triggers re-render
            // So here count is initially 0 but useEffect has count+1 thus 0+1=1 so count=1 even
            // when nothing is typed.After that due to the change of count value from 0 to 1 
            // again setCount(count+1) is triggered due to
            // <input type="text" value={count} onChange={(e)=>setCount(e.target.value)}/> this 
            // further triggers the innfinite loop
            // whereas in // count.current=count.current+1; only the current value of count was inccremented 
            // and it does not re-render because count.current utilizes useRef only it cannot utilize useState.
 
            // setCount(count+1)     
        });

    return(
        <>  
            
            <input type="text" value={myData} onChange={(e)=>setMyData(e.target.value)}/>
            {/* <input type="text" value={count} onChange={(e)=>setCount(e.target.value)}/> */}

            <p>The Number of time render: {count.current}</p>
            {/* <p>The Number of time render: {count}</p>    */}
        </>
    )
}

export default App;
