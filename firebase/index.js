async function firebase_connection(){
    const firebaseConfig = {
        apiKey: "AIzaSyAVuaP275vdl0vj2stJsaN5E0dnMU952B8",
        authDomain: "ecom-web-c3b02.firebaseapp.com",
        projectId: "ecom-web-c3b02",
        storageBucket: "ecom-web-c3b02.appspot.com",
        messagingSenderId: "928377267765",
        appId: "1:928377267765:web:44c30506beec93037c337c",
        measurementId: "G-10GT9P9WRJ"
      };
      await firebase.initializeApp(firebaseConfig);
      console.log('firebase is connected sucessfully')
}

firebase_connection()