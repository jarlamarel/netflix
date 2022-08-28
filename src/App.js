import React from 'react';
import Row from './Components/Row';
import requests from './requests';
import"./App.css";
import'./Components/row.css'
import Banner from './Components/Banner';
import Nav from './Components/Nav'
import './Components/Nav.css';
const App = () => {
  return (
    <div className='App'>
    
      <Banner/>
      <br></br>
      <br></br>
      <br></br>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginal} isLargeRow ></Row>
      <Row title="trending now"fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated"fetchUrl={requests.fetchTopRated}></Row>
      <Row title="film Action"fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="film Comedie"fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="film d'Horreur "fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies"fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaire"fetchUrl={requests.fetchDocument}></Row>
      </div>
  );
};

export default App;