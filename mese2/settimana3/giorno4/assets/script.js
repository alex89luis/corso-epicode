const btnPrimary = document.getElementById('loadImages');
const btnSecondary = document.getElementById('loadSecondary');
const dataUrl = 'https://api.pexels.com/v1/search?query'
const API_URL = 'qu8ASOG3NFCdkPsaFkd59lo1UGAigd4slzItugGCin9nhhFVpmfqtMW6'


async function searchImages() {
    let query = btnPrimary.value;
    const response = await fetch(dataURL + query, {
        headers: {
            Authorization: 'API_KEY',
        }
    });

    const data = await response.json();
    console.log(data); // Stampa i dati della risposta nella console per esaminarli
}

document.getElementById('loadImages').addEventListener('click', function (e) {
    e.preventDefault();
    searchImages();
});