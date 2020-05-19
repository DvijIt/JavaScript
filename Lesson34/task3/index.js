  
const baseUrl = "https://5ec377e28ebdcc0016a5a8e4.mockapi.io/api/v1/users"

const submit = document.querySelector('.submit-button');
const form = document.querySelector('.login-form');
const errorField = document.querySelector('.error-text')

const onFormChange = () => {

    if (form.reportValidity()) {
        submit.disabled = false;
    }
}
form.addEventListener("input", onFormChange);


const createTask = usersList => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(usersList)
    })
}

const sendUsers = (e) => {
    e.preventDefault();

    const dataObj = [...new FormData(form)]
        .reduce((acc, [key, value]) => ({...acc, [key]: value }), {});

    createTask(dataObj)
        .then(response => response.json())
        .then(data => {
            alert(JSON.stringify(data));
            form.reset();
            submit.disabled = true;

        })
        .catch(() => {
            errorField.textContent = 'Failed to create user';
            form.reset();
            submit.disabled = true;
        });

}


form.addEventListener('submit', sendUsers)