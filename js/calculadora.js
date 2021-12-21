let resultado = document.getElementById('inputext');

let calculando = (number) => {
    resultado.value+=number;
}

let Resultado = () => {
  try{
    resultado.value = eval(resultado.value)
  }

  catch(err){
    alert('Ingresa un input valido');
  }
}

function clr () {
  resultado.value = "1";
}

function del () {
  resultado.value = resultado.value.slice(0, -1);
}