export const addImage = (url, callback) => {
    const img = document.createElement('img');
    img.setAttribute('alt', 'User avatar');
    img.src = url;

    const pageElem = document.querySelector('.page');
    pageElem.append(img);

    const onImageLoaded = () => {
        const { width, height } = img;
        callback(null, { width, height });
    }

    const onImageLoadError = () => callback('Image load failed');

    img.addEventListener('load', onImageLoaded);

    img.addEventListener('error', onImageLoadError);
};

export const addImageV2 = (url) => {
    let p = new Promise((resolve, reject) => {
        callback((error, data) => {
         if (error) {reject(error); return}
         resolve(data)   
        })
        addImage(imgUrl, callback)
    })

    return p;
};

let url = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'

let result = addImageV2(url)
result
    .then(data => console.log(data)) // { width: 200, height: 100 }
    .catch(error => console.log(error)); // 'Image load failed'