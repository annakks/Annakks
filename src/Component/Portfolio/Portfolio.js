import React from 'react'
import "./Portfolio.css"
import Portfolio_data from './Portfolio_data'
import Card from './Card'

const Portfolio = () => {
  return (
    <>
      <section className="portfolio top " id="portfolio">
        <div className="container">
            <div className="heading text-center">
                <h1>Portfólio FATEC</h1>
                <h4>Veja alguns dos meus trabalhos</h4>
            </div>
            <div className="container grid">
                {Portfolio_data.map((value, index) => {
                    return <Card key={index} category={value.category} title={value.title} text={value.text} image={value.image} url={value.url}/>;
                })}
            </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
