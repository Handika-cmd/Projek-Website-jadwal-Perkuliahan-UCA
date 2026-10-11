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