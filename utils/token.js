const jwt = require("jsonwebtoken");

function generateToken(user) {
  const payload = {
    id: user.id, // Use user's unique identifier
    username: user.username,
    email: user.email,
    //Do we need this ARRAY list [username, id, first_name, last_name, location, email, password_hash, created_at, member_since] here too??
    
    //location: user.location,
    //first_name: user.first_name,
    //last_name: user.last_name,
    //password_hash: user.password_hash,
    //created_at: user.created_at,
    //member_since: user.member_since
  };
  
  const secret = process.env.JWT_SECRET;
  const options = {
    expiresIn: "1h", // Token expires in 1 hour
  };

  return jwt.sign(payload, secret, options);
}

module.exports = { generateToken };
