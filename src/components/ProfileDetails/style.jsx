import styled from "styled-components";

export const ContactInfoWindow = styled.div`
    
    .contact-info-window-header{
        display: flex;
        margin: 30px;

        p{
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            color: #000000;
            padding-left: 10px;
        }
    
        img{
            width: 15px;
            height: 15px;
            cursor: pointer;
        }
    }


    .contact-info-profile-image{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 40px;

        img{
            width: 100px;
            border-radius: 100px;
        }

        h3{
            font-weight: 700;
            font-size: 22px;
            line-height: 26px;
            padding-top: 20px;
        }

        p{
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            color: #B9BEC4;
            padding-top: 5px;
        }   
    }

    .contact-info-action-button{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
        gap: 10px;

        button{
            border-radius: 50%;
            width: 38px;
            height: 38px;
            border: none;
            background-color: #F8F8F8;

            display: flex;
            align-items: center;
            justify-content: center;

            :hover{
                cursor: pointer;
                filter: brightness(0.95)
            }

            :active{
                filter: brightness(0.85)
            }
        }
    }

    .contact-info-about{
        padding: 20px;

        h3{
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            padding-bottom: 10px;
        }

        p{
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #A2A2A2;
        }
    }

    .contact-media{
        padding-left: 20px;

        h3{
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            padding-bottom: 10px;
        }

        .contact-media-images{
            display: flex;
            gap: 10px;
        }
    }


    .contact-notifications{
        padding: 20px;
        display: flex;
        justify-content: space-between;

        h3{
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            padding-bottom: 10px;
        }

        img{
            cursor: pointer;
        }
    }

    .contact-notifications-message{
        padding-left: 20px;
        padding-bottom: 20px;

        h3{
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            padding-bottom: 10px;
        }

        p{
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #A2A2A2;
        }
    }

    .contact-caution-buttons{
        padding-left: 20px;
        padding-bottom: 10px;
        display: flex;
        gap: 10px;
        cursor: pointer;
    }
`