import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import NabBar from "../components/organisms/NabBar";
import EventContent from "../components/organisms/EventContent";

interface AppProps {

}

interface AppState {

}

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

class App extends React.Component<AppProps, AppState> {
    public constructor(props: AppProps) {
        super(props);
    }

    public render() {
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
}

export default App
//
// const mapStateToProps = (state: RootState, ownProps: object) => {
// };
//
// const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);