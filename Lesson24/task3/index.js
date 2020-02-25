const getDiff = (startDate, endDate) => {
  const from = new Date(startDate).getTime();
  const to = new Date(endDate).getTime();

  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;

  const time = Math.abs(from - to);
  const days = Math.floor(time / day);
  const hours = Math.floor((time - day * days) / hour);
  const minutes = Math.floor((time - (hours * hour + days * day)) / minute);
  const seconds = Math.floor((time - (hours * hour + days * day + minute * minutes)) / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`
};

// console.log(
//   getDiff(new Date(2018, 1, 2, 13, 45, 54), new Date(2015, 3, 3, 10, 19, 12))
// );
export { getDiff };
