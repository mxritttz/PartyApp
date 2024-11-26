// Beispiel-Middleware für Authentifizierung
module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'Kein Token bereitgestellt' });

  // Dummy-Validierung
  if (token === 'test-token') {
    next();
  } else {
    res.status(401).json({ message: 'Ungültiger Token' });
  }
};