// ReUsable Function
function getItemName(nameId) {
    const getName = document.getElementById(nameId);
    const name = getName.innerText;
    return name;
}

function getItemPrice(priceId) {
    const priceValue = document.getElementById(priceId);
    const priceValueString = priceValue.innerText;
    const itemPrice = parseFloat(priceValueString);
    return itemPrice;
}

function getAreaValue(areaId) {
    const areaValue = document.getElementById(areaId);
    const areaValueString = areaValue.innerText;
    const area = parseFloat(areaValueString);
    return area;
}

function setItemTotal(areaValueId, totalPrice) {
    const itemTotalValue = document.getElementById(areaValueId);
    itemTotalValue.innerText = totalPrice;
}

function addtoCart(itemName) {
    const newElementEntry = document.getElementById('newElementDiv');
    const count = newElementEntry.childElementCount
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${itemName}`
    newElementEntry.appendChild(p);
}


// Sports Black Cap Card
function onClickCard1() {
    const cardName = getItemName('BlackCap');
    const price = getItemPrice('capPrice');
    const itemTotal = getAreaValue('itemTotal');
    const total = itemTotal + price;
    const itemTotalArea = setItemTotal('itemTotal', total);
    addtoCart(cardName);
}

// Full Jersey Set
function onClickCard2() {
    const cardName = getItemName('jerseySet');
    const price = getItemPrice('jerseyPrice');
    const itemTotal = getAreaValue('itemTotal');
    const total = itemTotal + price;
    const itemTotalArea = setItemTotal('itemTotal', total);
    addtoCart(cardName);
}

// Sports Cades
function onClickCard3() {
    const cardName = getItemName('sportsCades');
    const price = getItemPrice('cadesPrice');
    const itemTotal = getAreaValue('itemTotal');
    const total = itemTotal + price;
    const itemTotalArea = setItemTotal('itemTotal', total);
    addtoCart(cardName);
}

// Single Relax Chair
function onClickCard4() {
    const cardName = getItemName('relaxChair');
    const price = getItemPrice('chairPrice');
    const itemTotal = getAreaValue('itemTotal');
    const total = itemTotal + price;
    const itemTotalArea = setItemTotal('itemTotal', total);
    addtoCart(cardName);
}

// Children Play
function onClickCard5() {
    const cardName = getItemName('childrenPlay');
    const price = getItemPrice('childrenPrice');
    const itemTotal = getAreaValue('itemTotal');
    const total = itemTotal + price;
    const itemTotalArea = setItemTotal('itemTotal', total);
    addtoCart(cardName);
}

// Flexible Sofa
function onClickCard6() {
    const cardName = getItemName('flexibleSofa');
    const price = getItemPrice('sofaPrice');
    const itemTotal = getAreaValue('itemTotal');
    const total = itemTotal + price;
    const itemTotalArea = setItemTotal('itemTotal', total);
    addtoCart(cardName);
}