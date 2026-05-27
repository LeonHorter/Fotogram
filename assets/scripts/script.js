let imgNames = [
    'alaska-810433_1280.jpg',
    'anime-8788959_1280.jpg',
    'atmosphere-8752835_1280.jpg',
    'blue-tit-8521052_1280.jpg',
    'hurricane-92968_1280.jpg',
    'lake-2896379_1280.jpg',
    'moorente-8783210_1280.jpg',
    'sea-2563389_1280.jpg',
    'snow-bunting-6781122_1280.jpg',
    'snow-leopard-cubs-8039138_1280.jpg',
    'travel-8785493_1280.jpg',
    'winter-1675197_1280.jpg',
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

const dialogRef = document.getElementById('photo-overlay');
let currentPhotoId;

function renderGallery() {
    let contentRef = document.getElementById('gallery');

    contentRef.innerHTML = '';

    for (i = 0; i < imgNames.length; i++) {
        contentRef.innerHTML += getGalleryTemplate(i);
    }
}

function getGalleryTemplate(i) {
    return `<input type="image" aria-haspopup="dialog" aria-controls="photo-overlay" src="./assets/img/${imgNames[i]}" alt="${imgAlt[i]}" id="${i}" tabindex="0" onclick="openDialog(this)">`;
}

function renderDialog() {
    let contentRef = document.getElementById('photo-container');

    contentRef.innerHTML = '';

    for (i = 0; i < imgNames.length; i++) {
        contentRef.innerHTML += getPhotoTemplate(i);
    }
}

function setPhotoId(element) {
    currentPhotoId = parseInt(element.id);
}

function getPhotoTemplate(i) {
    return `<img src="./assets/img/${imgNames[i]}" alt="${imgAlt[i]}" id="photo-${i}" class="d-none">`;
}

function toggleDNone() {
    let bigPhotoId = 'photo-' + currentPhotoId;
    let photoRef = document.getElementById(bigPhotoId);

    photoRef.classList.toggle('d-none');
}

function initDialogTitle() {
    let contentRef = document.getElementById('photo-title');

    contentRef.innerText = imgNames[currentPhotoId];
}

function initDialogPhotoNumber() {
    let contentRef = document.getElementById('photo-number');
    let photoNumber = parseInt(currentPhotoId) + 1;
    let numberOfPhotos = imgNames.length;

    contentRef.innerHTML = '';
    contentRef.innerHTML = `${photoNumber}/${numberOfPhotos}`;
}

function showNextImage() {
    toggleDNone();
    if (currentPhotoId + 1 >= imgNames.length) {
        currentPhotoId = 0;
    } else {
        currentPhotoId++;
    }
    initDialog();
}

function showPrevImage() {
    toggleDNone();
    if (currentPhotoId - 1 < 0) {
        currentPhotoId = imgNames.length - 1;
    } else {
        currentPhotoId--;
    }
    initDialog();
}

function initDialog() {
    initDialogTitle();
    toggleDNone();
    initDialogPhotoNumber();
}

function openDialog(element) {
    renderDialog();
    setPhotoId(element);
    initDialog();
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
}

function stopPropagation(event) {
    event.stopPropagation();
}