const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

// Endpoint HTTP: /helloWorld
exports.helloWorld = functions.https.onRequest((req, res) => {
  res.json({ message: "¡Hola mundo desde Firebase Functions!" });
});
