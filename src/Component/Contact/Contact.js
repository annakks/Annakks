import React, { useState } from 'react'
import "./Contact.css"

const Contact = () => {

    const[data, setData] = useState({ 
        fullname: "",
        phone: "",
        email: "",
        message: "",
     }) 
    const InputEvent = (event) => {
        const {name,value} = event.target

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,

            }
        })
    }

    const formSubmit = (event) => {
        event.preventDefault()
        alert(
            `Mensagem Enviada!!!`
            )
    }

  return (
    <div>
        <section className="Contact" id="contact">
            <div className="container top">
                <div className="heading text-center">
                    <h4>Contato</h4>
                    <h1>Entre em Contato</h1>
                </div>
                <div className="content d_flex">
                    <div className="left">
                        <div className="box box_shadow">
                            <div className="">
                                <img src="" alt="" />
                            </div>
                            <div className="details">
                                <h1>Gostou do meu Trabalho?</h1>
                                <p>Estou disponível para Contratação e trabalho freelance.</p> 
                                <br/>
                                <p>Telefone: +55 12 9 9638-8022 (WhatsApp)</p>
                                <p>E-mail: annakks@gmail.com</p>
                                <span class=""></span>
                                <div class="button f_flex">
                                    <a href="https://www.facebook.com/anacarolina.santos.984349/" target="_blank" rel='noreferrer'>
                                        <button className="btn_shadow">
                                            <i className="fab fa-facebook-f"></i>
                                        </button>
                                    </a>
                                    <a href="https://www.instagram.com/annakks/" target="_blank" rel='noreferrer'>
                                        <button className="btn_shadow">
                                            <i className="fab fa-instagram"></i>
                                        </button>
                                    </a>
                                    <a href="https://twitter.com/annakks" target="_blank" rel='noreferrer'>
                                        <button className="btn_shadow">
                                            <i className="fab fa-twitter"></i>
                                        </button>
                                    </a>
                                    <a href="https://www.linkedin.com/in/annakks/" target="_blank" rel='noreferrer'>
                                        <button className="btn_shadow">
                                            <i className="fab fa-linkedin"></i>
                                        </button>
                                    </a>   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <form onSubmit={formSubmit}>
                            <div className="f_flex">
                                <div className="input row">
                                    <span>Nome</span>
                                    <input type="text" name="fullname" value={data.fullname} onChange={InputEvent}/>
                                </div>
                                <div className="input row">
                                    <span>Telefone de contato</span>
                                    <input type="phone" name="phone" value={data.phone} onChange={InputEvent}/>
                                </div>
                            </div>
                            <div className="input">
                                <span>E-mail</span>
                                <input type="email" name="email" value={data.email} onChange={InputEvent}/>
                            </div>
                            <div className="input">
                                <span>Mensagem</span>
                                <textarea cols="30" rows="10" name="message" value={data.message} onChange={InputEvent}/>
                            </div>
                            <button className="btn_shadow">
                                Enviar Mensagem <i className="fa fa-long-arrow-down"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact
