const uuid = require('uuid');

function validateCreateUpvoteCoordinatorProps(props) {
    const errors = []

    if (typeof(props.userId) === 'undefined') errors.push('userId is required');
    else if (typeof(props.userId) !== 'string') errors.push('userId must be a string');

    if (props.guestId && typeof(props.guestId) !== 'string') errors.push('guestId must be a string');
    
    if (typeof(props.guideId) === 'undefined') errors.push('guideId is required');
    else if (typeof(props.guideId) !== 'string') errors.push('guideId must be a string');

    if (errors.length === 0) {
        return {
            success: true
        };
    } else {
        return {
            success: false,
            validationErrors: errors
        };
    }
}

// TODO: should I do I/O at the coordinator strictly? I chose to be fuzzy with
// that rule here.
function buildNewUpvote(props) {
    return {
        id: uuid.v4(),
        createdAt: new Date(),
        userId: props.userId,
        guestId: props.guestId,
        guideId: props.guideId
    }
}

function createInsertUpvoteCommand(upvote) {
    return {
        sql: 'INSERT INTO upvote (id, user_id, guest_id, guide_id, created_at) VALUES ($1, $2, $3, $4, $5)',
        params: [upvote.id, upvote.userId, upvote.guestId, upvote.guideId, upvote.createdAt]
    }
}

module.exports = {
    validateCreateUpvoteCoordinatorProps,
    buildNewUpvote,
    createInsertUpvoteCommand
}