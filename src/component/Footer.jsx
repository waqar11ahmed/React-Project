// import React from 'react'

// const Product = () => {
//   return (
//     <div>
//       Product
//       {/* <button onClick={clickMe}>clikc me</button> */}
//     </div>
//   )
// }

// function clickMe(){
//     alert("Helo")
// }

// export default Product
import React from 'react'

// function Footer () {
//   return <footer>Be Happy</footer>
// }

// export default Footer


// function Student({name}) {
//   return (
//     <div>
//       <hr />
//       <h1>Student Name: {name}</h1>
//       <hr />
//     </div>
//   )
// }

// export default Student


import { useState } from 'react';
function Footer() {
  const [isVisible, setIsVisible] = useState(true);
  
  // const toVi = () => {
  //   setIsVisible(!isVisible)
  // }
  return (
    <div>
      {isVisible && <h2>Visible message</h2>}
      {/* <button onClick={toVi}> */}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {/* {isVisible && <h2>This is a Toggle message!</h2> } */}

    </div>
  )
}

export default Footer


