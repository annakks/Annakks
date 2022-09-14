import React, {useState} from 'react'

const Card = (props) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
      setModal(!modal)
    }
  return (
    <>
    <div className="box btn_shadow">
      <div className="img">
        <img src={props.image} alt="" onClick={toggleModal}/>
      </div>
      <div className="category d_flex">
        <span>{props.category}</span>
      </div>
      <div className="title">
        <h2 onClick={toggleModal}>{props.title}</h2>
        <a href="#" className="arrow" onClick={toggleModal}>
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>

    {modal &&(
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content d_flex">
          <div className="modal-img left">
            <img src={props.image} alt="" />
          </div>
          <div className="modal-text right">
            <span>Detalhes</span>
            <h1>{props.title}</h1>
            <p>Destaque Destaque Destaque Destaque Destaque Destaque Destaque Destaque Destaque </p>
            <p>Destaque Destaque Destaque Destaque Destaque Destaque Destaque Destaque Destaque </p>
            <div className="button f_flex mtop">
              <button className="btn_shadow">
                Repositório do Projeto <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <button className="close-modal btn_shadow" onClick={toggleModal}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default Card