const fetch = require('isomorphic-fetch');
const uuid = require('uuid');

test('POST /upvote should return 200', async () => {
    const userId = uuid.v4();
    const guestId = uuid.v4();
    const guideId = uuid.v4();

    const response = await fetch('http://localhost:3000/upvotes', {
        method: 'POST',
        body: JSON.stringify({userId, guestId, guideId}),
        headers: {'content-type': 'application/json; charset=utf-8'}
    });
    
    expect(response.ok).toBeTruthy();
    expect(response.headers.get('content-type')).toEqual('application/json; charset=utf-8');

    const data = await response.json();
    
    expect(data.success).toBeTruthy();
});