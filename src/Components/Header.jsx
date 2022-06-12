import React ,{useContext} from 'react';
import {Button,makeStyles} from '@material-ui/core';
import {Link} from "react-router-dom";
import { firebaseDB, firebaseStorage ,timeStamp} from "../config/firebase";
import { AuthContext } from "../context/AuthProvider";
import NewzAge  from "../NewzAge.JPG";




const Header =  () => {
    const {currentUser}=useContext(AuthContext);
    
    
    const useStyles = makeStyles({

     imgheader:
     {
        height:"11vh",
        width:"40vh",
        marginTop:"1px",
        marginBottom:"4px"
     },
     headerdiv:
     {
        backgroundColor:"#c8d6e5",
        display:"flex",
        justifyContent:"space-between",
       
     },
     loginbutton:
     {
        height:"6vh",
        marginTop:"2vh"
     }
     
    })
    let classes = useStyles();
    
const handleprofile=()=>{
    console.log(currentUser.uid);
    console.log(currentUser.email);
    
    
     
}

 
   
    return (
        currentUser ? 
            <div className={classes.headerdiv}>
            <Link to="/">
            <img src={NewzAge} className={classes.imgheader} />
            </Link>
            
           <Button variant="contained" color="primary" onClick={handleprofile} className={classes.loginbutton}>
                    <Link style={{color:"white"}}to="/profile">Profile</Link>
           </Button>
           
        
          </div> :
          <div className={classes.headerdiv}>
          <Link to="/">
            <img src={NewzAge} className={classes.imgheader} />
            </Link>
          <Button  variant="contained" color="primary" size="small"  className={classes.loginbutton}>
                  <Link style={{color:"white"}}to="/login">Log In</Link> 
         </Button>
         
      
        </div>

         

        
      
   );
}
 
export default Header;