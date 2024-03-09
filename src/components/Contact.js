import {useState,React,useEffect} from 'react'
import Header from './Header'
import { createUseStyles } from 'react-jss';
import Modal from './Modal';

const useStyles = createUseStyles({
  description: {
    backgroundColor: " #002855",
    marginTop: "-22px",
    padding: "0px",
    color: "white",
    paddingLeft: "30px",
    paddingBottom: "20px",



  },
  desc: {
    //border-bottom: 3px solid rgb(136, 9, 9);
    borderBottom: "2px solid white",


  },
  user_inputs:{
    display:"flex",
    flexDirection:"column",
    marginBottom:"16px"

  },
  errors:{
    color:"red",
    paddingTop:"10px"

  },
  form: {
    width: "500px",
    margin: "10vh auto 10vh auto",
    borderRadius: "5px",
    backgroundColor: "whiteSmoke",
    padding: "30px",
    border: "1px solid black",
    '& input':{
   
    borderRadius:"5px",
    fontSize:"20px",
    marginTop:"5px",
    padding:"10px",
    border:"1px solid rgb(34,193,195)"

    },
    '& textarea':{

    borderRadius:"5px",
    fontSize:"20px",
    marginTop:"5px",
    padding:"10px",
    border:"1px solid rgb(34,193,195)"

    },
    '& label':{
      color:" #792099 ",
      fontSize:"large"

    },
    '& button':{
     
      
      //backgroundColor:"rgb(9, 126, 210)",
      backgroundColor:"#792099 ",
      borderRadius:"5px",
      color:"white",
      padding:"10px",
      border:"1px solid rgb(9, 126, 210)",
      margin:"20px 10px",
      display:"flex",
      flexDirection:"column",
      flex:"1 0 calc(100% - 1rem)",
      flex:'1',
      paddingLeft:"85px",
      fontSize:"16px"


    },
    '& h1':{
      color: "#792099",
    textAlign: "center"
    },
    '& input:focus':{
      outline:"0"
    },
    '& textarea:focus':{
      outline:"0"
    },
    
    
  },
  section: {
    background: "linear-gradient(90deg, rgba(214,243,240,1) 10%, rgba(112,212,221,1) 33%, rgba(12,173,206,1) 63%)",
    fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    overflow:"hidden",
    background:"radial-gradient(circle, rgba(230,150,190,1) 0%, rgba(211,225,240,1) 92%)"

  },
  button:{
    display:"flex",
    justifyContent:"space-evenly",


    flex:"0 1 calc(50% - 10px)",
  }
})

function Contact() {
  const [formdata,setFormdata]=useState({name:"",email:"",phno:"",message:""})
  const [formErrors,setFormErrors ]=useState({});
  const[isSubmit,setIsSubmit]=useState(false)

  const classes = useStyles()
  const HandleFormdata=(e)=>
  {
    e.preventDefault()
    const {name,value}=e.target
    console.log(e.target)
    setFormdata({...formdata,[name]:value})

  }
  const resetForm=()=>{
    setFormErrors({})
    setFormdata({name:"",email:"",phno:"",message:""})
    setIsSubmit(false)

  }
  useEffect(()=>{if(Object.keys(formErrors).length===0){console.log(formdata)}},[formErrors] )
  const SubmitformData=(e)=>{
    console.log("clicked")
    e.preventDefault();

    setFormErrors(validate(formdata))
    setIsSubmit(true)
    
     console.log(formErrors)


  }
  const validate=(values)=>{
    const errors={}
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const Phone_regrex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if(!values.name.trim()){
      errors.name="UserName is required!!"
    }
    if(!values.email.trim()){
      errors.email="Email is required!!"
    }
    else if(!regex.test(values.email.trim()))
    {
      errors.email="This is not a valid email address"
    }
    if(!values.phno){
      errors.phno="Phone Number is required!!"
    }
    else if(!Phone_regrex.test(values.phno.trim()))
    {
      errors.phno="Phone Number is not valid!!"
    }
    if(!values.message.trim()){
      errors.message="Message is required!!"
    }
    return errors

  }
  const changeFormdata=()=>{
    setFormdata({name:"",email:"",phno:"",message:""})

  }
  
  return (
    <>
      <div className={classes.description}>
        <h1 className={classes.desc}>Contact Us</h1>
      </div>
        <div className={classes.section} >
          <form  onSubmit={SubmitformData} className={classes.form}>
            <h1>Contact Us</h1>

            <div className={classes.user_inputs}>
              <label for="name">Name</label>
              <input type="text"name="name" id="name" value={formdata.name} onChange={HandleFormdata}></input>
              <div className={classes.errors}> {formErrors.name}</div>
            </div>
            <div className={classes.user_inputs}>
              <label for="email">Email</label>
              <input type="text"  name="email" value={formdata.email} id="email"  onChange={HandleFormdata}></input>
              <div className={classes.errors}>{formErrors.email}</div>
            </div>
            <div className={classes.user_inputs}>
              <label for="phoneno">Phone No</label>
              <input type="tel" name="phno" id="phno" value={formdata.phno}  onChange={HandleFormdata}></input>
              <div className={classes.errors}>{formErrors.phno}</div>
            </div>
            <div className={classes.user_inputs}>
              <label for="message">Message</label>
              <textarea name="message" rows={4} cols={20}  value={formdata.message} id="message"  onChange={HandleFormdata}/>

              <div className={classes.errors}>{formErrors.message}</div>
            </div>
            <div className={classes.button}>
            <button type="submit" >Submit</button>
            <button type="reset" onClick={resetForm}>Reset</button>
            </div>
          </form>

          {Object.keys(formErrors).length==0&&isSubmit?<Modal formdata={formdata} status={setIsSubmit} changeFormdata={changeFormdata} />:""}
        </div>

    </>
  )
}

export default Contact