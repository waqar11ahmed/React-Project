// import React from 'react'

// const Hero = () => {

//     const product=[
//         {
//             name:"Waqar",
//             email:"abc",
//         },
//         {
//             name:"Jthanand",
//             email:"abc@gmail.com"
//         }
//     ]

//   return (
//     <div>
//       <div>
//         {
//             product.map((a,index)=>(
//                   <div key={index}>
//                     <div>{a.email}</div>
//                     <div>{a.name}</div>
//                 </div>
                
//             )
              
//             )
//         }
//       </div>
//     </div>
//   )
// }

// export default Hero
import '../index.css'
export function Header() {
  return (
    <div className="marquee">
      <div className="marquee-text">
        Welcome to Our Website!
      </div>
    </div>
  )
}