//CLICK COUNTER
import React, { useState, useEffect} from 'react'

function App() {

  const[count, setcount]= useState(0);

  useEffect(() => {
   
    document.title = `You clicked $(count) times`;

  });



  return (
   <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setcount(count + 1)}>Click me</button>
   </div>
  );
}

export default App;


// // WORDS EFFECT 
// import React, {useEffect} from 'react'

// function App() {

//   useEffect(() => {
//     const typingText = document.querySelector('.typing-text');
//     const words = ['Web Developer', 'Software Developer', 'Web Designer', 'Backend Developer', 'Coder'];
//     let wordIndex = 0;
//     let letterIndex = 0;

//     function type() {
//         typingText.textContent = words[wordIndex].substring(0, letterIndex + 1);
//         letterIndex++;
//         if (letterIndex < words[wordIndex].length) {
//             setTimeout(type, 100); // Adjust the typing speed here (milliseconds)
//         } else {
//             setTimeout(erase, 1500); // Wait before starting to erase
//         }
//     }

//     function erase() {
//         typingText.textContent = words[wordIndex].substring(0, letterIndex - 1);
//         letterIndex--;
//         if (letterIndex > 0) {
//             setTimeout(erase, 50); // Adjust the erasing speed here (milliseconds)
//         } else {
//             wordIndex = (wordIndex + 1) % words.length;
//             setTimeout(type, 500); // Wait before starting to type the next word
//         }
//     }

//     typingText.textContent = ''; // Initialize with empty content
//     type(); // Start the typing animation
// }, []);

//    return (
//     <div>
//       <h1>Hi, it's<span style={{fontFamily: "cursive"}}> Yash</span></h1>
//       <h1>I'm a</h1>
//       <h3 className="typing-text"> <br/> <span></span></h3>
//     </div>
//   );


// }

// export default App;