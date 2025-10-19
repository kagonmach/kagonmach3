// 🔧 ここを自分のFirebase設定に書き換えてね！
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Firebase初期化
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// DOM取得
const postsDiv = document.getElementById("posts");
const submitBtn = document.getElementById("submitBtn");
const postText = document.getElementById("postText");