function limpiarTabla() {
  document.getElementById("tabla").innerHTML = "";
}

function obtenerValorInput(idInput) {
  return Number(document.getElementById(idInput).value);
}

function mostrarAlerta(mensaje) {
  alert(mensaje);
}

function calcularCuotas(capital, cuotas, interes) {
  let cuotasTabla = "";
  let cuotaCapital = capital / cuotas;
  let interesMensual = (capital * interes) / 100 / cuotas;
  let cuotaTotal = cuotaCapital + interesMensual;
  
  for (let i = 1; i <= cuotas; i++) {
    cuotasTabla += `
      <tr>
        <td>${i}</td>
        <td>${cuotaCapital.toFixed(2)}</td>
        <td>${interesMensual.toFixed(2)}</td>
        <td>${cuotaTotal.toFixed(2)}</td>
      </tr>
    `;
  }
  
  return {
    cuotasTabla,
    sumaCapital: capital.toFixed(2),
    sumaInteres: (interesMensual * cuotas).toFixed(2),
    sumaTotal: (cuotaTotal * cuotas).toFixed(2)
  };
}

function mostrarResultado(cuotas) {
  document.getElementById("tabla").innerHTML = cuotas.cuotasTabla;
  document.getElementById("t1").innerHTML = cuotas.sumaCapital;
  document.getElementById("t2").innerHTML = cuotas.sumaInteres;
  document.getElementById("t3").innerHTML = cuotas.sumaTotal;
}




const popup = document.getElementById("popup");
const inputName = document.getElementById("input-name");
const inputDesc = document.getElementById("input-desc");
const submitName = document.getElementById("submit-name");
const titleName = document.getElementById("title-name");
const domDesc = document.getElementById("dom-desc");
const labelDesc = document.getElementById("label-desc");
submitName.addEventListener("click", function() {
  const name = inputName.value;
  const desc = inputDesc.value;
  titleName.innerHTML = "Bienvenido "+name
  domDesc.value = desc
  buscoDescuento(desc)
  popup.style.display = "none";
});

popup.style.display = "flex";

function calcular() {
  const desc = domDesc.value;
  const descuento = buscoDescuento(desc)
  const capital = obtenerValorInput("capital");
  const cuotas = obtenerValorInput("couta");
  const interes = obtenerValorInput("interes")-descuento ;

  if (capital > 0) {
    const cuotasCalculadas = calcularCuotas(capital, cuotas, interes);
    mostrarResultado(cuotasCalculadas);
  } else {
    mostrarAlerta("Ingrese un número válido");
  }
}


let codigosDescuento =[
{
codigo: "D5",  
descuento: 5
},
{
  codigo: "D10",  
  descuento: 10
  },
{
  codigo: "D15",  
  descuento: 15
  },  
{
    codigo: "D20",  
    descuento: 20
    }
]
domDesc.addEventListener("input", function() {
  
  let descuento = domDesc.value 
  let buscoCod = codigosDescuento.filter(x => x.codigo == descuento )
  if(buscoCod.length > 0) {
  labelDesc.innerHTML = "Codigo de descuento verificado"
  } else{
    labelDesc.innerHTML = "Codigo de descuento no verificado"  
  }

});

function buscoDescuento(desc) { 
  let buscoCod = codigosDescuento.filter(x => x.codigo == desc)
  if(buscoCod.length > 0) {
  labelDesc.innerHTML = "Codigo de descuento verificado"
 let num = buscoCod[0].descuento
return num
} else{
    labelDesc.innerHTML = "Codigo de descuento no verificado"  
return 0
  }
 
  
};



