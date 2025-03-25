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


// CARD CLONE
let cardDuplicate = `
<button class="card">
    <!-- front -->
    <div>
        <p>Lalaalalalallalal</p>
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

for (let index = 0; index < 25; index++) {
    document.querySelector('.top')?.insertAdjacentHTML('beforeend', cardDuplicate);
    console.log('test');
}


// CARD ANIMATION
let cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('rotated');
        console.log('test');
    });
});
