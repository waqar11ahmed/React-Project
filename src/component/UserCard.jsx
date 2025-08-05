// import React from 'react'

// const Nav = () => {
//   return (
//     <div>
//       nav bar 
//       <h1>Waqar</h1>
//     </div>
//   )
// }

// export default Nav
import  '../index.css'
export function UserCard(props){
  return (
    <div className='user'>
      <h2>UserCard</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  )
}

import React from 'react'

// const Usercard = ({name,age,email}) => {
//   return (
//     <div>
//       <div>{name}</div>
//       <div>{age}</div>
//       <div>{email}</div>
//     </div>
//   )
// }

export default UserCard
