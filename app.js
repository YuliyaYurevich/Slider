const range = document.getElementById('priceRange');
console.log(range);

range.addEventListener('input', (e) => {
  const value = +e.target.value;
  // console.log(value);
  const dollars = e.target.previousElementSibling.lastElementChild;
  dollars.innerHTML = value / 100;
});
