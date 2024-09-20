import chai from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../server.js';
import sinon from 'sinon';
import openai from '../config/open-ai.js';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Server', () => {
  let openaiStub;

  before(() => {
    openaiStub = sinon.stub(openai, 'createChatCompletion');
  });

  after(() => {
    openaiStub.restore();
    server.close();
  });

  describe('POST /api/chat', () => {
    it('should return a chat response', (done) => {
      const mockResponse = {
        data: {
          choices: [{ message: { content: 'Hello, how can I help you?' } }]
        }
      };
      openaiStub.resolves(mockResponse);

      chai.request(server)
        .post('/api/chat')
        .send({ message: 'Hi', chatHistory: [] })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message').equal('Hello, how can I help you?');
          done();
        });
    });

    it('should handle errors', (done) => {
      openaiStub.rejects(new Error('API Error'));

      chai.request(server)
        .post('/api/chat')
        .send({ message: 'Hi', chatHistory: [] })
        .end((err, res) => {
          expect(res).to.have.status(500);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('error').equal('An error occurred while processing your request.');
          done();
        });
    });
  });
});
