  
localStorage.setItem('hobbies', JSON.stringify({ hoddie: 'football' }));
localStorage.setItem('name', JSON.stringify('Bom'));
localStorage.setItem('age', JSON.stringify(17));
localStorage.setItem('isMarried', JSON.stringify(true));
localStorage.setItem('hasMoney', JSON.stringify(null));


const getLocalStorageData = () => {
    return Object.entries(localStorage)
        .reduce((acc, [key, value]) => {
            let newValue;
            try {
                newValue = JSON.parse(value);
            } catch (e) {
                newValue = value;
            }
            return {
                ...acc,
                [key]: newValue,
            }
        }, {})
}

export { getLocalStorageData }