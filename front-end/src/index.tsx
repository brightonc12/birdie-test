import React from 'react';
import ReactDOM from 'react-dom'

import EventContent from "./components/organisms/EventContent";
import NabBar from "./components/organisms/NabBar";
import styled, {createGlobalStyle} from "styled-components";
import {Provider} from "react-redux";
import store from './store/store'


const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    font-family: sans-serif;
    background-color: #F9F9F9;
    padding: 0;
    width: 100%;
    margin: 0;

    > div {
      height: 100%;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: #00254D
  }
`;

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const App = () => {
    return (
            <>
                <GlobalStyle/>
                <Wrapper>
                    <NabBar/>
                    <EventContent/>
                </Wrapper>
            </>
        );

}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)