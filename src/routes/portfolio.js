import "./portfolio.css"
import binance from '../assets/binance.jpg'

function Portfolio(){
    return(
        <>
        <section className="portfolio">
            <div className="tile">
                <img className="screenShot" src={binance} alt='binance screenshot' />
                <hr></hr>
                <h1>Binance</h1>
                <p>this is some text about the site</p>
                <div className='links'>
                    <a href="https://github.com/madhatter2084/Binance" target='_blank' rel='noreferrer' className='portfolioLinks'>GitHub</a>
                    <hr></hr>
                    <a href='https://tjaved12.github.io/Binance/' target='_blank' rel='noreferrer' className='portfolioLinks'>Binance</a>
                </div>
            </div>
            <div className="tile">

            </div>
            <div className="tile">

            </div>
            <div className="tile">

            </div>
        </section>
        </>
    )
}

export default Portfolio