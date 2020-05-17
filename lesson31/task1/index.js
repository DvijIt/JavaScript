export const addImage = imgSrc => {
    let p = new Promise((resolve, regect) => {

        const imgElem = document.createElement('img');
        imgElem.setAttribute('alt', 'My Photo');
        imgElem.src = imgSrc;
        const containerElem = document.querySelector('.page');
        containerElem.append(imgElem);
    
        const onImageLoaded = () => {
            const { width, height } = imgElem;
            resolve({ width, height })
        }
    
        imgElem.addEventListener('load', onImageLoaded)
        imgElem.addEventListener('error', () => regect(new Error('Image load failed')))

    })
    return p;
}

let imgScr = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'

let result = addImage(imgScr)
// result.then(data => {
//     console.log(data);
// })

