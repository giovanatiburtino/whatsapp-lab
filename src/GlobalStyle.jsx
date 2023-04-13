import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html{
        font-family: 'Roboto', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // #root{
    //     display: flex;
    //     justify-content: center;
    // }
`

export const PageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 600px 1fr;
    grid-template-rows: 100vh;
`


export const AppContainer = styled.div`
    display: grid;
    grid-column: 2/3;
    display:flex;
    flex-grow: 1;
    flex-direction: column;
`

export const SideBarContainer = styled.div`
    display: grid;
    grid-column: 1/2;
`

export const ProfileContainer = styled.div`
    display: grid;
    grid-column: 3/3;
`

