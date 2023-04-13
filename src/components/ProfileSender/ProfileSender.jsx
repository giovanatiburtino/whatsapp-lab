import moreOptions from '../../assets/more-options.svg'
import phoneCall from '../../assets/phoneCall.svg'
import videoCam from '../../assets/videoCam.svg'
import { HeaderContainer, Select, Status } from './style'


function ProfileSender(props) {
  const { senders, currSender, onChangeSender } = props

    return (
      <HeaderContainer>
        <div className="sender-profile">
            <img src={`https://picsum.photos/seed/${currSender}/200/200`} alt="profile image"/>
            <div>
                <Select value={currSender} onChange={onChangeSender}>
                    {senders.map((sender) => (
                      <option key={sender} value={sender}>{sender}</option>
                    ))}
                </Select>
                <Status>Online</Status>
            </div>
        </div>

        <div className="action-menu">
          <button>
            <img src={videoCam} alt='video Cam icon'/>
          </button>
            <button><img src={phoneCall} alt='phone call icon'/></button>
          <button>
            <img src={moreOptions} alt='more options icon'/>        
          </button>
        </div>
      </HeaderContainer>
    )
  }
  
  export default ProfileSender