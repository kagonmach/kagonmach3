<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAz9_Qiy4pTBaRuMI1cYWwzo1FZBjn0XeM",
    authDomain: "post-plattform.firebaseapp.com",
    databaseURL: "https://post-plattform-default-rtdb.firebaseio.com",
    projectId: "post-plattform",
    storageBucket: "post-plattform.firebasestorage.app",
    messagingSenderId: "223979841983",
    appId: "1:223979841983:web:5df5c99ff864c4c6f6590a",
    measurementId: "G-YLJGLQ5VB1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
