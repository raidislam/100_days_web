export const cart = [
  {
    productName: "Plain Hooded Fleece Sweatshirt",
    productId: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    quantity: 23,
  },
  {
    productName: "Intermediate Size Basketball",
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
  },
];

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
