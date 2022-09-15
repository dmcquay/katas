const {
    validateCreateUpvoteCoordinatorProps, 
    buildNewUpvote, 
    createInsertUpvoteCommand
} = require('./upvotes-coordinators-utils');
const {query} = require('./db');
const {success} = require('./failable');

async function createUpvoteCoordinator(props) {
    const validationFailable = validateCreateUpvoteCoordinatorProps(props);
    if (!validationFailable.success) return validationFailable;

    const upvote = buildNewUpvote(props);
    const insertCommand = createInsertUpvoteCommand(upvote);

    const insertFailable = await query(insertCommand);
    if (!insertFailable.success) return insertFailable;

    return success({upvote});
}

module.exports = {
    createUpvoteCoordinator
}