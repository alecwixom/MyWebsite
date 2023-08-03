import './home.css'
import picture from '../images/portrait.jpg'

const home = () => {
    return (
        <div className="intro">
            <div className='background'>
            </div>
            <div>
                <h1>Hello, I'm Alec Wixom!</h1>
            </div>
            <div className='portrait'>
                <img className='homeimg' src={picture} alt="portrait" />
            </div>
            <p className='intro-text'>
                "Full-Stack developer who enjoy's the art of coding, games and camping. I am located in Utah County, Utah."
            </p>
        </div>
    )
}

export default home