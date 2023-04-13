import styled from "styled-components";

export const SideBarHeader = styled.div`
    margin-top: 20px;


    .input{
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        justify-content: center;
    }

    h3{
        padding-left: 20px;
        padding-bottom: 10px;
        font-style: 700;
        font-size: 14px;
        line-height: 16px;
    }

    .side-bar-details{
        display: flex;
        justify-content: space-between;
    }

    .side-bar-details-signs{
        display: flex;
        gap: 5px;
        padding-left: 20px;
    }

    .side-bar-details-tools{
        display: flex;
        gap: 10px;
        padding-right: 20px;
    }
`

export const Status = styled.div`
    display: flex;
    align-items: center;
`

export const TypeConversation = styled.div`
    display: flex;
    margin-top: 30px;
    margin-bottom: 10px;
    
    #all-chats{
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        padding-left: 20px;
    }

    #private-conversation{
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: #BEBEBE;
        padding-left: 20px;
    }
`

export const ChatSelection = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 20px;

    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .chat-selection-details{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .chat-identification{
        display: flex;
        align-items: center;
        justify-content: space-between;

        p{
            padding-left: 8px;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
        }

        span{
            padding-right: 10px;
            font-weight: 500;
            font-size: 11px;
            line-height: 13px;
            color: #727272;
        }
    }

    .chat-message{
        p{
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #8A8A8A;
            padding-left: 8px;
        }
    }


    :hover{
        background-color: #F1F4F6;
        cursor: pointer;
    }
`

export const ChatSelected = styled.div`
    width: 100%;
    height: 70px;
    background-color: #F1F4F6;
    display: flex;
    align-items: center;
    padding-left: 20px;

    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .chat-selection-details{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .chat-identification{
        display: flex;
        align-items: center;
        justify-content: space-between;

        p{
            padding-left: 8px;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
        }

        span{
            padding-right: 10px;
            font-weight: 500;
            font-size: 11px;
            line-height: 13px;
            color: #727272;
        }
    }

    .chat-message{
        p{
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #8A8A8A;
            padding-left: 8px;
        }
    }
`

export const Online = styled.div`
    position: absolute;
    width: 12px;
    height: 12px;
    background: #36CE00;
    border-radius: 12px;
    border: 2px solid white;
    top: 330px;;
    left: 60px;
`


export const OfflineSign = styled.div`
    background-color: #EC6A5F;
    width: 10px;
    height: 10px;
    border-radius: 10px;
`

export const AusenteSign  = styled.div`
    background: #F4BF4F;
    width: 10px;
    height: 10px;
    border-radius: 10px;
`

export const OnlineSign = styled.div`
    background: #36CE00;
    width: 10px;
    height: 10px;
    border-radius: 10px;
`