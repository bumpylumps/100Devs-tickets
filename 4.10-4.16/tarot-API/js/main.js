
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://rws-cards-api.herokuapp.com/api/v1/cards/random'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('h2').innerText = data.cards[0].name
        document.querySelector('h3').innerText = data.cards[0].meaning_up
        if(data.cards[0].name === "The Moon"){
        document.querySelector('img').src = 'img/moon.jpg'
        }
        

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}