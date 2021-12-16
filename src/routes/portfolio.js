import "./portfolio.css";
import binance from '../assets/binance.jpg';
import oBrien from '../assets/oBrienConstruction.jpg';
// import portfolio from '../assets/portfolio1_0.jpg'
import quarantine from '../assets/quarantineLean.jpg';
import travidWallet from '../assets/travidWallet.jpg';

function Portfolio(){
    return(
        <>
        <section className="portfolio">
            <div className="tile">
                <img className="screenShot" src={binance} alt='binance screenshot' />
                <h1>Binance</h1>
                <p>this is some text about the site</p>
                <div className='links'>
                    <a href="https://github.com/madhatter2084/Binance" target='_blank' rel='noreferrer' className='portfolioLinks'>GitHub</a>
                    <hr></hr>
                    <a href='https://tjaved12.github.io/Binance/' target='_blank' rel='noreferrer' className='portfolioLinks'>Binance</a>
                </div>
            </div>
            <div className="tile">
                <img className="screenShot" src={oBrien} alt='binance screenshot' />
                <h1>O'Brien's Construction</h1>
                <p>this is some text about the site</p>
                <div className='links'>
                    <a href="https://github.com/madhatter2084/templatetest05042021" target='_blank' rel='noreferrer' className='portfolioLinks'>GitHub</a>
                    <hr></hr>
                    <a href='https://obriensconstruction.com/' target='_blank' rel='noreferrer' className='portfolioLinks'>O'Brien's</a>
                </div>
            </div>
            <div className="tile">
                <img className="screenShot" src={travidWallet} alt='binance screenshot' />
                <h1>Travid Wallet</h1>
                <p>this is some text about the site</p>
                <div className='links'>
                    <a href="https://github.com/madhatter2084/travelorsApp" target='_blank' rel='noreferrer' className='portfolioLinks'>GitHub</a>
                    <hr></hr>
                    <a href='https://still-waters-92313.herokuapp.com/' target='_blank' rel='noreferrer' className='portfolioLinks'>TravidWallet</a>
                </div>
            </div>
            <div className="tile">
                <img className="screenShot" src={quarantine} alt='binance screenshot' />
                <h1>QuarantineLean</h1>
                <p>this is some text about the site</p>
                <div className='links'>
                    <a href="https://github.com/madhatter2084/Project2" target='_blank' rel='noreferrer' className='portfolioLinks'>GitHub</a>
                    <hr></hr>
                    <a href='https://nameless-brook-84052.herokuapp.com/' target='_blank' rel='noreferrer' className='portfolioLinks'>QuarantineLean</a>
                </div>
            </div>
        </section>
        </>
    )
}

export default Portfolio