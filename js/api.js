const baseURL = 'https://fdnd.directus.app/';
const endpoint = 'items/women_in_tech';

// De basis url + de specefieke persoon
const MyURL = baseURL + endpoint;

getData(MyURL).then(dataWomen => {
    console.log(dataWomen);

    let allWoman = dataWomen.data;

    // Get container in the dom 
    let everybodySection = document.querySelector(".womanContainer");

    allWoman.forEach(woman => {

        // Person variables
        womanName = woman.name;
        womanWork = woman.work;
        womanTagline = woman.tagline;
        womanPeriod = woman.period;
        womanCountry = woman.country;
        womanImage = 'https://fdnd.directus.app/assets/' + woman.image;
        womanWebsite = woman.website;

        /*
        womanInfo = [womanName, womanWork, womanTagline, womanPeriod, womanCountry, womanImage, womanWebsite];

        for (let info = 0; info < womanInfo.length; info++) {
            const infoElement = womanInfo[info];

            if(infoElement == null) {
                infoElement = 'Geen waarde gegeven';
            }
            
        }
            */

        let womanHTML =  
        `<article>
            <img src="${womanImage}" loading="lazy" alt="${womanName}" />
            <div class="info">
                <h3 class="name">${womanName}</h3>
                <small class="quote">${womanTagline}</small>
                <p class="work"><i class="fa-solid fa-briefcase"></i> ${womanWork}</p>
                <p class="country"><i class="fa-solid fa-earth-europe"></i> ${womanCountry}</p>
                <p class="period">${womanPeriod}</p>
                <a href="${womanWebsite}" aria-label="de website van ${womanName}">More information <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </article>`;

        everybodySection.insertAdjacentHTML('beforeend', womanHTML);
    });
});

// Get Json data 
async function getData(URL) {
    return (
        fetch(URL)
            .then(response => response.json())
            .then(jsonData => { return jsonData })
    );
}