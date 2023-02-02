function calcular(){
  document.getElementById("tabla").innerHTML="";
  let capital=Number(document.getElementById("capital").value);
  let couta=Number(document.getElementById("couta").value);
  let interes=Number(document.getElementById("interes").value);
if(capital>0){   
for(i=1;i<=couta;i++){
 
 cuotacapital=capital/couta;
 tcuotacapital=cuotacapital.toFixed(2);
 interesmensual=((capital*interes)/100)/couta;
 tinteresmensual=interesmensual.toFixed(2);
 apagar=cuotacapital+interesmensual;
 tapagar=apagar.toFixed(2);
document.getElementById("tabla").innerHTML=document.getElementById("tabla").innerHTML+
 `<tr>
    <td> ${i}</td>
    <td> ${tcuotacapital}</td>
    <td> ${tinteresmensual}</td>
    <td> ${tapagar}</td>
    </tr>`;      }
 sumacapital=capital.toFixed(2);
 sumainteres=interesmensual*couta;
 tsumainteres=sumainteres.toFixed(2);
 sumaapagar=apagar*couta;
 tsumaapagar=sumaapagar.toFixed(2);
 document.getElementById("t1").innerHTML=sumacapital;
 document.getElementById("t2").innerHTML=tsumainteres;
 document.getElementById("t3").innerHTML=tsumaapagar;        
  }else{
      alert("Ingrese un numero");
  }
}