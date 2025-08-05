/* import React from 'react'
import Nav from './comonent/Nav'
import Hero from './comonent/Hero'
import Product from './comonent/Product'
 
 const App = () => {
   return (

    <>
     <Nav/>
     <Hero/>
     <Product/>
     
//    </>
//   )
// }
*/
// import {useState } from "react"
//import User from "./user"
//import Header from "./header"
 //function App() {
  // const [counter, setCounter]=useState(0);
  // const [showText, setShowText] = useState(true);



// import Header from "./header"


//  return(

//    <>
//  <Header/>
//    </>
    // <div style={{textAlign: 'center', marginTop: '50px'}}>
    //   <h1>Assignment 1</h1>
    //   <h2>Counter Val :{counter}</h2>
    //   <User />
    //   <button onClick={()=>setCounter(counter+5)}>Increase Counter Val</button>
    //   <button onClick={() => { 
    //     if (counter > 0) {
    //       setCounter(counter - 5);
    //     }}
    //   }
    //   > Decrement Counter Val
    //     </button>
      
    //   <h1>Assignment 2</h1>

    //   <h2>Toggle Text App</h2>
    //   <Header />
    //   <button onClick={() => setShowText(!showText)}>{showText ? 'Hide' : 'Show'}</button>
    //   {showText && <p>Hello React!</p>}    </div>
//  )
// // }
// import Humra,{Profile,Component,AurHumra} from './Usercomponent';
// function App(){
//   return(
//     <>
//     <h2>Export and Import</h2>
//     <Humra></Humra>
//     <Profile />
//     <Component />
//     <h1>{AurHumra}</h1>

//     </>
//   )
// }

// Assignment 03
// import './index.css'
// import { Header } from "./component/Header"
// import UserCard from "./component/Usercard"
// import Footer from "./component/Footer"
 
// function App() {
//   return (
//     <div className="hi">
//     <Header />
//     <UserCard name={"jethanand00"} age={22} email={"abc@gmail.com"}/>
//     <UserCard name={"Waqar"} age={21} email={"waqar@gmail.com"}/>
//     <Footer />
//     </div>
//   )
// }

import React, { useState } from 'react'
import Click from './component/Click'
import Assignment from './component/Assignment'
import Student from './component/Footer'
import Footer from './component/Footer'
function App() {
  // let userName="Waqar Ahmed";
  // let age="22"
  // let email="waqarahmed@gmail.com" OR ya object bana kar
  let userObject ={
    name:"Waqar ahmed",
    age:"29",
    email:"waqarahmed@gmail.com"
  }
  let useroBject={
    name:"Jethanand",
    age:"23",
    email:"jethanand@gmail.com"

  }
  //pass array
  let collegeNames =['PCU','SCU','KCU','GCU','BCS']
  // ab use kargy useState
  const [student, setStudent]=useState()
  return (
    <div>
      {/* <Click name={userName} age={age} email={email}/> */}
      <Click user={userObject}/>
      <Click user={useroBject}/>
      <Assignment name={collegeNames[0]}/>
      <button onClick={()=> setStudent("Suleman")}>Upgrade Student Name</button>
      {student && <Student name={student} />}
      <Footer/>
      {/* <h1>Student Lists</h1>
      <Assignment4 name="Waqar" age="22" course="Web Developer" center="smit"/>
      <Assignment4 name="Jethanand" age="21" course="Web Developer" center="smit"/>
      <Assignment4 name="Abdul Qadir" age="22"course="Web Developer" center="smit"/> */}
    </div>
  )

}
export default App


 // rafce mtlb component ka sturcture bnane ke lye 
 // 5173 ya number asal mein VITE ko show kar reha jesa roman number 5 ko V 1 ko I 
 // VITE ak fast development server  