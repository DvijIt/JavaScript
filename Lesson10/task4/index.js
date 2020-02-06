// const rooms = {
//   room1: [{
//       name: 'room1 name1'
//     },
//     {
//       name: 'room1 name2'
//     },
//     {
//       name: 'room1 name3'
//     },
//     {
//       name: 'room1 name4'
//     }
//   ],
//   room2: [{
//     name: 'room2 name1'
//   }],
//   room3: [{
//       name: 'room3 name1'
//     },
//     {
//       name: 'room3 name2'
//     },
//     {
//       name: 'room3 name3'
//     }
//   ]
// };

const getPeople = roomsObj => {
  let arr = Object.values(roomsObj);
  let $arr = [];
  arr.forEach(el => {
    el.forEach(el => {
      el = Object.values(el)
      $arr.push(el[0])
    })
  })
  $arr.flat();

  return $arr
}

// console.log(getPeople(rooms))