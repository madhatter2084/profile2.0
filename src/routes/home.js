import "animate.css";
import "./home.css"
import Portfolio from "./portfolio"
import Contact from './contact'

function Home(){
    return (
        <>
        <div className="content header">
            <div className='header__bg'></div>
            <section className="aboutMe">
                <div className="animate__animated animate__zoomIn" id="profilePhoto" alt="My wife and I"></div>
                <div className=' animate__animated animate__zoomInLeft'>
                    <h1>Hello, I'm <span className="blue"> MATT</span></h1>
                    <p className=''>
                        I build responsive websites
                    </p>
                </div>
            </section>
        </div>

        <Portfolio />
        <Contact />
        </>
    )
}

export default Home