//document.write('Tu będzie wynik działania funkcji')
/*
function writeName(){
    document.write('<p>Hello World!</p>')
}

writeName()

function writeNamewithParameters(userName){
    document.write('<p>Hello ${userName}</p>')
}

writeNamewithParameters('Gienek')
writeNamewithParameters('Józef')
writeNamewithParameters('Mściwój')

function writeNamewithParameters(userName){
    const text = '<p>Hello ${userName}</p>'

    return (text)
}

document.write(writeNamewithParameters('Gienek'))
document.write(writeNamewithParameters('Józef'))
document.write(writeNamewithParameters('Mściwój'))

function przywitaj(powitanie, imię) {
    document.write(powitanie + ', ' + imię);
  }
  
  // Przykład użycia:
  przywitaj('Cześć', 'jak się masz?');

function writeNameWithParameter(Welcome, UserName){
    const text = 
}
*/

function przywitaj() {
    const powitanie = prompt("Wprowadź powitanie:");
    const inne = prompt("Wprowadź dodatkową informację:");
    document.write(powitanie + ', ' + inne);
  }
  
  // Wywołanie funkcji
  przywitaj();