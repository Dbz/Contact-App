window.onload = function() {
  window.currentForm = document.getElementById('add-contact-form');
  
  
  document.getElementById('import-contacts-button').addEventListener('click', function(event) {
    display('import-contacts-form');
  });
  
  document.getElementById('add-contact-button').addEventListener('click', function(event) {
    display('add-contact-form');
  });
  
  document.getElementById('export-contacts-button').addEventListener('click', function(event) {
    display('export-contacts-form');
  });
}

function display(form) {
  if(window.currentForm.id != form) {
    window.currentForm.classList.add('hide');
    window.currentForm = document.getElementById(form);
    window.currentForm.classList.remove('hide');
  }
}