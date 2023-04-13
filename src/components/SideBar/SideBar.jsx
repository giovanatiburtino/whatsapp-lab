import { AusenteSign, ChatSelected, ChatSelection, OfflineSign, Online, OnlineSign, SideBarHeader, Status, TypeConversation } from "./style"
import status1 from '../../assets/profile1.svg'
import status2 from '../../assets/profile2.svg'
import status3 from '../../assets/profile3.svg'
import status4 from '../../assets/profile4.svg'
import addStatus from '../../assets/addstatus.svg'
import searchBar from '../../assets/input.svg'
import arrow from '../../assets/arrow.svg'
import pen from '../../assets/pen.svg'


function SideBar(props) {
    const { currSender } = props

    const localTime = new Date().toLocaleTimeString("en-US",
        {
            hour: "numeric",
            minute: "numeric",
            hour12: true
        }
    )

    return (
        <div>
            <SideBarHeader>
                <div className="side-bar-details">
                    <div className="side-bar-details-signs">
                        <OfflineSign />
                        <AusenteSign />
                        <OnlineSign />
                    </div>
                    <div className="side-bar-details-tools">
                        <img src={pen} alt="arrow icon" />
                        <img src={arrow} alt="pen icon" />
                    </div>
                </div>
                <div className="input">
                    <img src={searchBar} alt="input ilustrativo" />
                </div>
                <h3>STATUS</h3>
            </SideBarHeader>
            <Status>
                <img src={addStatus} alt="icone de adicionar status" />
                <img src={status1} alt="foto do status" />
                <img src={status2} alt="foto do status" />
                <img src={status3} alt="foto do status" />
                <img src={status4} alt="foto do status" />
            </Status>
            <TypeConversation>
                <h3 id="all-chats">ALL CHATS</h3>
                <h3 id="private-conversation">PRIVATE</h3>
            </TypeConversation>
            <ChatSelected>
                <img src={`https://picsum.photos/seed/${currSender}/200/200`} alt="ilustrative photo" />
                <Online />
                <div className="chat-selection-details">
                    <div className="chat-identification">
                        <p>Zilan</p>
                        <span>{localTime}</span>
                    </div>
                    <div className="chat-message">
                        <p>Thank you very much, I'm waiting</p>
                    </div>
                </div>
            </ChatSelected>
            <ChatSelection>
                <img src={`https://picsum.photos/seed/${currSender}/200/200`} alt="ilustrative photo" />
                <div className="chat-selection-details">
                    <div className="chat-identification">
                        <p>Matt</p>
                        <span>{localTime}</span>
                    </div>
                    <div className="chat-message">
                        <p>Thank you very much, I'm waiting</p>
                    </div>
                </div>
            </ChatSelection>
            <ChatSelection>
                <img src={`https://picsum.photos/seed/${currSender}/200/200`} alt="ilustrative photo" />
                <div className="chat-selection-details">
                    <div className="chat-identification">
                        <p>Annie</p>
                        <span>{localTime}</span>
                    </div>
                    <div className="chat-message">
                        <p>Thank you very much, I'm waiting</p>
                    </div>
                </div>
            </ChatSelection>
            <ChatSelection>
                <img src={`https://picsum.photos/seed/${currSender}/200/200`} alt="ilustrative photo" />
                <div className="chat-selection-details">
                    <div className="chat-identification">
                        <p>John</p>
                        <span>{localTime}</span>
                    </div>
                    <div className="chat-message">
                        <p>Thank you very much, I'm waiting</p>
                    </div>
                </div>
            </ChatSelection>
            <ChatSelection>
                <img src={`https://picsum.photos/seed/${currSender}/200/200`} alt="ilustrative photo" />
                <div className="chat-selection-details">
                    <div className="chat-identification">
                        <p>Astrodev</p>
                        <span>{localTime}</span>
                    </div>
                    <div className="chat-message">
                        <p>Thank you very much, I'm waiting</p>
                    </div>
                </div>
            </ChatSelection>
            <ChatSelection>
                <img src={`https://picsum.photos/seed/${currSender}/200/200`} alt="ilustrative photo" />
                <div className="chat-selection-details">
                    <div className="chat-identification">
                        <p>Astrodev</p>
                        <span>{localTime}</span>
                    </div>
                    <div className="chat-message">
                        <p>Thank you very much, I'm waiting</p>
                    </div>
                </div>
            </ChatSelection>

        </div>
    )
}

export default SideBar