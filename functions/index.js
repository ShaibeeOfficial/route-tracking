const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.sendNotification = functions.https.onRequest(async (req, res) => {
  const { message, title } = req.body;

  try {
    const tokensSnapshot = await admin.firestore().collection('users').get();
    const tokens = tokensSnapshot.docs.map((doc) => doc.data().fcmToken);

    const payload = {
      notification: {
        title: title,
        body: message,
      },
    };

    await admin.messaging().sendToDevice(tokens, payload);
    res.status(200).send('Notification sent successfully');
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).send('Error sending notification');
  }
});
