/*The user will enter a cocktail. 
Get a cocktail name, photo, and 
instructions and place them in the DOM
*/

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value


    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
.then(res => res.json())
.then(data => {
    console.log(data.drinks[0])
    document.querySelector('h2').innerText = data.drinks[0].strDrink
    document.querySelector('img').src = data.drinks[0].strDrinkThumb
    document.getElementById('instructions').innerText = data.drinks[0].strInstructions
    
    
    //ingredients section
    document.getElementById('ingredients').innerText = `${data.drinks[0].strIngredient1} - ${data.drinks[0].strMeasure1}`
    document.getElementById('ingredients').innerText += `\n ${data.drinks[0].strIngredient2} - ${data.drinks[0].strMeasure2}`
    
    if(data.drinks[0].strIngredient3 !== null || data.drinks[0].strMeasure3 !== null ){
        document.getElementById('ingredients').innerText += `\n ${data.drinks[0].strIngredient3} - ${data.drinks[0].strMeasure3}`
    } 
    if(data.drinks[0].strIngredient4 !== null || data.drinks[0].strMeasure4 !== null){
        document.getElementById('ingredients').innerText += `\n ${data.drinks[0].strIngredient4} - ${data.drinks[0].strMeasure4}`
    } 
    
    if(data.drinks[0].strIngredient5 !== null || data.drinks[0].strMeasure5 !== null){
        document.getElementById('ingredients').innerText += `\n ${data.drinks[0].strIngredient5} - ${data.drinks[0].strMeasure5}`
    } 

    if(data.drinks[0].strIngredient6 !== null || data.drinks[0].strMeasure6 !== null){
        document.getElementById('ingredients').innerText += `\n ${data.drinks[0].strIngredient6} - ${data.drinks[0].strMeasure6}`
    } 

    if(data.drinks[0].strIngredient7 !== null || data.drinks[0].strMeasure7 !== null){
        document.getElementById('ingredients').innerText += `\n ${data.drinks[0].strIngredient7} - ${data.drinks[0].strMeasure7}`
    } 

    if(data.drinks[0].strIngredient8 !== null || data.drinks[0].strMeasure8 !== null){
        document.getElementById('ingredients').innerText += `\n ${data.drinks[0].strIngredient8} - ${data.drinks[0].strMeasure8}`
    } 
    

    //glass type
    document.getElementById('glass').innerText = data.drinks[0].strGlass
})
.catch(err => {
    console.log(`Error ${err}`)
})
}

//Array for ingredients
let ingredientsArray = []

