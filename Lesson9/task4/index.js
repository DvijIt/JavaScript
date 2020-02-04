const getAdults = obj => {
  let $obj = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      $obj[key] = obj[key]
    }
  }
  return $obj;
}