import React, {useState} from 'react'
import "./Header.css"
import logo from '../../assets/logo-removebg-preview.png'

const Header = () => {
    // navbar fixed
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })
    // navbar mobile
    const [Mobile, setMobile] = useState(false)
    return (
        <>
        <header className="header">
            <div className="container d_flex">
                <div className="logo">
                    <img src={logo}  alt="" width='100px' />
                </div>
                <div className="navlink">
                    <ul className= {Mobile ? "nav-links-mobile" : "link f_flex uppercase" } onClick={() => setMobile(false)}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#portifolio">Portfólio</a></li>
                        <li><a href="#g">Graduação</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                    <button className='toggle' onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                    </button>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header