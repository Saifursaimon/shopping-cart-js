document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const phoneQuantity = setProductQuantityById("phone-quantity", true);
    const phoneNewPrice = phoneQuantity * 1219;
    setProductPrice("phone-price", phoneNewPrice);
    setSubTotalPrice();
  });
document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const phoneQuantity = setProductQuantityById("phone-quantity", false);
    const phoneNewPrice = phoneQuantity * 1219;
    setProductPrice("phone-price", phoneNewPrice);
    setSubTotalPrice();
  });
