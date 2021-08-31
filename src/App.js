import { Component } from 'react';
import './App.css';

import Weavy from './weavy/Weavy';
import WeavyApp from './weavy/WeavyApp';
// const JwtBuilder = require( 'jwt-builder' );


export default class App extends Component {
  async getJwt() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJteWNsaWVudGlkIiwibmFtZSI6ImFrc2hheSIsInBhc3N3b3JkIjoiYWtzaGF5QDk3Iiwic3ViIjoibXljbGllbnRpZCIsImNsaWVudF9pZCI6Im15Y2xpZW50aWQiLCJjbGllbnRfc2VjcmV0IjoibXljbGllbnRzZWNyZXQiLCJuYmYiOjE2MzA0MjE2MDAsImV4cCI6MTY2MTk1ODc3Mn0.mAZERMOUvpxcmz3B057XZYsH6OYy23VLw7A9xeCHA1s';
  }

  render() {
    return (
      <Weavy jwt={this.getJwt}>
        <div className="App">
          <WeavyApp
            spaceKey="react-space"
            spaceName="React Space"
            appKey="react-files"
            appName="React Files"
            appType="files"
            />
        </div>
      </Weavy>
    );
  }
}
