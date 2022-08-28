import React , { useState,useEffect } from 'react';


const Nav = () => {
const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow (true);
            }else handleShow(false);
        });
      return ()=>{
          window.removeEventListener("scroll");
      };  
    }, []);
    
    return (
        <div className={`nav ${show && "nav_black"}`}>
    <img className='nav_logo' src='/img/Logo.jpg' alt='Netflix logo'/>
    <img className='nav_avatar' src='/img/Netflix-avatar.png' alt='Netflix avatar '/>
        </div>
    );
};

export default Nav;