exports.handler = async (event) => {
  const VERIFY_TOKEN = 'mySecretToken'; // Choose any secret string

  // Facebook sends a GET request for verification
  const params = event.queryStringParameters;
  if (
    params['hub.mode'] === 'subscribe' &&
    params['hub.verify_token'] === VERIFY_TOKEN
  ) {
    // Respond with the challenge token from Facebook
    return {
      statusCode: 200,
      body: params['hub.challenge'],
    };
  }

  // If verification fails, respond with an error
  return {
    statusCode: 403,
    body: 'Verification failed.',
  };
};
