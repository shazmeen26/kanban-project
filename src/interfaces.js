// Ticket object shape
/**
 * @typedef {Object} Ticket
 * @property {string} id - The unique identifier for the ticket
 * @property {string} title - The title of the ticket
 * @property {Array<string>} tag - An array of tags associated with the ticket
 * @property {string} userId - The ID of the user assigned to the ticket
 * @property {string} status - The current status of the ticket
 * @property {number} priority - The priority level of the ticket
 */

// User object shape
/**
 * @typedef {Object} User
 * @property {string} id - The unique identifier for the user
 * @property {string} name - The name of the user
 * @property {boolean} available - Indicates if the user is available
 */

// Column object shape
/**
 * @typedef {Object} Col
 * @property {Array<Ticket>} col - An array of tickets in the column
 */

// UserIdToData object shape
/**
 * @typedef {Object} UserIdToData
 * @property {Record<string, User>} userData - A mapping of user IDs to User objects
 */
