import React from 'react';
import {FaBars,FaReact} from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
import {Link} from 'react-router-dom';
import './navbar.scss';

const data = [
    {
    label :'HOME',
    to : '/'
    },
    {
        label :'ABOUTME',
        to : '/about'
      },
   {
            label :'SKILLS',
            to : '/skills'
      
      },
        {
            label :'RESUME',
            to : '/resume'
            },
            {
                label :'PORTFOLIO',
                to : '/portfolio'
                },
                {
                    label :'CONTACT',
                    to : '/contact'
                    }            
]



const Navbar = () => {
const [toggleIcon,setToggleIcon] = React.useState(false)


    const handle =() =>{
        setToggleIcon(!toggleIcon);
    };
    return(
        <div>
            <nav className='navBar'>
                <div className='container'>
                    <Link to={'/'} className='navbar_container_logo'>
                    <FaReact size={30}/>
                    </Link>
                </div>
                <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
                    {
                        data.map((item, key) =>{
                            return(
                                <li key={key} className='navbar_container_menu_item'>
                                    <Link to={item.to} className='navbar_links'>
                                    {item.label}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='nav_icon' onClick={handle}>
                        {
                            toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
                        }
                </div>
            </nav>
        </div>
    )
}
export default Navbar;