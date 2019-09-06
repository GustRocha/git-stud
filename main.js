function mudarcor(cor){
    var elemento = document.getElementById('texto');
    elemento.style.color = cor;
    
}

function valida(){
    var nome = document.getElementById('nome');
    var chaves = ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Ashe', 'Aurelion', 'Azir', 'Bard', 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Camille', 'Cassiopeia', 'ChoGath', 'Corki', 'Darius', 'Diana', 'Dr. Mundo', 'Draven', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves'];
    var item = document.getElementById('nome').value;
    if (chaves.indexOf(item) != -1) {
      alert("O Campãe escolhido é: " + (nome.value));
    } 
    else {
      alert("Coloque um campãe valido!");
    }
  }