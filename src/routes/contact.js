import './contact.css'

function Contact(){
    return(
        <>
        <div id='contact'></div>
        <div className='container'>
            <div className='contact'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Linkedin.svg" className='' alt='linkedin' />
                <div className='info'>
                    <h1 className='title'>LinkedIn</h1>
                    <a href='https://www.linkedin.com/in/matthew-rikard-6bbb1893' target='_blank' rel='noreferrer' className='link'>Madhatter2084</a>
                </div>
            </div>
            <div className='contact'>
                <img src="https://i1.wp.com/img.pngio.com/github-logo-icon-of-glyph-style-available-in-svg-png-eps-ai-github-icon-png-256_256.png?resize=200%2C200&ssl=1" className='' alt='github' />
                <div className='info'>
                    <h1 className='title'>GitHub</h1>
                    <a href='https://github.com/madhatter2084' target='_blank' rel='noreferrer' className='link'>Madhatter2084</a>
                </div>
            </div>
            <div className='contact'>
                <img src="https://i.pinimg.com/originals/7f/45/88/7f4588efc18882b586ae69092c7bafd6.png" className='' alt='linkedin' />
                <div className='info'>
                    <h1 className='title'>Email</h1>
                    <a href="mailto:matthew.rikard@gmail.com" target="_blank" rel='noreferrer' className='link'>matthew.rikard</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact