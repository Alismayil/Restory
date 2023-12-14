import React from 'react'
import './footer.scss'

function Footer() {
    return (
        <footer>
            <div className="socialMediaText">
                <h1>OUR SOCIAL MEDIA</h1>
            </div>
            <div className="footerimages">
                <img src="https://nunforest.com/restory-demo/upload/instagram/1@2x.jpg" alt="" />
                <img src="https://nunforest.com/restory-demo/upload/instagram/2@2x.jpg" alt="" />
                <img src="https://nunforest.com/restory-demo/upload/instagram/3@2x.jpg" alt="" />
                <img src="https://nunforest.com/restory-demo/upload/instagram/4@2x.jpg" alt="" />
                <img src="https://nunforest.com/restory-demo/upload/instagram/5@2x.jpg" alt="" />
                <img src="https://nunforest.com/restory-demo/upload/instagram/6@2x.jpg" alt="" />
                <img src="https://nunforest.com/restory-demo/upload/instagram/7@2x.jpg" alt="" />
                <img src="https://nunforest.com/restory-demo/upload/instagram/8@2x.jpg" alt="" />
            </div>
            <div className="socialMediaLink">
                <div className="copyRiderAndText">
                    <p>© 2023 RESTORY. ALL RIGHTS RESERVED. TEMPLATE BY <a href="https://www.instagram.com/accounts/onetap/?next=%2F"> ALI.ISMAYIL.</a></p>
                </div>
                <div className="socialMediaLinkText">
                    <p><a href="https://www.facebook.com/">FACEBOOK</a></p>
                    <p><a href="https://twitter.com/">TWITTER</a></p>
                    <p><a href="">PINTERES</a></p>
                    <p><a href="https://www.google.com/">GOOGLE+</a></p>
                    <p><a href="https://www.instagram.com/">INSTAGRAM</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer