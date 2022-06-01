document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.getElementById('searchbar').value
    try{
        const response = await fetch(`https://simple-rapper-api.herokuapp.com/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.getElementById('birthName').innerText = data.birthName
        document.getElementById('origin').innerText = data.origin
        document.getElementById('genre').innerText =  data.genre
        document.getElementById('activeYears').innerText = data.yearsActive

    } catch(error){
        console.log(error)
    }
}