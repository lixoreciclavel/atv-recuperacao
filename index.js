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
      // document.querySelector('#followers').src = object.
    })
    .catch(function(error) {
      console.log('Ocorreu um erro:', error);
    });
  

  fetch('https://api.github.com/users/lixoreciclavel/followers')
  .then(function(moots){
    return moots.json();
  })
  .then(function(array){
    console.log(array)
    document.querySelector('#followers').src = array[1].avatar_url;
    document.querySelector('#followers1').src = array[2].avatar_url;
    document.querySelector('#followers2').src = array[4].avatar_url;
    document.querySelector('#followers3').src = array[6].avatar_url;
    document.querySelector('#followers4').src = array[3].avatar_url;
    document.querySelector('#followers5').src = array[9].avatar_url;

    document.querySelector('#amg').textContent = array[1].login;
    document.querySelector('#amg1').textContent = array[2].login;
    document.querySelector('#amg2').textContent = array[4].login;
    document.querySelector('#amg3').textContent = array[6].login;
    document.querySelector('#amg4').textContent = array[3].login;
    document.querySelector('#amg5').textContent = array[9].login;
    
  })
  .catch(function(ruin){
    console.log('deu foi merda:', ruin)
  });
})
