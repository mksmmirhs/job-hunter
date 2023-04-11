// use local storage to manage cart data
const addToDb = id => {
  let shoppingCart = getJobFromDb();
  // add quantity
  shoppingCart.push(id);
  localStorage.setItem('job-cart', JSON.stringify(shoppingCart));
};

const getJobFromDb = () => {
  let shoppingCart = [];

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('job-cart');
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

export { addToDb, getJobFromDb };
