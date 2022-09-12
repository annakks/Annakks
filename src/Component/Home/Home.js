import React from 'react'
import "./Home.css"
import { Typewriter} from 'react-simple-typewriter'
import figure from '../../assets/WhatsApp_Image_2021-03-17_at_13.25.50.png'



const Home = () => {
  return (
    <>
        <section className="home" id="home">
            <div className="container f_flex top">
                <div className="left top">
                    <h3>Olá, Bem vindo ao meu Site Pessoal</h3>
                    <h1>Sou a Ana Carolina, codinome <span>Annakks</span>
                    </h1>
                    <h2> trabalho com
                        <span>
                            <Typewriter
                                words={[' Dev Web.',' Dev Back.', ' Dev Mobile.', ' DB.', ' BI.', ' SCRUM.']}
                                loop
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>
                    <p>Tenho 9 anos de Carreira Pública, Graduação e pós-Graduação em Administração e Tecnologo na área de Tecnologia da Informação-TI.</p>
                    <p>Graduação em Desenvolvimento de Software Multiplataforma pela FATEC de São Jose dos Campos, considerada uma das faculdades mais conceituadas na área de tecnologia.</p>
                    <div className="home_btn d_flex">
                        <div className="col_1">
                            <h4> Contate me </h4>
                            <div className="button">
                                <button className="btn_shadow">
                                    <i className='fab fa-linkedin-in'></i>
                                </button>
                                <button className="btn_shadow">
                                    <i className='fab fa-github'></i>
                                </button>
                            </div>
                        </div>
                        <div className="col_1">
                            <h4> Conhecimento em: </h4>
                            <div className="button">
                                <button className="btn_shadow">
                                    <i class='fab fa-node-js fa-lg'></i><br/>
                                </button>
                                <button className="btn_shadow">
                                    <i class='fab fa-react fa-lg'></i><br/>
                                </button>
                                <button className="btn_shadow">
                                    <i class='fas fa-leaf fa-lg'></i><br/>
                                </button>
                                <button className="btn_shadow">
                                    <i class='fab fa-python fa-lg'></i><br/>
                                </button>
                                <button className="btn_shadow">
                                    <i class='fab fa-git-alt fa-lg'></i><br/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right_img">
                        <img src={figure} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home
