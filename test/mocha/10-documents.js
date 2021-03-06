const {requireUncached, isRegistration} = require('./helpers');
const {documents} = requireUncached('bedrock-tokenization');

// this is test data borrowed from minimal-cipher
const recipients = [
  {
    header: {
      kid: 'did:key:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoA' +
        'nwWsdvktH#z6LSbysY2xFMRpGMhb7tFTLMpeuPRaqaWM1yECx2AtzE3KCc',
      alg: 'ECDH-ES+A256KW',
    }
  }
];

describe('Documents', function() {
  it('should register a document without creator', async function() {
    const result = await documents.register({
      externalId: 'did:test:register',
      document: {},
      recipients,
      ttl: 30000
    });
    isRegistration(result);
  });

  it.skip('should register a document with creator', async function() {
    const result = await documents.register({
      externalId: 'did:test:register:with:data',
      document: {},
      recipients: [],
      ttl: 30000,
      creator: 'some_creator'
    });
    isRegistration(result);
  });

  it.skip('should delete a document with an expired ttl', async function() {
    const result = await documents.register({
      externalId: 'did:test:register:with:small:ttl',
      document: {},
      recipients: [],
      ttl: 1000
    });
    isRegistration(result);
  });
});
