/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Votes from './Votes.jsx';

const axios = require('axios');


const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Amazon Ember";
  src: url("https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIFont-amazonember_rg-cc7ebaa05a2cd3b02c0929ac0475a44ab30b7efa._V2_.woff2");
}
@font-face {
  font-family: "Amazon Ember";
  font-weight: 700;
  src: url("https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIFont-amazonember_bd-46b91bda68161c14e554a779643ef4957431987b._V2_.woff2");
}
`;
const Wrapper = styled.div`
  font-size: 13px;
  line-height: 19px;
  color: #111;
  font-family: "Amazon Ember",Arial,sans-serif;
`;



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    const id = window.location.pathname.slice(1, -1);
    axios.get(`/questions/${id}`)
      .then((response) => {
        // console.log(response.data);
        this.setState({ questions: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { questions } = this.state;
    return (
      <Wrapper>
        <Votes data={questions} />
      </Wrapper>
    );
  }
}

export default App;
