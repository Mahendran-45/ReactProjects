import React from 'react'
import Header from './Header'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({

  wrapper: {
    padding: 20,
    backgroundColor: " #002855",
    fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    color: 'white'


  },
  section: {
    boxSizing: "border-box",
    padding:"2rem",
    minHeight:"440px"

  },
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
  content:{
    fontSize: "large",

    fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",

  }
})

function About() {
  const classes = useStyles()
  return (
    <>
     <div className={classes.description}>
        <h1 className={classes.desc}>About Me</h1>
      </div>
    <section className={classes.section}>
     <p className={classes.content}>
     This is Mahendran, and I am studying a Master's degree in computer information systems at Florida Tech from August 2023. I previously worked as a software developer at Accenture for 2.5 years.My role is to create, configure, and test the application.My work experience taught me a lot about coding because I was an Electrical student in undergrad and didn't know much about coding in college. My employment taught me how backend systems function and helped me obtain more knowledge as a Java developer.In order to advance my career and become a full stack developer, I considered getting a master's degree in the United States, which is why I chose web application to learn more about the front end.As of now, I have learned Java as a backend and have knowledge of MySQL and MangoDb as databases. Dr. Fitz has now taught me how to code in HTML and CSS, and I hope to acquire the knowledge from this course and become a full stack developer in the future.


     </p>

    </section>
    </>
  )
}

export default About