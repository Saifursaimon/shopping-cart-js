document
  .getElementById("btn-cover-plus")
  .addEventListener("click", function () {
    const coverQuantity = setProductQuantityById("cover-quantity", true);
    const coverNewPrice = coverQuantity * 59;
    setProductPrice("cover-price", coverNewPrice);
    setSubTotalPrice();
  });
document
  .getElementById("btn-cover-minus")
  .addEventListener("click", function () {
    const coverQuantity = setProductQuantityById("cover-quantity", false);
    const coverNewPrice = coverQuantity * 59;
    setProductPrice("cover-price", coverNewPrice);
    setSubTotalPrice();
  });
