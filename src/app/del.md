
curl -X POST -d '{
    "author": "alanisawesome",
    "title": "The Turing Machine"
  }' 'https://ng-test-a84d6.firebaseio.com/rest/saving-data/fireblog/posts.json'


  curl -X POST -d '{"user_id" : "jack", "text" : "Ahoy!"}' \
  ' https://ng-test-a84d6.firebaseio.com/'


  https://ng-test-a84d6.firebaseio.com/



  <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.0.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAG76gxy3jEV_naflBlxDMUcXxse5odhLg",
    authDomain: "ng-test-a84d6.firebaseapp.com",
    databaseURL: "https://ng-test-a84d6.firebaseio.com",
    projectId: "ng-test-a84d6",
    storageBucket: "ng-test-a84d6.appspot.com",
    messagingSenderId: "246058950642",
    appId: "1:246058950642:web:ddaaba36711ee052"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>



    // var config = {
    //        apiKey: "AIzaSyAG76gxy3jEV_naflBlxDMUcXxse5odhLg",
    //       authDomain: "ng-test-a84d6.firebaseapp.com",
    //       // authDomain: "http://localhost:4433/",
    //       databaseURL: "https://ng-test-a84d6.firebaseio.com",
    //       projectId: "ng-test-a84d6",
    //       storageBucket: "ng-test-a84d6.appspot.com",
    //       messagingSenderId: "246058950642",
    //       appId: "1:246058950642:web:ddaaba36711ee052"
    //     }; 
    //     initializeApp(config); 