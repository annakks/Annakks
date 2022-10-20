import React from 'react';
import Card from './Card';
import Graduate_data from './Graduate_data';
import "./Graduate.css";

const Graduate = () => {
  return (
    <>
        <section className="Resume" id="resume">
            <div className="container top">
                <div className="heading text-center">
                    <h4>Carreira</h4>
                    <h1>Meu Curriculum</h1>
                </div>
                <div className="content-section mtop d_flex">
                    <div className="left">
                        <div className="heading">
                            <h4>Qualificação Profissional</h4>
                            <h1>Formação</h1>
                        </div>
                        <div className="content">
                            {Graduate_data.map((val,id) => {
                                if (val.category === "education"){
                                return <Card key = {id} institution={val.institution} title={val.title} desc={val.desc} />
                                }                                
                            })}
                        </div>
                    </div>
                    <div className="left">
                        <div className="heading">
                            <h4>Experiência Profissional</h4>
                            <h1>Trabalhos</h1>
                        </div>
                        <div className="content">
                            {Graduate_data.map((val,id) => {
                                if (val.category === "experience"){
                                return <Card key = {id} institution={val.institution} title={val.title} desc={val.desc} />
                                }                                
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Graduate
