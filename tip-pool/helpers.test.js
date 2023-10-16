describe("Helpers test (with setup and tear-down)", function() {
 
    it('should accept billAmt, tipAmt, tipPercent and sums total from allPayments objects', function () {
        allPayments['payment1'] = {billAmt: 100, tipAmt: 10, tipPercent: 10};
        allPayments['payment2'] = {billAmt: 120, tipAmt: 20, tipPercent: 17};
        allPayments['payment3'] = {billAmt: 150, tipAmt: 25, tipPercent: 17};
        let billTotal = sumPaymentTotal('billAmt');
        let tipTotal = sumPaymentTotal('tipAmt');
        let tipPercentTotal = sumPaymentTotal('tipPercent');

        expect(billTotal).toEqual(370);
        expect(tipTotal).toEqual(55);
        expect(tipPercentTotal).toEqual(44);
    });
    
    it('should accept a table row element, appending a newly created td element from the value', function () { 
        let newTr = document.createElement('tr');
        let curPayment = {
            billAmt: '$100',
            tipAmt: '$10',
            tipPercent: '10%'
        };
        
        appendTd(newTr, curPayment.billAmt);
        appendTd(newTr, curPayment.tipAmt);
        appendTd(newTr, curPayment.tipPercent);
        paymentTbody.append(newTr);

        let paymentTds = document.querySelectorAll('#paymentTable tbody tr td');

        expect(paymentTds[0].innerHTML).toEqual('$100');
        expect(paymentTds[1].innerHTML).toEqual('$10');
        expect(paymentTds[2].innerHTML).toEqual('10%');
    });
    
    it('should create a delete button and append to a newly created Tr', function () { 
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });
    
    
    afterEach(function() {
      paymentTbody.innerHTML = ''
      allPayments = {};
    });
  });