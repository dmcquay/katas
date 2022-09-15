const {
    validateCreateUpvoteCoordinatorProps, 
    createInsertUpvoteCommand, 
    buildNewUpvote
} = require('./upvotes-coordinators-utils');

describe('validateCreateUpvoteCoordinatorProps', () => {
    test('when all fields are valid, returns a success with no payload', () => {
        const props = {
            userId: 'test-user-id',
            guestId: 'test-guest-id',
            guideId: 'test-guide-id'
        }
        const resultFailable = validateCreateUpvoteCoordinatorProps(props);
        expect(resultFailable).toEqual({
            success: true
        })
    });

    test('when all fields are invalid, returns a faliure with error details', () => {
        const props = {
            userId: 5,
            guestId: 5,
            guideId: 5
        }
        const resultFailable = validateCreateUpvoteCoordinatorProps(props);
        expect(resultFailable).toEqual({
            success: false,
            validationErrors: [
                'userId must be a string',
                'guestId must be a string',
                'guideId must be a string'
            ]
        })
    });

    test('when required fields are missing, returns a faliure with error details', () => {
        const props = {}
        const resultFailable = validateCreateUpvoteCoordinatorProps(props);
        expect(resultFailable).toEqual({
            success: false,
            validationErrors: [
                'userId is required',
                'guideId is required'
            ]
        })
    });
});

describe('buildNewUpvote', () => {
    test('should add id and createdAt to given props, ignoring invalid props', () => {
        const props = {
            userId: 'test-user-id',
            guestId: 'test-guest-id',
            guideId: 'test-guide-id',
            invalidShouldBeIgnored: 'some value'
        }
        const actual = buildNewUpvote(props);
        expect(Object.keys(actual).length).toEqual(5);
        expect(actual.userId).toEqual(props.userId);
        expect(actual.guestId).toEqual(props.guestId);
        expect(actual.guideId).toEqual(props.guideId);
        expect(actual.id).toBeDefined();
        expect(actual.createdAt).toBeInstanceOf(Date);
    });
});

describe('createInsertUpvoteCommand', () => {
    test('should generate the correct SQL and parameters', () => {
        const upvote = {
            id: 'test-upvote-id',
            userId: 'test-user-id',
            guestId: 'test-guest-id',
            guideId: 'test-guide-id',
            createdAt: new Date()
        }
        const expected = {
            sql: 'INSERT INTO upvote (id, user_id, guest_id, guide_id, created_at) VALUES ($1, $2, $3, $4, $5)',
            params: [upvote.id, upvote.userId, upvote.guestId, upvote.guideId, upvote.createdAt]
        }
        const actual = createInsertUpvoteCommand(upvote);
        expect(actual).toEqual(expected);
    })
});