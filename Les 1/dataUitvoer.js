const uitvoer = document.getElementById('uitvoer');



const uitvoeren = () => {
    // deze funtie voert de data in de div met de ID uitvoer
    uitvoer.innerHTML = 'Dit kom uit dataUitvoer.js!!';
}

const starten = () => {
    uitvoeren();
}

document.addEventListener('DOMContentLoaded', starten)