const baseURL = 'https://fdnd.directus.app/';
const endpoint = 'items/women_in_tech';

let startScreen = document.querySelector('.start-screen');
let startWrapper = document.querySelector('.start-wrapper');

let startScreenButton = document.querySelector('.start-screen button');
let carouselWrapper = document.querySelector('.carousel-wrapper');
let carrouselContainer = document.querySelector(".carrouselContainer");

startScreenButton.addEventListener('click', () => {
    startWrapper.classList.add('hidden')
    carouselWrapper.classList.remove('hidden');
});




// De basis url + de specefieke persoon
const MyURL = baseURL + endpoint;

getData(MyURL).then(dataWomen => {
    console.log(dataWomen);

    let allWoman = dataWomen.data;

    // Shuffle the array function
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Shuffle the array
    shuffleArray(allWoman);

    // Select the first 25 random women
    let randomWomen = allWoman.slice(0, 25);
    console.log(randomWomen);

    // Get container in the dom 
    let carrousel = document.querySelector(".carrousel");
    let h3 = document.querySelector("h3");
    let showChozenWomanBtn = document.querySelector("#showChozenWoman");
    let sceneWrapper = document.querySelector('.scene-wrapper');

    randomWomen.forEach(woman => {
        const womanName = woman.name ?? 'No name given';
        const womanWork = woman.work ?? 'No workplace given';
        const womanTagline = woman.tagline ?? 'No tagline given';
        const womanPeriod = woman.period ?? 'No period given';
        const womanCountry = woman.country ?? 'No country given';
        const womanImage = `https://fdnd.directus.app/assets/${woman.image}` ?? 'images/no-image.png';
        const womanWebsite = woman.website ?? 'No website given';
        const womanGithub = woman.github ?? 'No github given';
        const womanCodepen = woman.codepen ?? 'No codepen given';
        const womanCodepenDemo = woman.codepen_demo ?? 'No codepen demo given';


        const womanHTML = `
        <li class="woman" 
            data-name="${womanName.replace(/"/g, '&quot;')}"
            data-work="${womanWork.replace(/"/g, '&quot;')}"
            data-tagline="${womanTagline.replace(/"/g, '&quot;')}"
            data-period="${womanPeriod.replace(/"/g, '&quot;')}"
            data-country="${womanCountry.replace(/"/g, '&quot;')}"
            data-image="${womanImage}"
            data-website="${womanWebsite.replace(/"/g, '&quot;')}"
            data-github="${womanGithub.replace(/"/g, '&quot;')}"
            data-codepen="${womanCodepen.replace(/"/g, '&quot;')}"
            data-codepen-demo="${womanCodepenDemo.replace(/"/g, '&quot;')}"
        >
            <img src="${womanImage}" loading="lazy" alt="${womanName}" />
            <div class="info">
                <h3 class="name">${womanName}</h3>
                <p class="quote">${womanTagline}</p>
                <p class="work"><i class="fa-solid fa-briefcase"></i> ${womanWork}</p>
                <p class="country"><i class="fa-solid fa-earth-europe"></i> ${womanCountry}</p>
                <p class="period">${womanPeriod}</p>
            </div>
        </li>   
    `;

        // CARD CLONE
        let cardDuplicate = `
            <button class="card"
            data-name="${womanName.replace(/"/g, '&quot;')}"
            data-work="${womanWork.replace(/"/g, '&quot;')}"
            data-tagline="${womanTagline.replace(/"/g, '&quot;')}"
            data-period="${womanPeriod.replace(/"/g, '&quot;')}"
            data-country="${womanCountry.replace(/"/g, '&quot;')}"
            data-image="${womanImage}"
            data-website="${womanWebsite.replace(/"/g, '&quot;')}"
            data-github="${womanGithub.replace(/"/g, '&quot;')}"
            data-codepen="${womanCodepen.replace(/"/g, '&quot;')}"
            data-codepen-demo="${womanCodepenDemo.replace(/"/g, '&quot;')}"
            data-chozen="false"
            >
                <!-- front -->
                <div>
                <img src="${womanImage}" />
                </div>
                <!-- back -->
                <div></div>
                <!-- top -->
                <div></div>
                <!-- bottom -->
                <div></div>
                <!-- left -->
                <div></div>
                <!-- right -->
                <div></div>
            </button>
        `;

        document.querySelector('.top')?.insertAdjacentHTML('beforeend', cardDuplicate);


        carrousel.insertAdjacentHTML('beforeend', womanHTML);
    });

    setupCardListeners();

    carrousel.addEventListener('click', (e) => {
        const clickedWoman = e.target.closest('.woman');
        if (clickedWoman) {
            const name = clickedWoman.dataset.name;
            const work = clickedWoman.dataset.work;
            const tagline = clickedWoman.dataset.tagline;
            const period = clickedWoman.dataset.period;
            const country = clickedWoman.dataset.country;
            const image = clickedWoman.dataset.image;
            const website = clickedWoman.dataset.website;
            const Github = clickedWoman.dataset.github;
            const Codepen = clickedWoman.dataset.codepen;
            const CodepenDemo = clickedWoman.dataset.codepenDemo;

            clickedWoman.classList.add('chozenWoman');

            var clickWomanCard = document.querySelector('.card[data-name="' + name + '"]');
            clickWomanCard.dataset.chozen = "true";

            selectWoman(clickedWoman, name, work, tagline, period, country, image, website);
            carrouselContainer.classList.add('hidden');
            carouselWrapper.classList.add('hidden');
            h3.classList.add('hidden');
            showChozenWomanBtn.classList.add('show');
            sceneWrapper.classList.remove('hidden');
        }
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

function selectWoman(obj, womanName, womanWork, womanTagline, womanPeriod, womanCountry, womanImage, womanWebsite) {

    console.log(obj);

    let chozenWomanHTML =
        `<div class="chozenWoman">
        <div class="chozenWomanInfo">
            <img src="${womanImage}" loading="lazy" alt="${womanName}" />
            <div class="info">
                <h3 class="name">${womanName}</h3>
                <small class="quote">${womanTagline}</small>
                <p class="work"><i class="fa-solid fa-briefcase"></i> ${womanWork}</p>
                <p class="country"><i class="fa-solid fa-earth-europe"></i> ${womanCountry}</p>
                <p class="period">${womanPeriod}</p>
            </div>
        </div>
    `;

    let sidebar = document.querySelector(".sideBar");

    sidebar.insertAdjacentHTML('beforeend', chozenWomanHTML);

    let showChozenWomanBtn = document.querySelector("#showChozenWoman");
    showChozenWomanBtn.addEventListener('click', () => {
        let chozenWomanElement = document.querySelector('.chozenWoman');
        if (chozenWomanElement) {
            chozenWomanElement.classList.toggle('active');
            showChozenWomanBtn.classList.toggle('active');
        }
    });
}