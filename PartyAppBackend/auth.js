const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Token aus Header extrahieren
  if (!token) {
    return res.status(401).json({ message: 'Kein Token bereitgestellt' });
  }

  try {
    const decoded = jwt.verify(token, 'dein-geheimer-schlüssel'); // Geheimer Schlüssel für JWT
    req.user = decoded; // Benutzer-ID im Request speichern
    next();
  } catch (err) {
    res.status(401).json({ message: 'Ungültiger Token' });
  }
};

module.exports = authenticate;
