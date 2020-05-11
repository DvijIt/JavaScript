export const tasks = [
  { text: "Buy milk", done: false, date: 'Mon May 11 2020 18:21:50 GMT+0300 (Восточная Европа, летнее время' },
  { text: "Pick up Tom from airport", done: false, date: 'Mon May 11 2020 18:22:50 GMT+0300 (Восточная Европа, летнее время' },
  { text: "Visit party", done: false, date: 'Mon May 11 2020 18:23:50 GMT+0300 (Восточная Европа, летнее время' },
  { text: "Visit doctor", done: true, date: 'Mon May 11 2020 18:24:50 GMT+0300 (Восточная Европа, летнее время' },
  { text: "Buy meat", done: true, date: 'Mon May 11 2020 18:25:50 GMT+0300 (Восточная Европа, летнее время' }
];


export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const getItem = key => JSON.parse(localStorage.getItem(key));
