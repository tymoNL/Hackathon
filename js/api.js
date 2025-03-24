const baseURL = 'https://fdnd.directus.app/';
const endpoint = 'items/women_in_tech';

// De basis url + de specefieke persoon
const MyURL = baseURL + endpoint;

getData(MyURL).then(dataWomen => {
    console.log(dataWomen);
});

// Get Json data 
async function getData(URL) {
    return (
        fetch(URL)
            .then(response => response.json())
            .then(jsonData => { return jsonData })
    );
}