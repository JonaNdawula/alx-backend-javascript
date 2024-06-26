const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi =  require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber for calculation', () =>{
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledOnceWith('SUM', 100, 20)).to.be.true;
    calculateNumberSpy.restore();
  });
});
