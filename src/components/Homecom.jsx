import React, { useState, useEffect } from 'react'
import '../styles/Home.css'
import { FaReact, FaJava, FaPython, FaGitAlt, FaNodeJs, FaGithub } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { SiMysql, SiCplusplus, SiFastapi } from "react-icons/si"
import { Link } from 'react-router-dom'
import { VscGithubProject } from "react-icons/vsc"
import { langData } from '../Data/Lengdata'

const Homecom = () => {
    const [Lang, setLang] = useState("en")

    useEffect(() => {
        const stored = localStorage.getItem("lang")
        if (stored) setLang(stored)
    }, [])

    const t = langData[Lang]
    return (
        <>
            <div className="mainHome">
                <div className="conleftHome">
                    <div className="boxprojectHome">
                        <div className="projectHome">
                            <Link className='projectLink' to="/project"><VscGithubProject className="iconProject" /> Projects</Link>
                        </div>
                        <div className="githubHome">
                            <Link className='githublink' to="https://github.com/gitgitopop0"><FaGithub className="iconGithub" />GitHub</Link>
                        </div>
                    </div>
                </div>
                <div className="conrigtHome">
                    <div className="boxHome">
                        <p className="boxHomeTitle">
                            {t.title}
                        </p>
                        <p className="boxHomeSubTitle">
                            {t.subtitle}
                        </p>
                    </div>
                    <div className="fultter">
                        <p className='toolsHome'>{t.tools}</p>
                        <p className='toolsHome'>{t.backend}</p>
                        <p className='toolsHome'>{t.languages}</p>
                    </div>
                    <div className="coniconsHome">
                        <div className="iconsHome">
                            <FaReact className="iconReact" />
                            <IoLogoJavascript className="iconJs" />
                            <FaJava className="iconJava" />
                            <FaPython className="iconPython" />
                            <SiMysql className="iconMysql" />
                            <FaGitAlt className="iconGit" />
                            <SiCplusplus className="iconCpp" />
                            <FaNodeJs className="iconNode" />
                            <SiFastapi className="iconFastApi" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homecom