const btnProfil = document.getElementById('btn-profil');
const modalProfil = document.getElementById('modal-profil');

btnProfil.addEventListener('click', function() {

  modalProfil.classList.remove('hidden');
});

modalProfil.addEventListener('click', function(e) {

  if (e.target === modalProfil) {
    modalProfil.classList.add('hidden');
  }
});