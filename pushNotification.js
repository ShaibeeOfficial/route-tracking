import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';

// Request permissions (iOS only)
messaging().requestPermission();

const channelId = 'default-channel-id'; // Replace with your desired channel ID

// Configure PushNotification
PushNotification.configure({
  // Called when a notification is opened or received
  onNotification: function (notification) {
    console.log('LOCAL NOTIFICATION ==>', notification);
  },
  // Request permissions on iOS
  requestPermissions: Platform.OS === 'ios',
});

// Create a channel (necessary for Android)
PushNotification.createChannel(
  {
    channelId: channelId, // Replace with your channel ID
    channelName: 'Default Channel', // Replace with your channel name
    channelDescription: 'A default channel', // (optional) default: undefined.
    soundName: 'default', // (optional) default: 'default' (for built-in sound)
    importance: 4, // (optional) default: 4. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
  },
  (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);

// Function to show a local notification
export const showLocalNotification = (title, message) => {
  PushNotification.localNotification({
    channelId: channelId,
    title: title,
    message: message,
  });
};
