import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import firestore from '@react-native-firebase/firestore';


// Request permissions (iOS only)
messaging().requestPermission();
const channelId = 'adhd-channel-id'; // Replace with your desired channel ID
export const fetchTokensFromFirestore = async () => {
    try {
      const tokensSnapshot = await firestore().collection('users').get();
      const tokens = tokensSnapshot.docs.map((doc) => doc.data().fcmToken);
      return tokens;
    } catch (error) {
      console.error('Error fetching tokens from Firestore:', error);
      return [];
    }
  };

// Listen for incoming messages
messaging().onMessage(async remoteMessage => {
    // Handle the message here
    console.log('Received a new notification', JSON.stringify(remoteMessage));
});
// export async function requestUserPermission() {
//     // PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//         authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     if (enabled) {
//         console.log('Authorization status:', authStatus);
//         getToken()
//     }
// }



export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        const FCMToken = await getToken();
        if (FCMToken) {
            // Now you can use FCMToken to make an API call
            console.log('FCM Token:', FCMToken);
            // Make API call with FCMToken
        }
    }
}



// Create a channel
PushNotification.createChannel(
    {
        channelId,
        channelName: 'My Channel',
        channelDescription: 'My Channel Description',
        soundName: 'default',
        importance: 4, // Importance level from 1 to 5 (5 being the highest)
        vibrate: true,
    },
    created => console.log(`createChannel returned '${created}'`) // Optional callback
);



// Handle notifications when the app is in the background or terminated
messaging()
    .getInitialNotification()
    .then(remoteMessage => {
        if (remoteMessage) {
            // Handle the initial notification
            console.log('Opened app from notification', JSON.stringify(remoteMessage));
        }
    });
export const NotificationListener = async () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
    });
    messaging().onMessage(async remoteMessage => {
        console.log("received in foreground", remoteMessage)
        PushNotification.localNotification({
            channelId, // Set the channel ID for Android
            message: remoteMessage.notification.body,
            playSound: false, // Disable the default sound
        });
    })
    messaging().getInitialNotification().then(remoteMessage => {
        if (remoteMessage) {
            console.log(
                'Notification caused app to open from quit state:',
                remoteMessage.notification,
            );
        }
    });
    messaging().setBackgroundMessageHandler(async remoteMessage => {
        if (remoteMessage) {
            console.log(
                'Notification caused app to open from quit state:',
                remoteMessage,
            );
        }
    })
}





// // const admin = require('./firebase');
// import messaging from '@react-native-firebase/messaging';
// import PushNotification from 'react-native-push-notification';
// const iconUrl = 'https://life-defener-media.s3.eu-north-1.amazonaws.com/logo.png';
// import Sound from 'react-native-sound';

// const sendPushNotification = async (token, message, title) => {
//     const notification = {
//         token: token,
//         notification: {
//             title: title,
//             body: message,
//         },
//     };
//     const soundFile = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (error) => {
//         if (error) {
//             console.log('Failed to load sound:', error);
//         }
//     });
//     const channelId = 'my-channel-id'; // Replace with your desired channel ID

//     // Create a channel
//     PushNotification.createChannel(
//       {
//         channelId,
//         channelName: 'My Channel',
//         channelDescription: 'My Channel Description',
//         soundName: 'default',
//         importance: 4, // Importance level from 1 to 5 (5 being the highest)
//         vibrate: true,
//       },
//       created => console.log(`createChannel returned '${created}'`) // Optional callback
//     );
//     try {
//         await messaging().getInitialNotification(notification);
//         console.log('Notification sent successfully');
//         PushNotification.localNotification({
//             channelId, // Set the channel ID for Android
//             message: notification,
//             playSound: true, // Disable the default sound
//         });
//         soundFile.play((success) => {
//             if (!success) {
//                 console.log('Failed to play sound');
//             }
//         });
//         messaging().setBackgroundMessageHandler(notification)
//         // messaging().onNotificationOpenedApp(notification => {
//         //     console.log(
//         //         'Notification caused app to open from background state:',
//         //         notification.notification,
//         //     );
//         //     soundFile.play((success) => {
//         //         if (!success) {
//         //             console.log('Failed to play sound');
//         //         }
//         //     });
//         // });
//         // messaging().onMessage(console.log("received in foreground", notification))
//         // PushNotification.localNotification({ channelId, message: notification, playSound: true })
//     } catch (error) {
//         console.log('Error sending notification:', error);
//     }
// };

// module.exports = {sendPushNotification}