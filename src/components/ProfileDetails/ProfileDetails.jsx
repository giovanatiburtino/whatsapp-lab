import closeButton from '../../assets/close.svg'
import { ContactInfoWindow } from './style'
import videoCam from '../../assets/videoCam.svg'
import phoneCall from '../../assets/phoneCall.svg'
import media1 from "../../assets/media1.svg"
import media2 from "../../assets/media2.svg"
import media3 from "../../assets/media3.svg"
import media4 from "../../assets/media4.svg"
import muteNotification from "../../assets/mute-notification-icon.svg"
import ReportIcon from "../../assets/ThumbsDown.svg"
import DeleteChat from "../../assets/Trash.svg"
import BlockIcon from "../../assets/Prohibit.svg"

function ProfileDetails(props){
    const { currSender } = props
    return (
        <ContactInfoWindow>
            <div className='contact-info-window-header'>
                <img src={closeButton} alt="close button"/>
                <p>Contact info</p>
            </div>

            <div className='contact-info-profile-image'>
                <img src={`https://picsum.photos/seed/${currSender}/200/200`} alt="profile image"/>
                <h3>{currSender}</h3>
                <p>Online</p>
            </div>

            <div className="contact-info-action-button">
                <button>
                    <img src={videoCam} alt='video Cam icon'/>
                </button>
                <button>
                    <img src={phoneCall} alt='phone call icon'/>
                </button>
            </div>

            <div className='contact-info-about'>
                <h3>About</h3>
                <p>Hello, my name is {currSender}</p>
            </div>

            <div className='contact-media'>
                <h3>Media, links and docs</h3>

                <div className='contact-media-images'>
                    <img src={media1} alt="media, link ou doc"/>
                    <img src={media2} alt="media, link ou doc"/>
                    <img src={media3} alt="media, link ou doc"/>
                    <img src={media4} alt="media, link ou doc"/>
                </div>
            </div>

            <div className='contact-notifications'>
                <h3>Mute notifications</h3>
                <img src={muteNotification} alt="mute notification icon" />
            </div>

            <div className='contact-notifications-message'>
                <h3>Disappearing messages</h3>
                <p>Off</p>
            </div>

            <div className='contact-caution-buttons'>
                <img src={BlockIcon} alt="Block button"/>
                <p>Block {currSender}</p>
            </div>
        
            <div className='contact-caution-buttons'>
                <img src={ReportIcon} alt="Report button"/>
                <p>Report {currSender}</p>
            </div>

            <div className='contact-caution-buttons'>
                <img src={DeleteChat} alt="Delete icon" />
                <p>Delete {currSender}</p>
            </div>
            
        </ContactInfoWindow>
    )
}

export default ProfileDetails