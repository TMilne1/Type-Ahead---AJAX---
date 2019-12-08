const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


    const cities = []
    fetch(endpoint)                // fetch data from url - get promise
        .then((prom) => prom.json() ) //use the json methond of the promise to get another promise which can be turned into a json object  
       .then((jsonObjs) =>  {cities.push(...jsonObjs)}  )           //use the spread operate to split the arguments into array

function findMatch(match, cities){
    const regex = new RegExp(match,'gi');
     return cities.filter((place)=>{
         return place.city.match(regex) || place.state.match(regex)
    })
}



 