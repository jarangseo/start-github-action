import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
background-color: #61dafb;
color: white;
padding:10px;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StyledDiv>
          <h1>START GITHUB ACTION FOR REACT + CLOUD FRONT</h1>
          <logo/>
        </StyledDiv>
      </header>
    </div>
  );
}

export default App;