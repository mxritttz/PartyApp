const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Login (Token erstellen)
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Ungültige Anmeldedaten' });
    }

    const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
    res.json({ message: 'Erfolgreich eingeloggt', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Fehler beim Login' });
  }
};

// Middleware zur Authentifizierung
exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'Kein Token bereitgestellt' });

  jwt.verify(token, 'secretkey', (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Ungültiger Token' });
    req.userId = decoded.userId;
    next();
  });
};
