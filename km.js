//dom
const distancia = document.querySelector('#distancia')
const rendimento = document.querySelector('#rendimento')
const preco = document.querySelector('#preco')
const btn = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')


//funções


btn.addEventListener('click' , () => {
   
    
    n1 = Number(distancia.value)
    n2 = Number(preco.value)
    n3 = Number(rendimento.value)
    
   
    fim = (n1/n3) * n2
 
    resultado.textContent = `Total de gastos para realizar a viagem: ${fim.toFixed(2)}`   
    
     
     
 
 })
