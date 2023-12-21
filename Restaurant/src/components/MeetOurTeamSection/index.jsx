import React from 'react'
import './meetOurTeamSection.scss'

function MeetOurTeamSection() {
    return (
        <section id='meetOurTeamSection'>
            <div className="meetOurTeamUpBox">
                <div className="meetOurTeamText">
                    <h1>MEET OUR TEAM</h1>
                    <img src="https://nunforest.com/restory-demo/images/divider@2x.png" alt="" />
                </div>
            </div>
            <div className="meetOurTeamDownBox">
                <div className="imgAndTextBox">
                    <div className="imgBox">
                        <img src="https://nunforest.com/restory-demo/upload/others/team1@2x.jpg" alt="" />
                    </div>
                    <div className="textBox">
                        <h1>JOHN SMITH</h1>
                        <p>FOUNDER</p>
                        <span>Praesent dapibus, neque id cursus faucibus, tortor neque egestas</span>
                    </div>
                </div>
                <div className="imgAndTextBox">
                    <div className="imgBox">
                        <img src="https://nunforest.com/restory-demo/upload/others/team2@2x.jpg" alt="" />
                    </div>
                    <div className="textBox">
                        <h1>ANDY MILLER</h1>
                        <p>HEAD CHIEF</p>
                        <span>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</span>
                    </div>
                </div>
                <div className="imgAndTextBox">
                    <div className="imgBox">
                        <img src="https://nunforest.com/restory-demo/upload/others/team3@2x.jpg" alt="" />
                    </div>
                    <div className="textBox">
                        <h1>LORA MITES</h1>
                        <p>RESTAURANT MENAGEMENT</p>
                        <span>Praesent dapibus, neque id cursus faucibus, tortor neque egestas</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MeetOurTeamSection