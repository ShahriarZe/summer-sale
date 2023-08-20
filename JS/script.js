// ReUsable Function

// Get Name Function
function getItemName(nameId) {
    const getName = document.getElementById(nameId);
    const name = getName.innerText;
    return name;
}


// Get Price Id Function
function getItemPrice(priceId) {
    const priceValue = document.getElementById(priceId);
    const priceValueString = priceValue.innerText;
    const itemPrice = parseFloat(priceValueString);
    return itemPrice;
}


// Get Cart Area Value Function
function getAreaValue(areaId) {
    const areaValue = document.getElementById(areaId);
    const areaValueString = areaValue.innerText;
    const area = parseFloat(areaValueString);
    return area;
}


// Set Cart Area Value Function
function setItemTotal(areaValueId, totalPrice) {
    const itemTotalValue = document.getElementById(areaValueId);
    itemTotalValue.innerText = totalPrice;
}


// Set Item in Cart Function
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
    const modal = document.getElementById('modalBtn');
    if (total > 0) {
        modal.removeAttribute('disabled');
    }
    else {
        modal.setAttribute('disabled', true)
    }
    const applyBtn = document.getElementById('apply');
    if (total >= 200) {
        applyBtn.removeAttribute('disabled');
    }
    else {
        applyBtn.setAttribute('disabled', true)
    }
}

// Full Jersey Set
function onClickCard2() {
    const cardName = getItemName('jerseySet');
    const price = getItemPrice('jerseyPrice');
    const itemTotal = getAreaValue('itemTotal');
    const total = itemTotal + price;
    const itemTotalArea = setItemTotal('itemTotal', total);
    addtoCart(cardName);
    const modal = document.getElementById('modalBtn');
    if (total > 0) {
        modal.removeAttribute('disabled');
    }
    else {
        modal.setAttribute('disabled', true)
    }
    const applyBtn = document.getElementById('apply');
    if (total >= 200) {
        applyBtn.removeAttribute('disabled');
    }
    else {
        applyBtn.setAttribute('disabled', true)
    }
}

// Sports Cades
function onClickCard3() {
    const cardName = getItemName('sportsCades');
    const price = getItemPrice('cadesPrice');
    const itemTotal = getAreaValue('itemTotal');
    const total = itemTotal + price;
    const itemTotalArea = setItemTotal('itemTotal', total);
    addtoCart(cardName);
    const modal = document.getElementById('modalBtn');
    if (total > 0) {
        modal.removeAttribute('disabled');
    }
    else {
        modal.setAttribute('disabled', true)
    }
    const applyBtn = document.getElementById('apply');
    if (total >= 200) {
        applyBtn.removeAttribute('disabled');
    }
    else {
        applyBtn.setAttribute('disabled', true)
    }
}

// Single Relax Chair
function onClickCard4() {
    const cardName = getItemName('relaxChair');
    const price = getItemPrice('chairPrice');
    const itemTotal = getAreaValue('itemTotal');
    const total = itemTotal + price;
    const itemTotalArea = setItemTotal('itemTotal', total);
    addtoCart(cardName);
    const modal = document.getElementById('modalBtn');
    if (total > 0) {
        modal.removeAttribute('disabled');
    }
    else {
        modal.setAttribute('disabled', true)
    }
    const applyBtn = document.getElementById('apply');
    if (total >= 200) {
        applyBtn.removeAttribute('disabled');
    }
    else {
        applyBtn.setAttribute('disabled', true)
    }
}

// Children Play
function onClickCard5() {
    const cardName = getItemName('childrenPlay');
    const price = getItemPrice('childrenPrice');
    const itemTotal = getAreaValue('itemTotal');
    const total = itemTotal + price;
    const itemTotalArea = setItemTotal('itemTotal', total);
    addtoCart(cardName);
    const modal = document.getElementById('modalBtn');
    if (total > 0) {
        modal.removeAttribute('disabled');
    }
    else {
        modal.setAttribute('disabled', true)
    }
    const applyBtn = document.getElementById('apply');
    if (total >= 200) {
        applyBtn.removeAttribute('disabled');
    }
    else {
        applyBtn.setAttribute('disabled', true)
    }
}

// Flexible Sofa
function onClickCard6() {
    const cardName = getItemName('flexibleSofa');
    const price = getItemPrice('sofaPrice');
    const itemTotal = getAreaValue('itemTotal');
    const total = itemTotal + price;
    const itemTotalArea = setItemTotal('itemTotal', total);
    addtoCart(cardName);
    const modal = document.getElementById('modalBtn');
    if (total > 0) {
        modal.removeAttribute('disabled');
    }
    else {
        modal.setAttribute('disabled', true)
    }

    const applyBtn = document.getElementById('apply');
    if (total >= 200) {
        applyBtn.removeAttribute('disabled');
    }
    else {
        applyBtn.setAttribute('disabled', true)
    }
}