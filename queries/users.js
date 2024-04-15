const db = require("../db/dbConfig");
/**
 * Finds a user by their username.
 * @param {string} username - The username of the user to find.
 * @returns {Promise<object|null>} The user object if found, otherwise null.
 */
const findUserByUsername = async (username) => {
  try {
    const query = "SELECT * FROM users WHERE username = $1";

    
    const user = await db.oneOrNone(query, username);

    return user;
  } catch (error) {
    console.error("Error finding user by username:", error);
    throw error;
  }
};

const createUser = async ({ username, email, password_hash}) => {
  const newUser = await db.one("INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING * " ,[username, email, password_hash]
    );
  // const newUser = await db.one(query, [username, id, first_name, last_name, location, email, password_hash, created_at, member_since]);
  return newUser;
};

module.exports = {
  findUserByUsername,
  createUser,
};
