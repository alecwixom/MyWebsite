import { NavLink } from "react-router-dom"
import { ReactSVG } from "react-svg"
import MySVGIcon from '../images/linkedin.svg'
import githubicon from '../images/githublogo.svg'
import './navbar.css'

const navbar = () => {

    const styleActiveLink = ({ isActive }) => {
        return {
            color: isActive ? "white" : "",
        }
    }

    return (
        <div className="navbar">
            <NavLink className='logo' to='/'>
                <h1>LOGO</h1>
            </NavLink>
            <ul className="navlinks">
                <li className="homelink">
                    <NavLink style={styleActiveLink} to='/'>
                        Home
                    </NavLink>
                </li>
                <li className="projectslink">
                    <NavLink style={styleActiveLink} to='/projects'>
                        Projects
                    </NavLink>
                </li>
                <li className="aboutlink">
                    <NavLink style={styleActiveLink} to='/about'>
                        About
                    </NavLink>
                </li>
                <div className="socialbox">
                    <ul className="sociallink">
                        <li className="socialitem">
                            <a className="Linkedin" target="_blank" href="https://www.linkedin.com/in/alec-wixom-b7665521a/">
                            <ReactSVG className="linkedsvg" src={MySVGIcon} />
                            </a>
                        </li>
                        <li className="socialitem">
                            <a className="Github" target="_blank" href="https://github.com/alecwixom">
                                <ReactSVG className="gitsvg" src={githubicon}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </ul>
        </div>
    )
}

export default navbar