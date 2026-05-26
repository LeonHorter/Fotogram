let imgNames = [
    'alaska-810433_1280.jpg',
    'anime-8788959_1280.jpg',
    'atmosphere-8752835_1280.png',
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
let photoId = '';

function renderGallery() {
    let contentRef = document.getElementById('gallery');

    contentRef.innerHTML = '';

    for (i = 0; i < imgNames.length; i++) {
        contentRef.innerHTML += getGalleryTemplate(i);
    }
}

function getGalleryTemplate(i) {
    return `<img src="./assets/img/${imgNames[i]}" alt="${imgAlt[i]}" id="${i}" onclick="openDialog(this)">`;
}

function renderDialog() {
    let contentRef = document.getElementById('photo');

    contentRef.innerHTML = '';

    for (i = 0; i < imgNames.length; i++) {
        contentRef.innerHTML += getPhotoTemplate(i);
    }
}

function setPhotoId(element) {
    photoId = parseInt(element.id);
}

function getPhotoTemplate(i) {
    return `<img src="./assets/img/${imgNames[i]}" alt="${imgAlt[i]}" id="photo-${i}" class="d-none">`;
}

function toggleDNone() {
    let bigPhotoId = 'photo-' + photoId;
    let photoRef = document.getElementById(bigPhotoId);

    photoRef.classList.toggle('d-none');
}

function initDialogTitle() {
    let contentRef = document.getElementById('photo-title');

    contentRef.innerText = imgNames[photoId];
}

function initDialogPhotoNumber() {
    let contentRef = document.getElementById('photo-number');
    let photoNumber = parseInt(photoId) + 1;
    let numberOfPhotos = imgNames.length;

    contentRef.innerHTML = '';
    contentRef.innerHTML = `${photoNumber}/${numberOfPhotos}`;
}

function showNextImage() {
    toggleDNone();
    if (photoId + 1 >= imgNames.length) {
        photoId = 0;
    } else {
        photoId++;
    }
    initDialog();
}

function showPrevImage() {
    toggleDNone();
    if (photoId - 1 < 0) {
        photoId = imgNames.length - 1;
    } else {
        photoId--;
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