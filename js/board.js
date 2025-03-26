// SLIDER
const ranges = document.querySelectorAll('[type="range"]');

const updateRange = range => {
    const rangeName = range.name;
    const rangeValue = range.value;

    document.documentElement.style.setProperty("--" + rangeName, rangeValue);
}

ranges.forEach(range => {
    updateRange(range);

    range.oninput = () => {
        updateRange(range)
    };
});




function setupCardListeners() {
    let topContainer = document.querySelector('.top');
    let cards = topContainer.querySelectorAll('.card'); 
    let article = document.querySelector('article');
    let extraInfoContainer = document.querySelector('.extraInfoContainer'); 

    cards.forEach(card => {
        const womanImage = card.dataset.image; 
        const womanName = card.dataset.name;
        const womanWork = card.dataset.work;
        const womanTagline = card.dataset.tagline;
        const womanPeriod = card.dataset.period;
        const womanCountry = card.dataset.country;
        const womanWebsite = card.dataset.website;
        const womanGithub = card.dataset.github;
        const womanCodepen = card.dataset.codepen;
        const womanCodepenDemo = card.dataset.codepenDemo;

        const articleHTML = `
            <div class="card-info">
                <img src="${womanImage}" loading="lazy" alt="${womanName}" />
                <div class="info">
                    <h3 class="name">${womanName}</h3>
                    <small class="quote">${womanTagline}</small>
                    <p class="work"><i class="fa-solid fa-briefcase"></i> ${womanWork}</p>
                    <p class="country"><i class="fa-solid fa-earth-europe"></i> ${womanCountry}</p>
                    <p class="period">${womanPeriod}</p>
                    <button>More info</button>
                </div>
            </div>
        `;

            var extraInfo = `
                <div class="extraInfo">
                    <p>Extra info</p>
                    <ul>
                    <li><a href="${womanWebsite}" target="_blank">Website</a></li>
                    <li><a href="${womanGithub}" target="_blank">Github</a></li>
                    <li><a href="${womanCodepen}" target="_blank">Codepen</a></li>
                    <li><a href="${womanCodepenDemo}" target="_blank">Codepen demo</a></li>
                    </ul>
                </div>
            `;
        

        card.addEventListener('click', () => {
            card.classList.toggle('rotated');
            console.log('Card clicked');
        });

        card.addEventListener('mouseover', () => {
            const infoDiv = article.querySelector('.card-info');
            const extraInfoDiv = extraInfoContainer.querySelector('.extraInfo');
            if (infoDiv) {
                infoDiv.remove();
                extraInfoDiv.remove();
                console.log('Mouse left, info removed');
            }

            if (!article.querySelector('.card-info')) {
                article.insertAdjacentHTML('beforeend', articleHTML);
                extraInfoContainer.insertAdjacentHTML('beforeend', extraInfo);
                console.log('Hovered, info added');
            }
        });
    });


}


