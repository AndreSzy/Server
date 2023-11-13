document.getElementById('cadastroCachorro').addEventListener('submit', function(event){
    event.preventDefault();
    
    var nomePet = document.getElementById('nomePet').value;
    var nomeDono = document.getElementById('nomeDono').value;
    var idadeCachorro = document.getElementById('idadeCachorro').value;
    var vacinado = document.getElementById('vacinado').checked;

    fetch('http://localhost:3000/cadastrar-cachorro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nomePet: nomePet,
            nomeDono: nomeDono,
            idadeCachorro: idadeCachorro,
            vacinado: vacinado
        })
    })
    .then(response => response.json())
    .then(data => alert('Pet cadastrado com sucesso!'))
    .catch(error => console.error('Erro ao cadastrar:', error));
});
