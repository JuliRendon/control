'use strict';

/* Escribe una función que devuelva un array de usuarios. De cada usuario guardaremos el username, 
el nombre y apellido, el sexo, el país, el email y un enlace a su foto de perfil.

El número de usuarios a obtener se debe indicar con un parámetro de dicha función.

Sírvete de la API: https://randomuser.me/ */

async function getUsers(numUser) {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?results=${numUser}`
    );
    const users = await response.json();
    let usersList = [];
    for (const user of users.results) {
      usersList.push({
        username: user.login.username,
        name: user.name.first + ` ` + user.name.last,
        gender: user.gender,
        country: user.location.country,
        email: user.email,
        photo: user.picture.medium,
      });
    }
    console.log(usersList);
  } catch (error) {
    console.log('Se ha presentado un error ' + error);
  }
}

getUsers(5);
