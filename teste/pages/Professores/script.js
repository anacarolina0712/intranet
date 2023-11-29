document.addEventListener('DOMContentLoaded', function () {
  // Adicionar opções de professores ao modal
  const professorsList = document.getElementById('professorsList');
  const professorsDropdown = document.getElementById('professorsDropdown');
  
  professorsList.querySelectorAll('.professorCard').forEach(card => {
    const professorName = card.getAttribute('data-materia');
    const option = document.createElement('option');
    option.value = professorName;
    option.text = professorName;
    professorsDropdown.add(option);
  });

  // Modal
  const modal = document.getElementById('fileUploadModal');
  const btns = document.querySelectorAll('.sendFileBtn');
  const span = document.getElementsByClassName('close')[0];

  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      modal.style.display = 'block';
    });
  });

  span.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  // Lógica para o envio de arquivos
  const submitFileBtn = document.getElementById('submitFileBtn');
  const fileInput = document.getElementById('fileInput');

  submitFileBtn.addEventListener('click', function () {
    const selectedProfessor = professorsDropdown.value;
    const uploadedFile = fileInput.files[0];
    
    //adicionar a lógica para enviar o arquivo para o professor selecionado

    alert(`Arquivo ${uploadedFile.name} enviado para ${selectedProfessor}`);
    modal.style.display = 'none';
  });
});