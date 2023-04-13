import { useState } from "react"
import { initialMessages } from "./assets/initialMessages"
import SideBar from "./components/SideBar/SideBar"
import Chat from "./components/Chat/Chat"
import Input from "./components/Input/Input"
import ProfileSender from "./components/ProfileSender/ProfileSender"
import { AppContainer, PageContainer, ProfileContainer, SideBarContainer } from "./GlobalStyle"
import ProfileDetails from "./components/ProfileDetails/ProfileDetails"


function App() {
  const [currSender, setCurrSender] = useState("Me") //remetente atual
  const [senders, setSenders] = useState(
    [
      "Zilan",
      "Matt",
      "Annie",
      "John",
      "Astrodev"
    ]
  )

  const [ messages, setMessages ] = useState(initialMessages)

  // função que muda o remetente atual
  const onChangeSender = (event) => {
    setCurrSender(event.target.value)
  }

  const deleteMessage = (idToDelete) => {
    if(window.confirm("Are you sure you want to delete this message?")){
      const newMessages = [...messages]  // precisamos fazer uma cópia para não ferir a regra de estado do react
      
      const indexToDelete = newMessages.findIndex(
        (message) => message.id === idToDelete // retorna um booleano
        // se true, é porque encontrou o item e o findIndex retorna o índice encontrado
        // se false, pula para o próximo item da lista
        // caso encerre a iteração da lista e não encontre o item, retorna -1
    )

      if (indexToDelete > -1) { // se encontrou o item, o índice será sempre maior que -1
        newMessages.splice(indexToDelete, 1)
        setMessages(newMessages)
      }
    }
  }


  const sendMessage = (text) => {
    const newMessage = {
        id: `${currSender}-${Math.ceil(Math.random() * 100000)}`,
        sender: currSender,
        content: text,
        createdAt: new Date()
            .toLocaleTimeString(
                "en-US",
                {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true
                }
            ) // cria uma data no tempo atual
    }

    const newMessages = [...messages, newMessage]
    setMessages(newMessages)
}


  return (
    <PageContainer>
      <SideBarContainer>
        <SideBar senders={senders} currSender={currSender}/>
      </SideBarContainer>
      <AppContainer>
        <ProfileSender senders={senders} currSender={currSender} onChangeSender={onChangeSender}/>
        <Chat messages={messages} senders={senders} deleteMessage={deleteMessage}/>
        <Input sendMessage={sendMessage}/>
      </AppContainer>
      <ProfileContainer>
        <ProfileDetails currSender={currSender}/>
      </ProfileContainer>
    </PageContainer>
  )
}

export default App
