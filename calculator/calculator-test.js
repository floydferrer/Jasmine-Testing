
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 3,
    rate: 5
  }
  expect(calculateMonthlyPayment(values)).toEqual('299.71')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 2000,
    years: 3,
    rate: 5.06
  }
  expect(calculateMonthlyPayment(values)).toEqual('60.00')
});
