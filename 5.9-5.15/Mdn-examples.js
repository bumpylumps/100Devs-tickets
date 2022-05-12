// this is a place to type out fetch APIs while learning with MDN


//the fetch() api
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

fetchPromise.then( response => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request...");


//mine

const fetchPromise = fetch(url);

console.log(fetchPromise)

fetchPromise.then( response => {
    console.log(`Received response: ${response.status}`);
});

console.log("Started request...");

//===============================================================

//Chaining promises

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise.then( response => {
  const jsonPromise = response.json();
  jsonPromise.then( json => {
    console.log(json[0].name);
  });
});



// mine

const fetchPromise = fetch(url);

fetchPromise.then( response => {
    const jsonPromise = response.json();
    jsonPromise.then( json => {
        console.log(json[0].name);
    });
});




//===================================================================

//proper chain
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then( response => {
    return response.json();
  })
  .then( json => {
    console.log(json[0].name);
  });


  //mine

  fetchPromise
    .then( response => {
        return response.json();
    })
    .then( json => {
        console.log(json[0].name);
    });

    //====================================================================

    //errors
    const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( json => {
    console.log(json[0].name);
  });


  //mine

  const fetchPromise = fetch(url)

  fetchPromise
    .then( response => {
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`)
        }
        return response.json();
    })
    .then( json => {
        console.log(json[0].name)
    });



//=================================================================================

// proper fetch organization with catch()
const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( json => {
    console.log(json[0].name);
  })
  .catch( error => {
    console.error(`Could not get products: ${error}`);
  });



  //mine

  const fetchPromise = fetch(url)

  fetchPromise
    .then( response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then( json => {
        console.log(json[0].name);
    })
    .catch( error => {
        console.error(`Could not get products: ${error}`);
    });


    