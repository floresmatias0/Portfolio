import React from 'react';
import styles from '../../styles/Projects.module.css'
import animaniac from '../../assets/img/animaniacs.gif';
import pokemon from '../../assets/img/pokemon.gif';
import ombdMovies from '../../assets/img/ombdMovies.gif';
import wheater from '../../assets/img/wheater-app.gif'
import Nav from '../Nav/Nav'

const Projects = () => {

    var proyect = [animaniac,pokemon,wheater,ombdMovies]
  
    const animaniacLink = () => window.open('http://104.236.92.12/') 
    const pokemonLink = () => window.open('http://159.89.44.205/') 
    const wheaterLink = () => window.open('https://floresmatias0.github.io/weather-app/')
    const ombdMoviesLink = () => window.open('https://floresmatias0.github.io/ombdMovies/')
  
    const handleChangeOne = () => {
      document.getElementById('slider').src=`${proyect[0]}`; 
      document.getElementById('link').onclick=animaniacLink;
    }
    const handleChangeTwo = () => {
      document.getElementById('slider').src=`${proyect[1]}`; 
      document.getElementById('link').onclick=pokemonLink;
    }
    const handleChangeThree = () => {
      document.getElementById('slider').src=`${proyect[2]}`; 
      document.getElementById('link').onclick=wheaterLink;
    }
    const handleChangeFour = () => {
      document.getElementById('slider').src=`${proyect[3]}`; 
      document.getElementById('link').onclick=ombdMoviesLink;
    }
  
    return (
      <div className={styles.container}>
        <Nav/>
          <div className={styles.slider}>
            <ul>
              <li>
                <h2>My projects</h2>
                <img id='slider' src={proyect[0]} alt='gif'/>
                <h3 id='link' className={styles.pages} onClick={animaniacLink}>Go page</h3>
              </li>
            </ul>
            <ul className={styles.buttons}>
              <button onClick={handleChangeOne}>1</button>
              <button onClick={handleChangeTwo}>2</button>
              <button onClick={handleChangeThree}>3</button>
              <button onClick={handleChangeFour}>4</button>
            </ul>
          </div>
      </div>
    );
  }
  
export default Projects;