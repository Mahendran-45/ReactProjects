import React from 'react'
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
    

  },grid:{
    display:"grid",
    gridTemplateColumns:"repeat(5,1fr)",
    borderTop:"1px solid black",
    borderRight:"1px solid black",
    boxSizing:"border-box",
    '& span': {
      padding:"8px 4px",
      borderLeft:"1px solid black",
      borderBottom:"1px solid black"
    }

  },
   heading:{
    backgroundColor:"#002855",
    color:"white",

  },
  section_heading:{
    fontSize:"larger",
    fontWeight:"bold"
  },section:{
    margin:"15px",
    fontFamily:"Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    fontSize:"large"
  }
})

function Resume() {
  const classes=useStyles()
  return (
    
      <>
        <div className={classes.description}>
          <h1 className={classes.desc}>Resume</h1>
        </div>
        <section  className={classes.section}>
        <p className={classes.section_heading}>Educational Qualification</p>
        <div className={classes.grid}>
          <span className={classes.heading}>

            <strong>
            Qualification
            </strong></span>
            <span className={classes.heading}>
            <strong>Major</strong>

              </span>
              <span className={classes.heading}>
              <strong>School/College</strong>


              </span>
              <span className={classes.heading}> 
              <strong>Year of Passing</strong>


                </span>
                <span className={classes.heading}>

            <strong>Percentage</strong>
          </span >
            
              <span>Master of Science</span>
              <span>Computer Information Systems</span>
              <span>Florida Institue of Technology</span>
              <span>2024</span>
              <span>3.7</span>


            
            
              <span>Bachelor of Engineering</span>
              <span>Electrical and Electronics Engineering</span>
              <span>SRM College of Engineering</span>
              <span>2021</span>
              <span>7.9</span>


            
            
              <span>Higher Secondary School</span>
              <span>---</span>
              <span>St Joseph Matric Hr sec School</span>
              <span>2017</span>
              <span>85%</span>


          

          
        </div>
        <p className={classes.section_heading}>Work Experience</p>
        <nav style={{fontSize:"large",fontWeight:"bold"}}>Software Engineer</nav>


        <nav style={{fontWeight:"bold",marginTop:"9px",marginLeft:"15px"}}>Accenture,India</nav>
        <ul class="job-role">
          <li>Responsible for designing, developing ,maintaining and configure the applications.</li>
          <li>Extracted and analyzed requirements from clients for new software releases.</li>
          <li> Delivered presentation highlighting existing issues and proposed an optimal solution for bug fixes.
          </li>
          <li>Participated and contributed in code reviews, reviewing performance, scalability and flexibility of
            the code</li>
          <li>Automated the scripts using the pipeline in jenkins</li>

        </ul>


        <nav className={classes.section_heading}>Projects</nav>
        <nav  style={{fontWeight:"bold",marginTop:"10px",marginLeft:"15px"}}>Electricity Billing
          System </nav>
        <ul>
          <li>Developed a website for consumers to view their electricity units they consumed via graphs/charts
          </li>
          <li>Introduced new features such as comparing consumption with previous cycle;it provides the unit used
            and the
            amount generated to user with better UI</li>
        </ul>
        <nav style={{fontWeight:"bold",marginTop:"10px",marginLeft:"15px"}}>Student Management System
        </nav>
        <ul>
          <li>Worked with a Team to build a platform to store and manage Student information in college portal.
          </li>
          <li>It acts as tool to view profiles ,Exams and Fees of a student</li>
        </ul>
        <p className={classes.section_heading}>Technical Skills</p>
        <ul >
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>SQL</li>


        </ul>
        </section>




      </>

  )
}

export default Resume