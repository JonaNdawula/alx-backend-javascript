const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  it('should return correct status code', (done) =>{
    request('http://localhost:7865', (error, response, body) =>{
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});

describe('Cart page', () => {
  it('should return correct status code 200 when id is a number', (done) =>{
    request('http://localhost:7865/cart/12', (error, response, body) =>{
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 when id is not a number', (done) =>{
    request('http://localhost:7865/cart/hello', (error, response, body) =>{
      if (error) return done(error);
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('/available_payments endpoints', () =>{
  it('should return correct payment methods', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) =>{
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
	  paypal: false,
        },
      });
      done();
    });  
  });
});

describe ('/login endpoint', () => {
  it('should return welcome message', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: {
        userName: 'Betty',
      },
    };
    request(options, (error, response, body) =>{
       if (error) return done(error);
       expect(response.statusCode).to.equal(200);
       expect(body).to.equal('Welcome Betty');
       done();
    });
  });
});
