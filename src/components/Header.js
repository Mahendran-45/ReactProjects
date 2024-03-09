import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { useState,useEffect } from 'react';
//style={({isActive})=>{return {color:isActive?'#f7f5f4':'white',border:isActive?'1px solid #f7f5f4':"white"}}} 
const useStyles = createUseStyles({
    
    wrapper: {
        padding: 20,
        backgroundColor: " #002855",
        fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        color: 'white'


    },
    li_style:{
        color:'white',display:"inline-block",
        paddingRight:"0.5em"


    },
    ul_style:{
        color:"white",
        padding:"0.25em",
        textDecoration:"none",
       // border:"1px solid #FAF7FF",
        marginRight:"0.5rem",
       

    },
    header:{
        color:"transparent",
        backgroundClip:"text",
        backgroundImage: " linear-gradient(to right, #bfc08e 0, #a87931 22%, #f6e27a 45%, #f6f2c0 50%, #f6e27a 55%, #cb9b51 78%, #462523 100%)",
        
    },active:{
        color:"f7f5f4",
        padding:"0.25em",
        color:"white",
        

        textDecoration:"none",
        border:"1px solid #f7f5f4",

        
    },
    navlink:{
        color:"white",
        padding:"0.25em",
        textDecoration:"none",
       // border:"1px solid #FAF7FF",
        marginRight:"0.5rem",
        '&.active':{
            border:"1px solid white"
        }

    },
    unactive_navlist:{

    },
    '@media (max-width: 768px)': {
        li_style:{
            color:'white',display:"block",
            padding:"8px",
            width:"100%",
        //    border:"1px solid white",
            marginRight:"7px",
            textDecoration:"none",
            marginBottom:"10px"
           
                
    
        }
        ,
        navlink:{
            display:"block",
             width:"80%",
             border:"1px solid #7CB9E8",

            //  border:"1px solid white",
             '&.active':{
                border:"1px solid SMOKEWHITE",
                color:"#DEB887",
                display:"block",
                // border:"none"
                width:"80%"
            },
            unactive_navlist:{
                
                display:"block",
                 width:"80%",
                 border:"10px solid white",
                 color:"white"
        }
         

        }
    }

})

function Header() {
    const[activeclass,setActiveclass]=useState("About")
   

    const classes = useStyles()
    //   className={( active===link.text)?classes.active:classes.ul_style}
//className={classes.navlink}   style={({isActive})=>{return {color:isActive?'#f7f5f4':'white' ,border:isActive?'1px solid #f7f5f4':"white"}}} 

    let links = [{ href: '/about', text: "About" }, { href: '/skills', text: "Skills" }, { href: '/project', text: "Project" }, { href: '/resume', text: "Resume" }, { href: '/contact', text: "Contact" }]
    return (
        <header className={classes.wrapper}>
            <nav>
      
                <h1 className={classes.header}>Mahendran's Portfolio</h1>
                <ul >
                   
                    {
                        links.map((link) => 
                        
                        
                                <li className={classes.li_style}>
                                    <NavLink className={classes.navlink}

 to={link.href} onClick={()=>setActiveclass(link.text)} >{link.text}
                                    </NavLink>

                                </li>

                            
                        
                        )
                    }
                </ul>
            </nav>

        </header>
    )
}

export default Header