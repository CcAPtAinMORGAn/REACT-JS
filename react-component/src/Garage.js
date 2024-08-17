// //FOR IMPORTING FUNCTION FILE FROM Garage.js USING LOGICAL && OPERATOR.
// function Garage(props)
// {   
//     const cars = props.cars;
//     return(
//         <>
//         <h1>Garage</h1>
//         {
//             cars.length > 0 &&
//             <h2>You have {cars.length} cars in your garage.</h2>
//         }
//         </>
//     )
// }

// export default Garage;


//***************************************************//

// //FOR IMPORTING FUNCTION FILE FROM Garage.js USING REACT LISTS
// function Car(props)
// {
//     return <li>I am a {props.brand}</li>
// }

// function Garage(){

//     const cars = ['Ford','BMW','AUDI'];
//     return(
//         <>
//             <h1>Who lives in my garage?</h1>
//             <ul>
//                 {cars.map((car) => <Car brand={car}/>)}
//             </ul>
//         </>
//     )
// }

// export default Garage;