function setProductQuantityById(Id, isIncrement) {
  const elementField = document.getElementById(Id);
  const previousQuantity = parseInt(elementField.value);

  let newQuantity;

  if (isIncrement) {
    newQuantity = previousQuantity + 1;
  } else {
    newQuantity = previousQuantity - 1;
  }
  elementField.value = newQuantity;

  return newQuantity;
}

function setProductPrice(productId, value) {
  const ProductPrice = document.getElementById(productId);
  ProductPrice.innerText = value;
}
function getTextElementById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = parseInt(element.innerText);
  return elementText;
}

function setSubTotalPrice() {
  const currentPhonePrice = getTextElementById("phone-price");
  const currentCoverPrice = getTextElementById("cover-price");
  const newSubTotal = currentPhonePrice + currentCoverPrice;
  setProductPrice("sub-total", newSubTotal);

  const taxAmount = parseFloat((newSubTotal * 0.1).toFixed(2));
  setProductPrice("tax-amount", taxAmount);

  const Total = newSubTotal + taxAmount;
  setProductPrice("final-total", Total);
}
