import { Component } from 'react';
import './App.css';

import Weavy from './weavy/Weavy';
import WeavyApp from './weavy/WeavyApp';
// const JwtBuilder = require( 'jwt-builder' );


export default class App extends Component {
  async getJwt() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJteWNsaWVudGlkIiwibmFtZSI6ImFraGlsIiwiZW1haWwiOiJha2hpbG1hbmlsMTIzQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiQWtoaWxAMTIzIiwic3ViIjoibXljbGllbnRpZCIsImNsaWVudF9pZCI6Im15Y2xpZW50aWQiLCJjbGllbnRfc2VjcmV0IjoibXljbGllbnRzZWNyZXQiLCJuYmYiOjE2MzA0MTgwNjcsImV4cCI6MTYzMDQyMTY2N30.zBVKA8R1IFzZWB-EuoFpv2kkxtsYol71wz9okC0sNQY';
  }
  // async getJwt() {

  //   var token = new JwtBuilder()
  //   .WithAlgorithm(new HMACSHA256Algorithm())    
  //   .AddClaim("exp", DateTimeOffset.UtcNow.AddSeconds(60).ToUnixTimeSeconds())    
  //   .AddClaim("iss", "weavy")
  //   .AddClaim("sub", "c134c50a-249b-4b3c-b8b8-158be2219795")
  //   .AddClaim("client_id", "c134c50a-249b-4b3c-b8b8-158be2219795")
  //   .WithSecret("lGXyY/RifcbKKC[_8Bircb[@f]W0BC=c")
  //   .Encode();

  //   return token;
  // }

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
