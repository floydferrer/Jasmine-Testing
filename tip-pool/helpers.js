
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) { //replace type with billAmt, tipAmt, tipPercent
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteBtn(tr) {
  let newTd = document.createElement('button');
  newTd.id = 'removeBtn';
  newTd.innerText = 'X'

  tr.append(newTd);
}

paymentTbody.addEventListener("click", function(event){
  const toLowerCase = event.target.tagName.toLowerCase();
  if (toLowerCase === 'button') {
    const billId = event.target.parentNode.id;
    const removeBill = document.querySelectorAll(`#${billId} td`);
    allPayments['payment-' + billId.replace("payment", "")] = {
      billAmt: -1 * removeBill[0].innerHTML.replace("$", ""),
      tipAmt: -1 * removeBill[1].innerHTML.replace("$", ""),
      tipPercent: -1 * removeBill[2].innerHTML.replace("%", "")
    };
    // console.log(billId);
    // console.log(removeBill[0].innerHTML.replace("$", ""));
    // console.log(removeBill[1].innerHTML.replace("$", ""));
    // console.log(removeBill[2].innerHTML.replace("%", ""));
    // console.log(allPayments['payment-1']);
    updateSummary();
    updateServerTable();
    event.target.parentNode.remove();
  }
});

serverTbody.addEventListener("click", function(event){
  const toLowerCase = event.target.tagName.toLowerCase();
  if (toLowerCase === 'button') {
    const serverId = event.target.parentNode.id;
    const removeServer = document.querySelectorAll(`#${serverId} td`);
    delete allServers['server' + serverId.replace("server", "")];
    updateServerTable();
    event.target.parentNode.remove();
  }
});