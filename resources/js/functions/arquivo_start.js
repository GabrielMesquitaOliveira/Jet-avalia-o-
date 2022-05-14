$('.ui.form')
  .form({
    fields: {
        name: {
            identifier  : 'name',
            rules: [
              {
                type   : 'empty',
                prompt : 'insira um nome válido'
              },
              {
                type   : 'text',
                prompt : 'insira um nome válido'
              }
            ]
          },

      email: {
        identifier  : 'email',
        rules: [
          {
            type   : 'email',
            prompt : 'insira um email válido'
          }
        ]
      },
      tel: {
        identifier  : 'telefone',
        rules: [
          {
            type   : 'number',
            prompt : 'insira um telefone válido'
          },
          {
            type   : 'minLength[9]',
            prompt : 'insira um telefone válido'
          },
          {
            type   : 'maxLength[11]',
            prompt : 'insira um telefone válido'
          }
        ]
      },
      empty: {
        identifier  : 'assunto',
        rules: [
          {
            type   : 'empty',
            prompt : 'insira um assunto válido'
          }
        ]
      },
      mensagem: {
        identifier  : 'mensagem',
        rules: [
          {
            type   : 'empty',
            prompt : 'insira uma mensagem'
          }
        ]
      },

    }
  })
;


function getData() {
    document.getElementById('name').value = sessionStorage.getItem("form_name");
    document.getElementById('emaill').value = sessionStorage.getItem("form_email");
    document.getElementById('telefone').value = sessionStorage.getItem("form_telefone");
    document.getElementById('assunto').value = sessionStorage.getItem("form_assunto");
    document.getElementById('mensagem').value = sessionStorage.getItem("form_mensagem");
}

function setForm(){

  document.getElementById('name2').value = document.getElementById('name').value;
  document.getElementById('emaill2').value = document.getElementById('emaill').value;
  document.getElementById('telefone2').value = document.getElementById('telefone').value;
  document.getElementById('assunto2').value = document.getElementById('assunto').value;
  document.getElementById('mensagem2').value = document.getElementById('mensagem').value;

}

function setData(form) { 

  sessionStorage.setItem("form_name", document.getElementById('name').value); 
  sessionStorage.setItem("form_email", document.getElementById('emaill').value); 
  sessionStorage.setItem("form_telefone", document.getElementById('telefone').value); 
  sessionStorage.setItem("form_assunto", document.getElementById('assunto').value); 
  sessionStorage.setItem("form_mensagem", document.getElementById('mensagem').value);
}
