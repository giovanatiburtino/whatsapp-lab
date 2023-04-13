import { ChatBalloon, ChatContainer } from "./style";
import DoubleTickBlue from '../../assets/Double-tick-blue.svg'
import DoubleTickWhite from '../../assets/Double-tick-white.svg'

function Chat(props){
    const { messages, deleteMessage } = props

    return (
        <ChatContainer>
            {messages.map((message) => (
                <div key={message.id}>
                    <ChatBalloon
                        sender={message.sender}
                        onDoubleClick={() => deleteMessage(message.id)}
                    >
                        {message.sender !== "Me" && <h1>{message.sender}</h1>}
                        <p>{message.content}</p>
                        <div>
                            <span>{message.createdAt}</span>
                            {
                                message.sender === "Me"
                                ? <img src={DoubleTickWhite} alt="View status icon" />
                                : <img src={DoubleTickBlue} alt="View status icon" />
                            }
                        </div>
                    </ChatBalloon>
                </div>
            ))}
            {window.addEventListener('scroll', () => {
                const scrollable = document.documentElement.scrollHeight = window.innerHeight
                const scroll = window.scrollY

                console.log(scroll)
            })}
        </ChatContainer>
    )
}

export default Chat;