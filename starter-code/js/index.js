// var button = document.getElementsByTagName('button')[0];

// function deleteItem(e){
  

// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {

// }

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }
var button = document.getElementsByTagName('button')[0];
window.onload = function(){
   var calculatePriceButton = document.getElementById('calc-prices-button');
   var createItemButton = document.getElementById('new-item-create');
   var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
// 1st createname
function createNameNode(newName){
  var nameDiv = document.createElement("div");
  nameDiv.setAttribute("class", "col-lg-2");
  console.log("productDiv: ", nameDiv);
  var nameSpan = document.createElement("span");
  nameSpan.setAttribute("class", "product-name");
  nameDiv.innerHTML = newName;
  nameDiv.appendChild(nameSpan);
  return nameDiv;

}
// 2nd create price
function createSinglePriceNode(newPrice){
  var priceDiv = document.createElement("div");
  priceDiv.setAttribute("class", "col-lg-2");
  var dollarSpan = document.createElement("span");
  dollarSpan.innerHTML = "$";
  dollarSpan.setAttribute("class", "dollar-sign");
  var priceSpan = document.createElement("span");
  priceSpan.setAttribute("class", "single-item-price")
  priceSpan.innerHTML = newPrice;
  priceDiv.appendChild(dollarSpan);
  priceDiv.appendChild(priceSpan);
  console.log("priceDiv: ", priceDiv);
  return priceDiv;
}
// 3rd create whole row
function createNewItemRow(itemName, itemPrice){
    var productRow = document.createElement("div");
    productRow.setAttribute("class", "row");
    var productName = createNameNode(itemName);
    var productPrice = createSinglePriceNode(itemPrice);
    productRow.appendChild(productName);
    productRow.appendChild(productPrice);
    return productRow;

}
// 4th sets the row on the DOM, poisitioning it above input fields to create new
function createNewItem(){
  var singleProductName = document.getElementById("new-product-name").value;
  var singleProductPrice = document.getElementById("new-product-price").value;

  var newItem = createNewItemRow(singleProductName, singleProductPrice);
  //console.log("newItem is:")
  var newDiv = document.getElementById("create");

  newDiv.parentNode.insertBefore(newItem, newDiv);

  document.getElementById("new-product-name").value = "";
  document.getElementById("new-product-price").value = "";
}
// deleteitem
function deleteItem(e){
  e.currentTarget.parentNode.parentNode.remove();
  getTotalPrice();
}
// all prices
var allPrices = document.getElementsByClassName('single-item-price');
  // console.log("all prices: ", allPrices[0].innerHTML);
// all the products
var allProducts = document.getElementsByClassName('product-name');
// all the quantaties
var allQuantities = document.getElementsByClassName('quantity-input');

function getPriceByProduct(itemNode){
  for(var i=0; i<allProducts.length; i++){
    var totalSingleItemPrice = Number(allPrices[i].innerHTML) * allQuantities[i].value;
    console.log(totalSingleItemPrice);
    document.getElementsByClassName('total-single-item-price')[i].innerHTML = totalSingleItemPrice;
  }
}
var updatedPricesArray = document.getElementsByClassName('total-single-item-price');

console.log("updated array: ", updatedPricesArray);

function sumOfTwoNumbers(a,b){
    return a+b;
}


function getTotalPrice(){
  getPriceByProduct();
  var newPricesArray = [];
  for(var i=0; i < allProducts.length; i++){
      var singleProductTotalPrice = Number(updatedPricesArray[i].innerHTML);
      console.log("blah: ", singleProductTotalPrice);
      newPricesArray.push(singleProductTotalPrice);
      console.log("newPricesArray: ", newPricesArray);
  }
  var total = newPricesArray.reduce(sumOfTwoNumbers,0);
  console.log("total is: ", total);
  document.getElementById('final-price').innerHTML = total;
}