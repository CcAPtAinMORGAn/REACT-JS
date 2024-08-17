function Football()
{
  const shoot = () =>
    {
        alert("Great Shot!!")
    }

    return(
        <button onClick={shoot}>Take the shot!</button>
    );
}

export default Football;
// ****************************************//

//ANOTHER METHOD FOR ALERT USING BUTTON 
// function Football()
// {
//   const shoot = (a) =>
//     {
//         alert(a);
//     }

//     return(
//         <button onClick={()=> shoot ("Goal!!")}>Take the shot!!</button>
//     );
// }

// export default Football;






