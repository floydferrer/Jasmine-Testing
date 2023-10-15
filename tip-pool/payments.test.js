describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = '100';
      tipAmtInput.value = '10';
    });
  
    it('should add payment info to paymentTable', function () {
      submitPaymentInfo();
        
      let payment = document.querySelectorAll('#paymentTable tbody tr td');
      expect(payment.length).toEqual(3);
      expect(payment[0].innerText).toEqual('$100');
      expect(payment[1].innerText).toEqual('$10');
      expect(payment[2].innerText).toEqual('10%');
    });
    
    it('should create an object with payment, tip and tip percent', function () {
      let curPayment = createCurPayment();
        
      expect(curPayment['billAmt']).toEqual('100');
      expect(curPayment['tipAmt']).toEqual('10');
      expect(curPayment['tipPercent']).toEqual(10);      
    });
    
    it('should create table row element and pass to appendTd with input value', function () {
      let curPayment = {
        billAmt: 100,
        tipAmt: 10,
        tipPercent: 10
      }; 
      appendPaymentTable(curPayment);
      let payment = document.querySelectorAll('#paymentTable tbody tr td');
      expect(payment[0].innerText).toEqual('$100');
      expect(payment[1].innerText).toEqual('$10');
      expect(payment[2].innerText).toEqual('10%');
    });
    
    it('should add payment totals to Shift Summary table', function () {
      allPayments['payment1'] = {billAmt: 100, tipAmt: 10, tipPercent: 10};
      allPayments['payment2'] = {billAmt: 120, tipAmt: 20, tipPercent: 17};
      allPayments['payment3'] = {billAmt: 150, tipAmt: 25, tipPercent: 17};
      updateSummary()
      
      expect(summaryTds[0].innerHTML).toEqual('$370'); 
      expect(summaryTds[1].innerHTML).toEqual('$55'); 
      expect(summaryTds[2].innerHTML).toEqual('15%'); 
    });
  
  
    afterEach(function() {
      paymentId = 0;
      paymentTbody.innerHTML = ''
      allPayments = {};
      billAmtInput.value = '';
      tipAmtInput.value = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
    });
  });