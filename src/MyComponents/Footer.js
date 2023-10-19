import React from 'react'
// import './footer.css'
export const Footer = () => {

    let footerStyle={
        position: "relative",
        width: "100%",
        top: "30Vh",
        // backgroundColor:"red"
        border: "2px solid red"

    }
    

  return (
    <footer className=" bg-dark text-light py-3 " style={footerStyle}>
        <p className='text-center'>
        Copyright &copy; MyTodosList.com
        </p>
      
        </footer>
  )
}




