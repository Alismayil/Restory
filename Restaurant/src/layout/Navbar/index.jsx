import React from 'react'
import './navbar.scss'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
function Navbar() {

  const { t, i18n } = useTranslation();


  function changeLang(lang) {
    i18n.changeLanguage(lang)
  }


  return (
    <div className='navbarLine'>
         <div className='langChange'>
              <button onClick={()=>changeLang("en")}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/255px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" alt="" />
              </button>
              <button onClick={()=>changeLang("az")}>
              <img src="https://azerbaijan.az/uploads/news-files/melumatlar/Tarix/bayraq.jpg" alt="" />
              </button>
             <button onClick={()=>changeLang("ru")}>
             <img src="https://www.flagsandflagpoles.co.uk/cdn/shop/products/russia_800x.gif?v=1626323223" alt="" />
             </button>
          </div>

        

      <div className='navbar'>
        <div className="navbarLogo">
          <Link className='linkNavbar'  to={"/"}>RESTORY</Link>
        </div>
        <div className="navbarLinks">
          <ul>
            <li> <Link className='LinkLi' to={"/"}>{t("home")}</Link> </li>
            <li> <Link className='LinkLi' to={"/about"}>{t("about")}</Link> </li>
            <li> <Link className='LinkLi' to={"/menu"}>{t("menu")} </Link> </li>
            <li> <Link className='LinkLi' to={"/reservation"}>{t("reservation")}</Link> </li>
            <li> <Link className='LinkLi' to={"/blog"}>{t("blog")}</Link> </li>
            <li> <Link className='LinkLi' to={"/location"}>{t("location")}</Link> </li>
          </ul>

        </div>
      </div>

    </div>
  )
}

export default Navbar