import './projects.css'
import liftshare from '../images/LiftShare.png'
import chat from '../images/Chat.png'


const projects = () => {
    return (
        <div className="projects">
            <h1 className='protitle'>Projects</h1>
            <p>
                [ - Description of page - ]
            </p>
            <div className='liftsharebox'>
                <a className='liftlink' target='_blank' href="https://github.com/alecwixom/CapstoneSpecs">
                    <img className='liftshareimg' src={liftshare} alt="LiftShare" />
                </a>
                <p className='liftdesc'>
                    LiftShare is my Capstone project while at DevMountain, this project contains axios requests, postgresSQL and other functionalities that were a blast to work on.
                    Click the image to see the github repo!
                </p>
            </div>
            <div className='chatbox'>
                <a className='chatlink' href="">
                    <img className='chatimg' src={chat} alt="chatpng" />
                </a>
                <p className='liftdesc'>
                    AnonymoChat is my Capstone Website I created during foundations at DevMountain. This project uses axios requests, built in database and the use of socket.io for
                    fast communication from client to server in messaging.
                    </p>
            </div>
        </div>
    )
}

export default projects