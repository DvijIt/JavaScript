export const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
        const { width, height } = imgElem;
        callback(null, { width, height })
    }

    imgElem.addEventListener('load', onImageLoaded)
    imgElem.addEventListener('error', () => callback('Image load failed'))
}

const onImageLoaded = (error, data) => {
    if (error) {
        return
    }
    const { width, height } = data;

    const spanSize = document.querySelector('.size');
    spanSize.textContent = `${width} x ${height}`
}

const imgSrc = 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'

addImage(imgSrc, onImageLoaded)