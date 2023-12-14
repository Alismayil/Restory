import React from 'react'
import './contactWithSection.scss'
import { TfiLocationPin } from "react-icons/tfi";
import { MdPhoneIphone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

function ContactWithSection() {
  return (
    <section id='contactWithSection'>
        <div className='contactWisthBox'>
            <div className="contactwithText">
                <h1>CONTACT WITH US</h1>
                <img src="https://nunforest.com/restory-demo/images/divider@2x.png" alt="" />
            </div>
            <div className="contactWithInputs">
                <form action="">
                <input className='contactWithSmallInput' type="text" placeholder='Name*' />
                <input className='contactWithSmallInput' type="number" placeholder='Number*' />
                <input className='contactWithSmallInput' type="email" placeholder='Your Email' />
                <input className='contactWithSmallInput' type="email" placeholder='Send Email' />
                <input className='contactWithBiglInput' type="text" placeholder='Message*' />
                </form>
                <button className='contactWisthBtn'>SEND MESSAGE</button>
            </div>
            <div className="ourContactIconsAndNumber">
                <div className="withContactInform">
                    <div className="withContactInformIcon">
                    <TfiLocationPin  className='withContactInformIconImage' />
                    </div>
                    <div className="withContactInformTextBox">
                        <h3>OUR LOCATION</h3>
                        <span>PO Box 16122 Collins Street</span><br />
                        <span>West Victoria 8007</span>
                    </div>
                </div>
                <div className="withContactInform">
                    <div className="withContactInformIcon">
                    <MdPhoneIphone  className='withContactInformIconImage' />
                    </div>
                    <div className="withContactInformTextBox">
                        <h3>OUR PHONES</h3>
                        <span>+0114 5544 9876</span><br />
                        <span>+0114 5544 9955</span>
                    </div>
                </div>
                <div className="withContactInform">
                    <div className="withContactInformIcon">
                    <IoIosMail   className='withContactInformIconImage' />
                    </div>
                    <div className="withContactInformTextBox">
                        <h3>OUR MAIL</h3>
                        <span>office@restory.com</span><br />
                        <span>your@restory.com</span>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default ContactWithSection