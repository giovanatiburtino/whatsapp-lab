import { InputContainer } from "./style"
import smiley from "../../assets/smiley.svg"
import paperClip from "../../assets/paperclip.svg"
import microphone from "../../assets/microphone.svg"
import { useState } from "react"

function Input(props) {
    const { sendMessage } = props

    const [ text, setText ] = useState("")

    const changeText = (e) => {
        setText(e.target.value)
    }

    // cb de limpeza do text
    const clearText = () => {
        setText("")
    }

    const handleMessage = (e) => {
        if (e.key === "Enter") {
            sendMessage(text)
            setText("")
        }
    }

    return (
        <InputContainer>
            <div>
                <button className="emoji">
                    <img src={smiley} alt="Emoji icon" />
                </button>

                <input
                    value={text}
                    onChange={changeText}
                    placeholder="Type a message"
                    // onKeyDown com cb
                    // onKeyDown={(e) => sendMessage(e, text, clearText)}

                    onKeyDown={handleMessage}
                />
                
                <button className="paperclip">
                    <img src={paperClip} alt="Append icon" />
                </button>
            </div>

            <button className="microphone">
                <img src={microphone} alt="Microphone icon" />
            </button>
        </InputContainer>
    )
}

export default Input