$('.ui.form')
  .form({
    fields: {
        name: {
            identifier  : 'name',
            rules: [
              {
                type   : 'empty',
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
            type   : 'minLength[8]',
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
function setData(form) { 
    sessionStorage.setItem("form_name", document.getElementById('name').value); 
    sessionStorage.setItem("form_email", document.getElementById('emaill').value); 
    sessionStorage.setItem("form_telefone", document.getElementById('telefone').value); 
    sessionStorage.setItem("form_assunto", document.getElementById('assunto').value); 
    sessionStorage.setItem("form_mensagem", document.getElementById('mensagem').value);

}

function getData() {
    document.getElementById('name').value = sessionStorage.getItem("form_name");
    document.getElementById('emaill').value = sessionStorage.getItem("form_email");
    document.getElementById('telefone').value = sessionStorage.getItem("form_telefone");
    document.getElementById('assunto').value = sessionStorage.getItem("form_assunto");
    document.getElementById('mensagem').value = sessionStorage.getItem("form_mensagem");
}