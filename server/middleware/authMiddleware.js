// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//   const token = req.header('Authorization');

//   if (!token) return res.status(401).json({ message: 'Unauthorized' });
  
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Retrieve the Authorization header
  const authHeader = req.header('Authorization');

  // Check if there's no Authorization header
  if (!authHeader) return res.status(401).json({ message: 'Unauthorized: No token provided' });

  // Extract the token by splitting the "Bearer <token>" string
  const token = authHeader.split(' ')[1];

  // Check if there's no token after "Bearer"
  if (!token) return res.status(401).json({ message: 'Unauthorized: Token missing' });

  try {
    // Verify the token with the secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add decoded user data to the request object
    req.user = decoded;
    
    // Proceed to the next middleware
    next();
  } catch (error) {
    // Handle invalid token
    res.status(401).json({ message: 'Invalid token' });
  }
};
