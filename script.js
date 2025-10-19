// --- Firebase 設定 ---
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const $posts = document.getElementById('posts');
const escapeHtml = str => str.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');

function renderPost(doc){
  const data = doc.data();
  const div = document.createElement('div');
  div.className = 'post';
  div.dataset.id = doc.id;
  div.innerHTML = `
    <strong>${escapeHtml(data.author||'名無し')}</strong>
    <div>${escapeHtml(data.content)}</div>
    ${data.image||'' ? `<img src="${data.image}">` : ''}
    <div class="actions">
      <button class="likeBtn">👍 ${data.likes||0}</button>
      <button class="deleteBtn">削除</button>
    </div>
  `;
  $posts.prepend(div);

  div.querySelector('.likeBtn').addEventListener('click', ()=>{
    const ref = db.collection('posts').doc(doc.id);
    ref.update({likes: firebase.firestore.FieldValue.increment(1)});
  });

  div.querySelector('.deleteBtn').addEventListener('click', ()=>{
    const user = document.getElementById('author').value.trim() || '名無し';
    if(user !== (data.author||'名無し')){ alert('自分の投稿しか削除できません'); return; }
    if(confirm('本当に削除しますか？')){
      db.collection('posts').doc(doc.id).delete();
    }
  });
}

// Firestoreリアルタイム取得
db.collection('posts').orderBy('createdAt','desc').onSnapshot(snapshot=>{
  $posts.innerHTML='';
  snapshot.forEach(doc=>renderPost(doc));
});

// 画像をBase64に変換
function toBase64(file){
  return new Promise(res=>{
    if(!file) return res(null);
    const reader = new FileReader();
    reader.onload = e=>res(e.target.result);
    reader.readAsDataURL(file);
  });
}

document.getElementById('submitBtn').addEventListener('click', async ()=>{
  const author = document.getElementById('author').value.trim();
  const content = document.getElementById('content').value.trim();
  const file = document.getElementById('imageInput').files[0];
  if(!content){alert('本文を入力してください');return;}
  const image = await toBase64(file);
  await db.collection('posts').add({
    author, content, image,
    likes:0,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
  document.getElementById('content').value='';
  document.getElementById('imageInput').value='';
});
;
