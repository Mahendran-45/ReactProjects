import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({

  wrapper: {
    padding: "20px",
    fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    margin: "20px",
    minHeight:"360px"




  }, heading: {
    //margin-left: 15px; font-weight:bold; font-size:x-large;"
    fontSize: "x-large",
    marginLeft: "15px",
    fontWeight: "bold"
  },
  unorder_list: {
    //style="font-size: large; margin-top: -10px;
    fontSize: "large",
    marginTop: "-10px"
  }, description: {
    backgroundColor: " #002855",
    marginTop: "-22px",
    padding: "0px", color: "white", paddingLeft: "30px",
    paddingBottom: "20px",

    

  },
  desc:{
    //border-bottom: 3px solid rgb(136, 9, 9);
    borderBottom:"2px solid white",
    

  }
})

function Skills() {
  const classes = useStyles()
  return (
    <>
      <div className={classes.description}>
        <h1 className={classes.desc}>Skills</h1>
      </div>
      <section className={classes.wrapper}>

        <h3 className={classes.heading}> Technical Skills</h3>
        <ul className={classes.unorder_list}>
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>SQL</li>


        </ul>
        <h3 className={classes.heading}>Framework</h3>
        <ul className={classes.unorder_list}>
          <li>React</li>
          <li>Spring Boot</li>
          <li>Hibernate</li>


        </ul>

      </section>
    </>
  )
}

export default Skills