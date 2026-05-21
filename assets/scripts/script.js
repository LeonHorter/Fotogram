let imgNames = [
    'alaska.jpg',
    'anime.jpg',
    'atmosphere.png',
    'blue-tit.jpg',
    'hurricane.jpg',
    'lake.jpg',
    'moorente.jpg',
    'sea.jpg',
    'snow-bunting.jpg',
    'snow-leopard.jpg',
    'travel.jpg',
    'winter.jpg',
]

let imgAlt = [
    'Alaska',
    'Anime',
    'Atmosphere',
    'Blaumeise',
    'Hurricane',
    'See',
    'Moorente',
    'Meer bei Nacht',
    'Schneeammer',
    'Schneeleopard',
    'verschneite Berge',
    'Baum im Winter'
]

function render() {
    let contentRef = document.getElementById('gallery');
    contentRef.innerHTML = '';

    for (i = 0; i < imgNames.length; i++) {
        contentRef.innerHTML += getNoteTemplate(i);
    }
}

function getNoteTemplate(i) {
    return `<img src="./assets/img/${imgNames[i]}" alt="${imgAlt[i]}">`;
}