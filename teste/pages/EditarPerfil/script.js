document.addEventListener("DOMContentLoaded", function() {
    const fotoPerfilInput = document.getElementById("foto-perfil");
    const fotoPreview = document.getElementById("foto-preview");
    const nomeUsuario = document.getElementById("nome-usuario");
  
    fotoPerfilInput.addEventListener("change", function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          fotoPreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  
    const formPerfil = document.getElementById("form-perfil");
    formPerfil.addEventListener("submit", function(event) {
      event.preventDefault();
      // Aqui você pode adicionar lógica para enviar os dados do formulário para o backend
      // (por exemplo, usando AJAX ou Fetch API).
    });
  });