const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

/* getTasksList code here */
export const getTasksList = () => fetch(baseUrl)
    .then(resposce => resposce.json())
    .then(tasksList => console.log(tasksList))

// getTasksList(baseUrl)


/* getTaskById code here */
export const getTaskById = taskId => fetch(`${baseUrl}/${taskId}`).then(responce => responce.json()).then(task => console.log(task))


// getTaskById(1)