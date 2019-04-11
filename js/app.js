"use strict";

function person4NameReqListener () {
  let convert = JSON.parse(this.responseText);
  person4Name.innerHTML = convert.name;
};

const person4NameReq = new XMLHttpRequest();
person4NameReq.addEventListener('load', person4NameReqListener);
person4NameReq.open('GET', 'https://swapi.co/api/people/4/');
person4NameReq.send();

