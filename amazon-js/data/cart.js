export const cart = [];

export function addToCart(productName, productId) {
  // let cartItem = cart.find((sameItem) => sameItem.productName === productName);
  let item;
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      item = cartItem;
    }
  });

  if (item) {
    item.quantity++;
  } else {
    cart.push({
      productName: productName,
      productId: productId,
      quantity: 1,
    });
  }

  // if (cartItem) {
  //   cartItem.quantity++;
  //   console.log("cartItem", cartItem);
  // } else {
  //   cart.push({
  //     productName: productName,
  //     quantity: 1,
  //   });
  // }
}
