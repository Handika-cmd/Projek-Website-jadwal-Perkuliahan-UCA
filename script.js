// Elemen tombol View Pengembang & modalnya (Matero Hari 12 - DOM Selection)
const btnProfil = document.getElementById("btn-profil");
const modalProfil = document.getElementById('modal-profil');

btnProfil.addEventListener("click", function(){
  modalProfil.classList.remove("hidden");
});

modalProfil.addEventListener("click", function(e){

  if ( e.target === modalProfil){
    modalProfil.classList.add("hidden");
  }
});

// Elemen tombol login & modalnya (Materi Hari 12 - DOM Selection)
const btnLogin = document.getElementById('btn-login');
const modalLogin = document.getElementById('modal-login');

btnLogin.addEventListener("click", function(){
  modalLogin.classList.remove("hidden");
});

modalLogin.addEventListener("click", function(e){

  if(e.target === modalLogin){
    modalLogin.classList.add("hidden");
  }
});

// Ambil elemen search panel dan tombol-tombolnya
const tombolCari = document.querySelector('#tombol-cari');
const searchPanel = document.querySelector('#search-panel');
const tutupSearch = document.querySelector('#tutup-search');

// Klik ikon 🔍 → panel muncul/sembunyi
tombolCari.addEventListener('click', (e) => {
    e.stopPropagation(); // ← cegah klik ini nyebar ke document
    searchPanel.classList.toggle('aktif');
});

// Klik tombol X → panel sembunyi
tutupSearch.addEventListener('click', () => {
    searchPanel.classList.remove('aktif');
});

// Klik di luar panel → panel sembunyi
document.addEventListener('click', (e) => {
    if (!searchPanel.contains(e.target)) {
        searchPanel.classList.remove('aktif');
    }
});