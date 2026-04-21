import React, { useState, useEffect } from 'react'
import '../styles/Project.css'
import { projectData } from '../Data/ProjectData'
import { langDataItem } from '../Data/Lengdata'

const Projectcom = () => {

  const [Lang, setLang] = React.useState("en")

  useEffect(() => {
    const stored = localStorage.getItem("lang")
    if (stored) setLang(stored)
  }, [])

  const t = langDataItem[Lang]
  return (
    <>
      <div className="mainProject">
        <p className="titelProject">My Projects</p>
        <div className="conProject">
          <div className="con-card-porject">
            {projectData.map((item) => (
              <a className="boxProject" key={item.id} href={item.url} target="_blank" rel="noopener noreferrer">
                <div className="cardimg">
                  <img className='img-project' src={item.img} alt={item.title} />
                </div>
                <div className="cardcontent">
                  <p className="cardtitle">{item.title}</p>
                  <p className="cardsub">{t.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projectcom