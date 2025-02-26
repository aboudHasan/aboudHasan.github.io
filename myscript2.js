let heroes = [
    { name: "Ana", role: "Support", species: "Human", gender: "Female", compPlaystyle: "Dive", releaseYear: 2016, img: "images/Ana.png"},
    { name: "Ashe", role: "DPS", species: "Human", gender: "Female", compPlaystyle: "Poke", releaseYear: 2018, img: "images/Ashe.png" },
    { name: "Baptiste", role: "Support", species: "Human", gender: "Male", compPlaystyle: "Brawl", releaseYear: 2019, img: "images/Baptiste.png" },
    { name: "Bastion", role: "DPS", species: "Omnic", gender: "Male", compPlaystyle: "Brawl", releaseYear: 2016, img: "images/Bastion.png" },
    { name: "Brigitte", role: "Support", species: "Human", gender: "Female", compPlaystyle: "Dive", releaseYear: 2018, img: "images/Brigitte.png" },
    { name: "Cassidy", role: "DPS", species: "Human", gender: "Male", compPlaystyle: "Brawl", releaseYear: 2016, img: "images/Cassidy.png" },
    { name: "D.Va", role: "Tank", species: "Human", gender: "Female", compPlaystyle: "Dive", releaseYear: 2016, img: "images/DVa.png" },
    { name: "Doomfist", role: "Tank", species: "Cyborg", gender: "Male", compPlaystyle: "Dive", releaseYear: 2017, img: "images/Doomfist.png" },
    { name: "Echo", role: "DPS", species: "Omnic", gender: "Female", compPlaystyle: "Dive", releaseYear: 2020, img: "images/Echo.png" },
    { name: "Genji", role: "DPS", species: "Cyborg", gender: "Male", compPlaystyle: "Dive", releaseYear: 2016, img: "images/Genji.png" },
    { name: "Hanzo", role: "DPS", species: "Human", gender: "Male", compPlaystyle: "Poke", releaseYear: 2016, img: "images/Hanzo.png" },
    { name: "Hazard", role: "Tank", species: "Cyborg", gender: "Male", compPlaystyle: "Dive", releaseYear: 2024, img: "images/Hazard.png"},
    { name: "Illari", role: "Support", species: "Human", gender: "Female", compPlaystyle: "Poke", releaseYear: 2023, img: "images/Illari.png" },
    { name: "Junker Queen", role: "Tank", species: "Human", gender: "Female", compPlaystyle: "Brawl", releaseYear: 2022, img: "images/Junker_Queen.png" },
    { name: "Junkrat", role: "DPS", species: "Human", gender: "Male", compPlaystyle: "Brawl", releaseYear: 2016, img: "images/Junkrat.png" },
    { name: "Juno", role: "Support", species: "Human", gender: "Female", compPlaystyle: "Brawl", releaseYear: 2024, img:"images/Juno.png" },
    { name: "Kiriko", role: "Support", species: "Human", gender: "Female", compPlaystyle: "Dive", releaseYear: 2022, img:"images/Kiriko.png" },
    { name: "Lifeweaver", role: "Support", species: "Human", gender: "Male", compPlaystyle: "Poke", releaseYear: 2023, img:"images/Lifeweaver.png" },
    { name: "Lucio", role: "Support", species: "Human", gender: "Male", compPlaystyle: "Dive", releaseYear: 2016, img: "images/Lucio.png" },
    { name: "Mauga", role: "Tank", species: "Cyborg", gender: "Male", compPlaystyle: "Brawl", releaseYear: 2023, img:"images/Mauga.png" },
    { name: "Mei", role: "DPS", species: "Human", gender: "Female", compPlaystyle: "Brawl", releaseYear: 2016, img: "images/Mei.png" },
    { name: "Mercy", role: "Support", species: "Human", gender: "Female", compPlaystyle: "Poke", releaseYear: 2016, img: "images/Mercy.png" },
    { name: "Moira", role: "Support", species: "Other", gender: "Female", compPlaystyle: "Brawl", releaseYear: 2017, img: "images/Moira.png" },
    { name: "Orisa", role: "Tank", species: "Omnic", gender: "Female", compPlaystyle: "Brawl", releaseYear: 2017, img: "images/Orisa.png" },
    { name: "Pharah", role: "DPS", species: "Human", gender: "Female", compPlaystyle: "Dive", releaseYear: 2016, img: "images/Pharah.png" },
    { name: "Ramattra", role: "Tank", species: "Omnic", gender: "Male", compPlaystyle: "Brawl", releaseYear: 2022, img: "images/Ramattra.png" },
    { name: "Reaper", role: "DPS", species: "Other", gender: "Male", compPlaystyle: "Dive", releaseYear: 2016, img: "images/Reaper.png" },
    { name: "Reinhardt", role: "Tank", species: "Human", gender: "Male", compPlaystyle: "Brawl", releaseYear: 2016, img: "images/Reinhardt.png" },
    { name: "Roadhog", role: "Tank", species: "Human", gender: "Male", compPlaystyle: "Brawl", releaseYear: 2016, img: "images/Roadhog.png" },
    { name: "Sigma", role: "Tank", species: "Cyborg", gender: "Male", compPlaystyle: "Poke", releaseYear: 2019, img: "images/Sigma.png" },
    { name: "Sojourn", role: "DPS", species: "Cyborg", gender: "Female", compPlaystyle: "Brawl", releaseYear: 2022, img: "images/Sojourn.png" },
    { name: "Soldier 76", role: "DPS", species: "Cyborg", gender: "Male", compPlaystyle: "Poke", releaseYear: 2016, img: "images/Soldier76.png" },
    { name: "Sombra", role: "DPS", species: "Human", gender: "Female", compPlaystyle: "Dive", releaseYear: 2016, img: "images/Sombra.png" },
    { name: "Symmetra", role: "DPS", species: "Cyborg", gender: "Female", compPlaystyle: "Brawl", releaseYear: 2016, img: "images/Symmetra.png" },
    { name: "Torbjorn", role: "DPS", species: "Cyborg", gender: "Male", compPlaystyle: "Poke", releaseYear: 2016, img: "images/Torbjorn.png" },
    { name: "Tracer", role: "DPS", species: "Human", gender: "Female", compPlaystyle: "Dive", releaseYear: 2016, img: "images/Tracer.png" },
    { name: "Venture", role: "DPS", species: "Human", gender: "Other", compPlaystyle: "Brawl", releaseYear: 2024, img: "images/Venture.png" },
    { name: "Widowmaker", role: "DPS", species: "Cyborg", gender: "Female", compPlaystyle: "Poke", releaseYear: 2016, img: "images/Widowmaker.png" },
    { name: "Winston", role: "Tank", species: "Animal", gender: "Male", compPlaystyle: "Dive", releaseYear: 2016, img: "images/Winston.png" },
    { name: "Wrecking Ball", role: "Tank", species: "Animal", gender: "Male", compPlaystyle: "Dive", releaseYear: 2018, img:"images/Wrecking_Ball.png" },
    { name: "Zarya", role: "Tank", species: "Human", gender: "Female", compPlaystyle: "Brawl", releaseYear: 2016, img: "images/Zarya.png" },
    { name: "Zenyatta", role: "Support", species: "Omnic", gender: "Male", compPlaystyle: "Brawl", releaseYear: 2016, img: "images/Zenyatta.png" }
    
];

let selectedHero = pickRandomHero();
let count = 0;
let traitTest = 0;
console.log(selectedHero);

const dropdown = document.getElementById("dropdown");
const input = document.getElementById("guess");

let filteredHeroes = [];
let unavailableHeroes = [];

input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    dropdown.innerHTML = "";

    if (query === ""){
        dropdown.style.display = "none";
        dropdown.innerHTML = "";
        return;
    }

    filteredHeroes = heroes.filter(hero => hero.name.toLowerCase().startsWith(query));
    
    if (filteredHeroes.length === 0){
        dropdown.innerHTML = "No results found";
        return;
    }

    filteredHeroes.forEach(hero => {
        const option = document.createElement("div");
        option.innerHTML = `<img src ="${hero.img}"> ${hero.name}`;
        
        option.addEventListener("click", () => {
            document.getElementById("guess").value = hero.name;
            checkGuess();
            dropdown.style.display = "none";
            dropdown.innerHTML = "";
        });

        dropdown.appendChild(option);

    });

    
    dropdown.style.display = "block";


});

// Function to pick a random hero from the list
function pickRandomHero() {
    return heroes[Math.floor(Math.random() * heroes.length)];
}



// Check the user's guess
function checkGuess() {
    count++;

    const guessInput = document.getElementById("guess").value.trim();
    const guessHistoryContainer = document.getElementById("guess-history");
    const guessedHero = heroes.find(hero => hero.name.toLowerCase() === guessInput.toLowerCase());

    let guessEntry = document.createElement("div");
    guessEntry.classList.add("guess-entry");
    let test = 0;

    if (!guessedHero) {
    guessEntry.textContent = `Invalid hero name - Please try again`;
    count--;
    } 
    
    else if (guessedHero.name.toLowerCase() === selectedHero.name.toLowerCase()) {
    guessEntry.textContent = `Correct! The hero is ${selectedHero.name}. `;
    document.getElementById("guess").disabled = "true";
    document.getElementById("guess").placeholder="";
    if (count === 1){
        guessEntry.textContent += ` It took ${count} guess`;
    } else{
        guessEntry.textContent += ` It took ${count} guesses`;
    }
    guessEntry.style.color = "#218ffe";
    } 
    
    else {
    let traitSpecies = document.createElement("div");
    let traitGender = document.createElement("div");
    let traitRole = document.createElement("div");
    let traitPlaystyle = document.createElement("div");
    let traitYear = document.createElement("div");

    traitSpecies.classList.add("guess-entryItem");
    traitGender.classList.add("guess-entryItem");
    traitRole.classList.add("guess-entryItem");
    traitPlaystyle.classList.add("guess-entryItem");
    traitYear.classList.add("guess-entryItem");

    traitSpecies.textContent = guessedHero.species;
    traitGender.textContent = guessedHero.gender;
    traitRole.textContent = guessedHero.role;
    traitPlaystyle.textContent = guessedHero.compPlaystyle;
    
    
    if (guessedHero.species === selectedHero.species){
        traitSpecies.classList.add("greenTrait");
        guessEntry.appendChild(traitSpecies);
    }
    else{
        traitSpecies.classList.add("redTrait");
        guessEntry.appendChild(traitSpecies);
    }

    if (guessedHero.gender === selectedHero.gender){
        traitGender.classList.add("greenTrait");
        guessEntry.appendChild(traitGender);
    }
    else{
        traitGender.classList.add("redTrait");
        guessEntry.appendChild(traitGender);
    }

    if (guessedHero.role === selectedHero.role){
        traitRole.classList.add("greenTrait");
        guessEntry.appendChild(traitRole);
    }
    else{
        traitRole.classList.add("redTrait");
        guessEntry.appendChild(traitRole);
    }
    
    if (guessedHero.compPlaystyle === selectedHero.compPlaystyle){
        traitPlaystyle.classList.add("greenTrait");
        guessEntry.appendChild(traitPlaystyle);
    }
    else{
        traitPlaystyle.classList.add("redTrait");
        guessEntry.appendChild(traitPlaystyle);
    }
    
    if (guessedHero.releaseYear === selectedHero.releaseYear){
        traitYear.classList.add("greenTrait");
        traitYear.textContent = guessedHero.releaseYear;
        guessEntry.appendChild(traitYear);
    }
    else if (guessedHero.releaseYear < selectedHero.releaseYear){
        traitYear.classList.add("redTrait");
        traitYear.textContent = `After ${guessedHero.releaseYear}`;
        guessEntry.appendChild(traitYear);
    }
    else if (guessedHero.releaseYear > selectedHero.releaseYear){
        traitYear.classList.add("redTrait");
        traitYear.textContent = `Before ${guessedHero.releaseYear}`;
        guessEntry.appendChild(traitYear);
    }
    
    

    // Append hero image
    const heroImage = document.createElement("img");
    heroImage.src = guessedHero.img;
    heroImage.alt = guessedHero.name;
    heroImage.classList.add("guess-image");
    heroImage.style.float = "left";
    heroImage.style.alignSelf = "left";
    guessEntry.prepend(heroImage)
    }

    guessHistoryContainer.appendChild(guessEntry);
    document.getElementById("guess").value = "";
    

    heroes = heroes.filter(item =>{
    if (item === guessedHero){
        unavailableHeroes.push(item);
        return false;
    }
    return true;
    });

    traitTest = 0;
}

// Play again function to reset the game
function playAgain() {
    selectedHero = pickRandomHero();
    console.log(selectedHero);
    document.getElementById("guess-history").innerHTML = "";
    document.getElementById("guess").placeholder="Enter your guess here";
    document.getElementById("guess").removeAttribute("disabled");
    count = 0;

    unavailableHeroes.forEach(item =>{
    heroes.push(item);
    return false;
    });

    heroes.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return +1;
    });
}

function handleKeyDown(event) {
    if (event.key === "Enter") {
    if (filteredHeroes.length > 0){
        document.getElementById("guess").value = filteredHeroes[0].name;
    }
    checkGuess();
    dropdown.style.display = "none";
    dropdown.innerHTML = "";
    }
}

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
return new bootstrap.Popover(popoverTriggerEl)
})