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
                    <p class="quote">${womanTagline}</p>
                    <p class="work"><i class="fa-solid fa-briefcase"></i> ${womanWork}</p>
                    <p class="country"><i class="fa-solid fa-earth-europe"></i> ${womanCountry}</p>
                    <p class="period">${womanPeriod}</p>
                    <ul>
                        <li><a href="${womanWebsite}" target="_blank">Website</a></li>
                        <li><a href="${womanGithub}" target="_blank">Github</a></li>
                        <li><a href="${womanCodepen}" target="_blank">Codepen</a></li>
                        <li><a href="${womanCodepenDemo}" target="_blank">Codepen demo</a></li>
                    </ul>
                </div>
            </div>
        `;

        let winText = `
        <h1><span>🎉</span> You won! <span>🎉</span></h1>`;

        let loseText = `
        <h1><span>😢</span> You lost! <span>😢</span></h1>`;

        let restartButton = `
            <button class="restart" onclick="window.location.reload();">Restart</button>
        `;

        card.addEventListener('click', () => {
            card.classList.toggle('rotated');
            console.log('Card clicked');

            if (card.dataset.chozen == "true") {
                document.querySelector('section.scene').remove();

                document.querySelector('div.scene-wrapper.wrapper').style.flexDirection = 'column';

                document.querySelector('div.scene-wrapper.wrapper').insertAdjacentHTML('beforeend', loseText);
                document.querySelector('div.scene-wrapper.wrapper').insertAdjacentHTML('beforeend', restartButton);
            }

            // Check if ALL chosen cards have the "rotated" class
            let allChosenCards = document.querySelectorAll('[data-chozen="false"]');
            let allRotated = Array.from(allChosenCards).every(c => c.classList.contains('rotated'));

            if (allRotated) {
                document.querySelector('section.scene').remove();

                document.querySelector('div.scene-wrapper.wrapper').style.flexDirection = 'column';

                document.querySelector('div.scene-wrapper.wrapper').insertAdjacentHTML('beforeend', winText);
                document.querySelector('div.scene-wrapper.wrapper').insertAdjacentHTML('beforeend', restartButton);
            }
        });

        card.addEventListener('mouseover', () => {
            console.log('Mouse over');

            const infoDiv = article.querySelector('.card-info');
            if (infoDiv) {
                infoDiv.remove();
                console.log('Mouse left, info removed');
            }

            if (!article.querySelector('.card-info')) {
                article.insertAdjacentHTML('beforeend', articleHTML);
                console.log('Hovered, info added');
            }
        });
        card.addEventListener('focus', () => {
            console.log('Mouse over');

            const infoDiv = article.querySelector('.card-info');
            if (infoDiv) {
                infoDiv.remove();
                console.log('Mouse left, info removed');
            }

            if (!article.querySelector('.card-info')) {
                article.insertAdjacentHTML('beforeend', articleHTML);
                console.log('Hovered, info added');
            }
        });
    });


}