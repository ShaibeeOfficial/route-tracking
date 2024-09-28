// functions/src/sendNotifications.ts
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const sendNotifications = functions.https.onRequest(async (req, res) => {
  try {
    const tokensSnapshot = await admin.firestore().collection('Users').get();
    const tokens = tokensSnapshot.docs.map(doc => {
      const token = doc.data().token;
      console.log('Retrieved token:', token); // Log the token
      return token;
    });

    console.log('All tokens:', tokens); // Log all tokens

    const payload = {
      notification: {
        title: 'Your Title',
        body: 'Your Message',
      },
    };

    await admin.messaging().sendToDevice(tokens, payload);

    res.status(200).send('Notifications sent successfully');
  } catch (error) {
    console.error('Error sending notifications:', error);
    res.status(500).send('Error sending notifications');
  }
});
