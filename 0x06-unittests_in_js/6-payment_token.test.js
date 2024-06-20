const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct data when success is true', ()=>{
    getPaymentTokenFromAPI(true)
      .then((response) =>{
        expect(response).to.eql({ data: 'Successful response from the API'});
	done();
      }) 
      .catch((error) => {
	done(error);
      });
  });
});
