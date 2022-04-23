const name = document.getElementById("name");
const note1 = document.getElementById("note1");
const note2 = document.getElementById("note2");
const color = document.getElementById("color")
const body = document.getElementById("body")
const btnCalculate = document.getElementById("btnCalculate")
const resul = document.getElementById("result")

btnCalculate.addEventListener("click", ValidateFields)

///////////////////////////////////////////////////////////////////////////////
function set_color(){
  body.style.backgroundColor = color.value;
}
///////////////////////////////////////////////////////////////////////////////
function  ValidateFields (event){

  event.preventDefault()
  const n1 = parseFloat(note1.value)
  const n2 = parseFloat(note2.value)


  if (n1 > 5 || n1 < 1 || n2 < 1 || n2 > 5){
    resul.style.color = 'red'
    resul.textContent = "Por favor verifique los datos ingresados"
  }else if (name.value === null || name.value === ''){
    resul.textContent = "Ingresa tu nombre"
  } else if (note1.value === null || note1.value === ''){
    resul.textContent = "Por favor Ingresa la nota 1"
  } else if (note2.value === null || note2.value === ''){
    resul.textContent = "Por favor Ingresa la nota 2"
  } else {
    CalculateNotes() 
  }

  return false;
}
///////////////////////////////////////////////////////////////////////////////
function CalculateNotes (){

  const n1 = parseFloat(note1.value)
  const n2 = parseFloat(note2.value)

  let desNote1 = n1 * 0.3
  let finalNote1 = n1 - desNote1
  let desNote2 = n2 * 0.3
  let finalNote2 = n2 - desNote2
  let thirdNote = (finalNote1 + finalNote2) / 2
  let desNote3 = thirdNote * 0.4
  let finalNote3 = thirdNote - desNote3
  let finalNote = desNote1 + desNote2 + desNote3;
  ComputeStatus(finalNote);
}
///////////////////////////////////////////////////////////////////////////////
function ComputeStatus(finalNote){

  if (finalNote >= 4 &&  finalNote <=5){

    resul.style.color="blue";
    resul.textContent = `Usted se encuentra en cuadro de honor con una nota final de  ${finalNote}`
    setTimeout(() =>{
      resul.textContent = ``
    }, 5000);

  } else if (finalNote < 4 && finalNote  >= 3.5) {

    resul.style.color="green";
    resul.textContent = `Usted ha ganado la materia con una nota final de  ${finalNote}`
    setTimeout(function(){
      resul.textContent = ``
    }, 5000);
    
    
  } else if (finalNote < 3.5 && finalNote  >= 2){

    resul.style.color="green";
    resul.textContent = `Usted puede llegar a perder la materia con una nota final de  ${finalNote} es posible recuperar`
    setTimeout(function(){
      resul.textContent = ``
    }, 5000);
    

  } else if (finalNote < 2 ){
    resul.style.color="red";
    resul.textContent = `Usted ha perdido la materia con una nota final de  ${finalNote}`
    setTimeout(function(){
      resul.textContent = ``
    }, 5000);
    
  }
}
///////////////////////////////////////////////////////////////////////////////