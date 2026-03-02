const { validateEvent } = require('../common/schemas/event');

if (validateEvent({ id: 'evt-1' }) !== true) {
  console.error('ticket-service: FAIL - an event with an id should be valid');
  process.exit(1);
}
console.log('ticket-service: ok');
