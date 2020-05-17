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

export const addImageV2 = (imgUrl) => {
    let p = new Promise((resolve, reject) => {
        addImage(imgUrl, (error, data) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(data);
        })
    });
    return p
}

let imgUrl = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'

addImageV2(imgUrl)
    .then(data => console.log(data)) // { width: 200, height: 100 }
    .catch(error => console.log(error)); // 'Image load failed'