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

//==============================================================================

//using Promise.all()
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then( responses => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch( error => {
    console.error(`Failed to fetch: ${error}`)
  });


//mine

const fetchPromise1 = fetch('url')
const fetchPromise2 = fetch('url')
const fetchPromise3 = fetch('url')
  


Promise.all([fetchPromise1,fetchPromise2,fetchPromise3]) 
  .then( responses => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch( error => {
    console.error(`Failed to fetch ${error}`)
  });


  //===============================================================================
  //Async await in depth
  async function fetchProducts() {
    try {
      // after this line, our function will wait for the `fetch()` call to be settled
      // the `fetch()` call will either return a Response or throw an error
      const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      // after this line, our function will wait for the `response.json()` call to be settled
      // the `response.json()` call will either return the JSON object or throw an error
      const json = await response.json();
      console.log(json[0].name);
    }
    catch(error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  
  fetchProducts();


  //mine

  async function fetchProducts(){
    try {
      const response = await fetch(url)
      if (!response.ok){
        throw new Error(`HTTP error: ${response.status}`);
      }
      const json = await response.json();
      console.log(json[0].name)
    } 
    catch(error) {
      console.error(`Could not get products: ${error}`);
    }
  }

  fetchProducts();