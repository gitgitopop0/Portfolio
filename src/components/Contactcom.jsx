import React, { useEffect} from 'react'
import '../styles/Contact.css'
import { FaFacebook, FaLine, FaDiscord } from "react-icons/fa"
import { langData } from '../Data/Lengdata'

const Contactcom = () => {

    const [Lang, setLang] = React.useState("en")

    useEffect(() => {
        const stored = localStorage.getItem("lang")
        if (stored) setLang(stored)
    }, [])

    const t = langData[Lang] 

    return (
        <>
            <div className="mainContact">
                <p className="contactTitel">{t.contact}</p>
                <div className="contactBox">
                    <a className='boxContact' href="https://www.facebook.com/profile.php?id=61587695670261" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="contactIcon1" />
                    </a>
                    <a className='boxContact' href="https://lin.ee/oLXL5GS" target="_blank" rel="noopener noreferrer">
                        <FaLine className="contactIcon2" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contactcom