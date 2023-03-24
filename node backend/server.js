var admin = require("firebase-admin");

var serviceAccount = require("./test-app-fcm-91d3f-firebase-adminsdk-i5ms7-9fba00c834.json");

admin.initializeApp({
  	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://prismappfcm.firebaseio.com"
});
var topic = 'general';

var message = {
  notification: {
    title: 'message from beckend ',
    body: "i'm first notification"
  },
  topic: topic
};

// Send a message to devices subscribed to the provided topic.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
});
