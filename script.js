function validacao(){
    var cpf = document.getElementById('cpf').value
    var senha = document.querySelector('#senha').value
    console.log(cpf)
    if(!cpf){
      alert('Coloque um cpf válido')
    }
    else{
        if(!senha){
        alert('Coloque uma senha válida')
        }
        else{
            alert('Cadastro feito')
        }
    }
  
}
