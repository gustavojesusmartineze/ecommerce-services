const average = (array) => {
  let avg = 0;
  for (let i = 0; i < array.length; i++) {
    avg = avg + array[i].score;
  }

  avg = avg / array.length;

  return avg;
}

module.exports = {
  average,
}
