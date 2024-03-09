import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    modal:{
        position:"absolute",
        width:"50%",
        top:"60%",
        height:"300px",
        border:"1px solid black",
        left:"360px",
        backgroundColor:"pink",
        borderRadius:"10px",
        textAlign:"center",
        display:"flex",
        flexDirection:"column",
        background: "radial-gradient(circle, rgba(233,154,194,1) 0%, rgba(211,225,240,1) 66%)",

        '& button':{
            color:"white",
            backgroundColor:"#792099 ",
            alignItems:"center",
            justifyContent:"center",
            marginLeft:"270px",
            height:"16%",
            width:"20%",
            borderRadius:"5px",marginTop:"20px"
        },
        
       

    },
    '@media (max-width: 768px)': {
        modal:{
            position:"absolute",
            width:"80%",
            top:"81%",
            height:"300px",
            border:"1px solid black",
            left:"60px",
            backgroundColor:"pink",
            borderRadius:"10px",
            textAlign:"center",
            display:"flex",
            flexDirection:"column",
            padding:"20px",
            background: "radial-gradient(circle, rgba(233,154,194,1) 0%, rgba(211,225,240,1) 66%)",
    
            '& button':{
                color:"white",
                backgroundColor:"#792099 ",
                alignItems:"center",
                justifyContent:"center",
                marginLeft:"180px",
                height:"16%",
                width:"40%",
                borderRadius:"5px",marginTop:"20px",
                fontSize:"large"
            },
            
           
    
        }

    }

})

const Modal = (props) => {
    const classes=useStyles()
    console.log(props)
    const setStatus=()=>{
        props.status(false)
        props.changeFormdata()

    }
  return (
    <div className={classes.modal}>
        <h1>Dear,{props.formdata.name}</h1>
        <p style={{fontSize:"large"}}> Thank You for Contacting us,We will connect with you Shortly</p>
        <p style={{fontSize:"large"}}> Contact Feature is coming soon...</p>

        <button onClick={setStatus}>Close</button>


    </div>
  )
}

export default Modal