let consultaCep = async ()  => {
    let cep = document.querySelector('#cep').value;

    if(cep.length != 8) {
        alert('CEP invalido, o cep precisa ter 8 digitos')
        return
    } 
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    let response = await fetch(url);
    let data = await response.json();
    
    mostrarLocalizacao(data);
}

const mostrarLocalizacao = (data) => {
    let nomeLocalizacao = document.querySelector('.nome-localizacao');

    if (data.erro) {
        
        nomeLocalizacao.innerHTML = 'CEP não encontrado';
    } else {
        nomeLocalizacao.textContent = data.localidade;
    }
}
