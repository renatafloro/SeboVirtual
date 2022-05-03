var urlBase = "http://localhost:3000/clientes"
class Cliente {
    constructor(id, nome, email, cpf, nascimento, senha) {
        this.id = id
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.nascimento = nascimento
        this.senha = senha
    }

    salvar() {
        fetch(urlBase,
            {
                method: 'POST',
                body: JSON.stringify(this),
                headers: {
                        'Content-type' : 'Application/json'
                }

            })
            .catch(erro => console.log(erro))

    }
            consultarTodos(display){
                fetch(urlBase)
                    .then(x=>x.text())
                    .then(data=>display(data))
            }

            consultarPeloId(idcliente, display){
                fetch(`${urlBase}/${idcliente}`)
                    .then(x=>x.text())
                    .then(data=>display(data))
            }

            update(){
                fetch(`${urlBase}/${this.id}`,{
                    method:'PUT',
                    body:JSON.stringify(this),
                    headers:{'Content-type': 'Application/json'}
                })
            }

            excluir(idcliente){
                fetch(`${urlBase}/${idcliente}`,{
                    method:'DELETE',
                })
            }
}


