import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../server.js';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Server', () => {
  it('should return 200 on /api/chat POST request', (done) => {
    chai.request(app)
      .post('/api/chat')
      .send({
        message: 'Hello',
        chatHistory: []
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message');
        done();
      });
  });

  it('should return 500 on invalid request', (done) => {
    chai.request(app)
      .post('/api/chat')
      .send({
        invalidKey: 'Invalid Data'
      })
      .end((err, res) => {
        expect(res).to.have.status(500);
        expect(res.body).to.have.property('error');
        done();
      });
  });
});
