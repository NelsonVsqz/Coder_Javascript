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

function calcular() {
  const capital = obtenerValorInput("capital");
  const cuotas = obtenerValorInput("couta");
  const interes = obtenerValorInput("interes");

  if (capital > 0) {
    const cuotasCalculadas = calcularCuotas(capital, cuotas, interes);
    mostrarResultado(cuotasCalculadas);
  } else {
    mostrarAlerta("Ingrese un número válido");
  }
}


const popup = document.getElementById("popup");
const inputName = document.getElementById("input-name");
const submitName = document.getElementById("submit-name");
const titleName = document.getElementById("title-name");

submitName.addEventListener("click", function() {
  const name = inputName.value;
  titleName.innerHTML = "Bienvenido "+name
  popup.style.display = "none";
});

popup.style.display = "flex";



