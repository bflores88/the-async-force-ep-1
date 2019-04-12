'use strict';

function person4ReqListener() {
  let convert = JSON.parse(this.responseText);
  person4Name.innerHTML = convert.name;

  let homeworld = convert.homeworld;

  person4HomeWorldReq.open('GET', homeworld);
  person4HomeWorldReq.send();
}

const person4NameReq = new XMLHttpRequest();
person4NameReq.addEventListener('load', person4ReqListener);
person4NameReq.open('GET', 'https://swapi.co/api/people/4/');
person4NameReq.send();

function person4HomeWorldReqListener() {
  let convertHome = JSON.parse(this.responseText);
  person4HomeWorld.innerHTML = convertHome.name;
}

const person4HomeWorldReq = new XMLHttpRequest();
person4HomeWorldReq.addEventListener('load', person4HomeWorldReqListener);

function person14ReqListener() {
  let convert = JSON.parse(this.responseText);
  person14Name.innerHTML = convert.name;

  let species = convert.species.toString();
  person14SpeciesReq.open('GET', species);
  person14SpeciesReq.send();
}

const person14NameReq = new XMLHttpRequest();
person14NameReq.addEventListener('load', person14ReqListener);
person14NameReq.open('GET', 'https://swapi.co/api/people/14/');
person14NameReq.send();

function person14SpeciesReqListener() {
  let convertSpecies = JSON.parse(this.responseText);
  person14Species.innerHTML = convertSpecies.name;
}

const person14SpeciesReq = new XMLHttpRequest();
person14SpeciesReq.addEventListener('load', person14SpeciesReqListener);

function filmListReqListener() {
  let convert = JSON.parse(this.responseText);
  let filmArr = convert.results;

  filmArr.forEach((element) => {
    let newFilm = document.createElement('li');
    newFilm.className = 'film';
    filmList.appendChild(newFilm);

    let newTitle = document.createElement('h2');
    newTitle.className = 'filmTitle';
    newTitle.innerHTML = element.title;
    newFilm.appendChild(newTitle);

    let planetUL = document.createElement('ul');
    planetUL.className = 'filmPlanets';
    newFilm.appendChild(planetUL);

    let planetArr = element.planets;

    for (let j = 0; j < planetArr.length; j++) {
      let planetReq = new XMLHttpRequest();
      planetReq.addEventListener('load', planetReqListener);
      planetReq.open('GET', planetArr[j]);
      planetReq.send();

      function planetReqListener() {
        let planetObject = JSON.parse(this.responseText);
        let planetName = planetObject.name;

        let planetLi = document.createElement('li');
        planetLi.className = 'planet';
        planetUL.appendChild(planetLi);

        let planetH4 = document.createElement('h4');
        planetH4.className = 'planetName';
        planetH4.innerHTML = planetName;
        planetLi.appendChild(planetH4);
      }
    }
  });
}

const filmListReq = new XMLHttpRequest();
filmListReq.addEventListener('load', filmListReqListener);
filmListReq.open('GET', 'https://swapi.co/api/films/');
filmListReq.send();
