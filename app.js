

/*Desafio - criar uma funcao callback chamada servicosPrestados que tenha como dois servicos: 
dar banho no pet e tosar o pet
sendo assim teremos sempre que passar um pet da nossa lista de pets e tambem um servico que aquele pet ira utilzar
servicosPrestados(pets[0].nome, darBanhoNoPet)
servicosPrestados(pets[0].nome, tosarPet)Deveremos executar um aviso dentro das funcoes callback darBanhoNoPet e tosarPet, como o exemplo abaixo:
  console.log(O servico de tomar banho foi realizado com sucesso no pet + yoshi)
  console.log(O servico de tosa foi realizado com sucesso no pet  + yoshi)Terá que ser criada uma nova propriedade dentro de cada pet chamada servicos que armazene todos servicos realizados.
  */

  pets = [{nome: 'Toto', tipo:'cachorro', raça:'viralata', idade: 3, genero:'macho', vacina:true, servicos:[]},
          {nome: 'Gamarra', tipo:'gato', raça:'siames', idade: 3, genero:'macho', vacina:false, servicos:[]}];

function servicosPrestados(nome, services) {
    services(nome); 
    console.log(pets);
}
function banho(nome){
  dt = new Date;
  pets.servicos.push('banho na data' + dt.getDay() );
  console.log("Banho Realizado com Sucesso em "+pets[0].nome)
 };

function tosa(nome) {
  pets.servicos.push('tosa ba data' + dt.getDay())
  console.log("Tosa Realizada com sucesso em "+pets[0].nome)
}

servicosPrestados(pets[0],banho)
servicosPrestados(pets[0],tosa)



