//import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
admin.initializeApp();

// // Start writing Firebase Functions

//
//export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
//});
export * from './git-hook.function';

