const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities =[];
const inputSearch = document.querySelector('.search');
const list = document.querySelector('.suggestions');

const fet = fetch(endpoint)
    .then(blob =>blob.json())
    .then(data =>cities.push(...data));
    
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function displayMatches(){
    const matchArray =  matches(this.value,cities);
    const html = matchArray.map(match =>{
        const regex = new RegExp(this.value,'gi')
        const cityName = match.city.replace(regex , `<span class = "hl">${this.value}</span>`);
        const stateName = match.state.replace(regex , `<span class = "hl">${this.value}</span>`);
        return `
        <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(match.population)}</span>        </li>
        `;
        }).join('');
        list.innerHTML = html;
}

function matches(wordToMatch,cities){
        return cities.filter(place =>{
                const regex = new RegExp(wordToMatch, 'gi');
                return place.city.match(regex) || place.state.match(regex);
        });
}
    
inputSearch.addEventListener('change',displayMatches);
inputSearch.addEventListener('keyup',displayMatches);