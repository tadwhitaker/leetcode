const evens = [0, 2, 4, 6];
const odds = [1, 3, 9, 11];


merger = (e, o) => {
  let combined = e.concat(o);
  console.log(combined);
  function sortNumber(a, b) {
    return a - b;
  }
  combined.sort(sortNumber);
  console.log(combined.join(","));
};

merger(evens, odds);



