import React from 'react'
import Header from './Header'
import crudImages from '../images/crudoperation.avif'
import ebms from '../images/ebms.jpeg'
import sms from '../images/sms.jpg'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  description: {
    backgroundColor: " #002855",
    marginTop: "-22px",
    padding: "0px", 
    color: "white",
     paddingLeft: "30px",
    paddingBottom: "20px",

    

  },
  desc:{
    //border-bottom: 3px solid rgb(136, 9, 9);
    borderBottom:"2px solid white",
    

  },
  project:{
    display:"flex",
    justifyContent:"start",
    flexWrap:"wrap",
    flex:" 0 1 100",

  },
  project1:{
    flex:"0 0 calc(50% - 10px)",
    justifyContent:"start",
    //  border:"1px solid black",
     display:"flex",
     justifyContent:"center",
     flexDirection:"column",
     alignItems:"center",
     gap:"10px",
     marginTop:"10px",

     '& li': {
      padding:"8px 4px",
      fontSize:"large",
      margin:"0px 50px"

      
    }
  },
  img:{
    width:"500px"
  },
  content:{

  },
  img_desc:
    {fontWeight:"bold",color:"rgb(17,17,199)",fontSize:"22px"},
    '@media (max-width: 768px)': {
      project:{
        display:"flex",
        justifyContent:"center",
        flexWrap:"wrap",
        flex:" 1 1 100",
    
      },
      project1:{
        flex:"0 0 calc(50% - 10px)",
        justifyContent:"start",
        //  border:"1px solid black",
         display:"flex",
         justifyContent:"center",
         flexDirection:"column",
         alignItems:"center",
         gap:"10px",
         marginTop:"10px",
    
         '& li': {
          padding:"8px 4px",
          fontSize:"large",
          margin:"0px 50px"
    
          
        },
        '& img':{
          width:"500px"
        },
        
      },
      content:
        {
          display:"flex",
          flexDirection:"column",
          
          justifyContent:"start",
          alignItems:"flexStart",
          margin:"0px",
          paddingLeft:"0px",
          // marginLeft:"-70px",
          // padding:"10px 50px"
          // border:"1px solid black"

        }

    }

  
})


function Project() {
  const classes=useStyles()
  return (
    < >
       <div className={classes.description}>
        <h1 className={classes.desc}>Projects</h1>
      </div>
      <section >
        <div className={classes.project}>




          <div className={classes.project1}>
            <nav className={classes.img_desc}>Electricity Billing System </nav>
            <img className={classes.img} src={ebms} alt="Electricity Billing System"></img>

            <ul  className={classes.content}>
              <li  >Developed a website for consumers to view their electricity units they consumed via
                graphs/charts</li>
              <li>Introduced new features such as comparing consumption with previous cycle;it provides the
                unit used and the
                amount generated to user with better UI</li>
            </ul>

          </div>
          <div className={classes.project1}>
            <nav className={classes.img_desc}>
       
              Student Management System </nav>
            <img src={sms} className={classes.img}  alt="Student Management System"></img>

            <ul className={classes.content}>
              <li>Worked with a Team to build a platform to store and manage Student information in college
                portal.</li>
              <li>It acts as tool to view profiles ,Exams and Fees of a student</li>

            </ul>

          </div>
        <div className={classes.project1}>
          <nav className={classes.img_desc}>
            Crud Operation Using Spring </nav>
          <img src={crudImages} className={classes.img} alt="Crud Operation using Spring"></img>

          <ul className={classes.content}>
            <li>Created a BackEnd Application using Spring Boot to view Employee Data from Database.</li>
            <li>It acts as tool to create,view,update,delete employee information</li>

          </ul>

        </div>
        </div>



      </section>


    </>
  )
}

export default Project