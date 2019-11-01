import React, { Fragment, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import firebase from 'firebase';
import OAuthManager from 'react-native-oauth';

const App = () => {

  useEffect(() => {
    const manager = new OAuthManager('Comment');
    "bearer db32a81edfdc8b0d029b0ea79a2008f8be7791b4"
    manager.configure({
      github: {
        client_id: '8dea1854dac20e642d18',
        client_secret: '975c08413862b7af39d6fae6232953d9d35e95b5'
      }
    });

    manager.authorize('github', { scopes: 'gist' })
      .then(resp => console.log('Your users ID', resp))
      .catch(err => console.log('There was an error'));
    // firebase.initializeApp({
    //   apiKey: "AIzaSyCwhWG1V_dRx9RhdY9eQYXpH0SaDTHneZA",
    //   authDomain: "gists-comments.firebaseapp.com",
    //   databaseURL: "https://gists-comments.firebaseio.com",
    //   projectId: "gists-comments",
    //   storageBucket: "gists-comments.appspot.com",
    //   messagingSenderId: "642308235175",
    //   appId: "1:642308235175:web:032a99f5935e7e7003e082",
    //   measurementId: "G-4GT3KM53FS"
    // });

    // var provider = new firebase.auth.GithubAuthProvider();
    // provider.addScope('gists');

    // fetch("https://github.com/login/oauth/authorize")



    // https://github.com/login/oauth/authorize
    // firebase.auth().signInWithPopup(provider).then(function (result) {
    //   // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    //   var token = result.credential.accessToken;
    //   console.log(token)
    //   // The signed-in user info.
    //   var user = result.user;
    //   // ...
    // }).catch(function (error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // });
  })
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>

      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
