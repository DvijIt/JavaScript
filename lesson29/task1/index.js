export const addImage = (imgSrc, callback) => {
    const newImg = document.createElement('img')
    newImg.setAttribute('alt', 'My image!')
    newImg.src = imgSrc;
    const containerElem = document.querySelector('.page')
    containerElem.append(newImg)

    const onImageLoaded = () => {
        const { width, height } = newImg;
        callback(null, { width, height })
    }

    newImg.addEventListener('load', onImageLoaded)
    newImg.addEventListener('error', () => callback('Image load failed'))
}

const onImageLoaded = (error, data) => {
    if (error) {
        console.log(error)
        return
    }
    const { width, height } = data;

    const spanSize = document.querySelector('.size');
    spanSize.textContent = `${width} x ${height}`
}

const imgSrc = 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'

addImage(imgSrc, onImageLoaded)