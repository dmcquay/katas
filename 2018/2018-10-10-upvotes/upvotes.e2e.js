const fetch = require('isomorphic-fetch');
const uuid = require('uuid');

const TEST_BASE_URL = 'http://localhost:3000';

test('POST /upvotes when userId provide should return the created upvote', async () => {
    const userId = uuid.v4();
    const guestId = uuid.v4();
    const guideId = uuid.v4();

    const response = await fetch(`${TEST_BASE_URL}/upvotes`, {
        method: 'POST',
        body: JSON.stringify({userId, guestId, guideId}),
        headers: {'content-type': 'application/json; charset=utf-8'}
    });

    expect(response.ok).toBeTruthy();
    expect(response.headers.get('content-type')).toEqual('application/json; charset=utf-8');

    const data = await response.json();

    expect(data.success).toBeTruthy();
    const upvote = data.payload.upvote;
    expect(upvote.userId).toEqual(userId);
    expect(upvote.guestId).toEqual(guestId);
    expect(upvote.guideId).toEqual(guideId);
    expect(upvote.id).toBeDefined();
    expect(upvote.createdAt).toBeDefined();
});