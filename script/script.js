let btnLogin = document.querySelector('#botaoLogin');

        btnLogin.addEventListener('click', function() {
            let loginInput = document.querySelector('#inputLogin');
            let senhaInput = document.querySelector('#inputSenha');
            let mensagemDiv = document.querySelector('#mensagem');

            if (loginInput.value === '' || senhaInput.value === '') {
                mensagemDiv.innerHTML = `<div class='div-msg red'>
                                            <span>Preencha todos os campos!</span>
                                        </div>`;
            } else {
                mensagemDiv.innerHTML = `<div class='div-msg'>
                                            <span>Login efetuado com sucesso!</span>
                                        </div>`;
            }

            setTimeout(() => {
                mensagemDiv.innerHTML = ''; 
            }, 3000);

            loginInput.value = '';
            senhaInput.value = '';
        });
