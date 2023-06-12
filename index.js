window.addEventListener('DOMContentLoaded', ()=>{
    fetch('https://api.github.com/users/lixoreciclavel')
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {

      console.log(object)
      document.querySelector('#title').textContent = object.login;
      document.querySelector('#name').textContent = object.name;
      document.querySelector('#bio').textContent = object.bio;
      document.querySelector('#description').src = object.avatar_url
    })
    .catch(function(error) {
      console.log('Ocorreu um erro:', error);
    });
  })

