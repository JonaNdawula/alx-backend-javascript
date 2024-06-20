const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  it('should return correct status code', (done) =>{
    request('http://localhost:7865', (error, response, body) =>{
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct status code when id is a number', (done) =>{
    request('http://localhost:7865/cart/12', (error, response, body) =>{
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 status code when id is not a number', (done) =>{
    request('http://localhost:7865/cart/hello', (error, response, body) =>{
      if (error) return done(error);
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
