// Función para cargar y procesar el archivo XML
export function cargarXML() {
  var fileInput = document.getElementById('fileInput');
  var file = fileInput.files[0];

  if (file) {
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (evt) {
      // Cuando el archivo XML se ha cargado correctamente
      procesarXML(evt.target.result);
    }
    reader.onerror = function (evt) {
      console.error("Error al leer el archivo");
    }
  } else {
    console.error("No se seleccionó ningún archivo");
  }
}
function procesarXML(xmlString) {
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xmlString, "text/xml");
  
  var tipo = xmlDoc.getElementsByTagName("TARIFA_REG")[0].childNodes[0].nodeValue;

  if(tipo == "GDMTH"){
      var recibo = {
          fecha: xmlDoc.getElementsByTagName("cfdi:Comprobante")[0].getAttribute("Fecha"),
          TARIFA_REG: xmlDoc.getElementsByTagName("TARIFA_REG")[0].childNodes[0].nodeValue,
          kwhbase: xmlDoc.getElementsByTagName("CONSUMO3F")[0].childNodes[0].nodeValue,
          kwhinter: xmlDoc.getElementsByTagName("CONSUMO2F")[0].childNodes[0].nodeValue,
          kwhpunta: xmlDoc.getElementsByTagName("CONSUMO1F")[0].childNodes[0].nodeValue,
          kwhpunta2: xmlDoc.getElementsByTagName("DEMANDA1P")[0].childNodes[0].nodeValue,
          kwhinter2: xmlDoc.getElementsByTagName("DEMANDA2P")[0].childNodes[0].nodeValue,
          kwhbase2: xmlDoc.getElementsByTagName("DEMANDA3P")[0].childNodes[0].nodeValue,
          KVARH: xmlDoc.getElementsByTagName("KVARH")[0].childNodes[0].nodeValue,
          FacPot: xmlDoc.getElementsByTagName("FacPot")[0].childNodes[0].nodeValue,
          DEMANDA: xmlDoc.getElementsByTagName("DEMANDA")[0].childNodes[0].nodeValue,
          subtotal: xmlDoc.getElementsByTagName("Importe4")[0].childNodes[0].nodeValue,
          derechoAlumbrado: xmlDoc.getElementsByTagName("Importe6")[0].childNodes[0].nodeValue,
          adeudoAnt: xmlDoc.getElementsByTagName("Importe7")[0].childNodes[0].nodeValue,
          iva: xmlDoc.getElementsByTagName("Importe5")[0].childNodes[0].nodeValue,
          total: xmlDoc.getElementsByTagName("Importe9")[0].childNodes[0].nodeValue
      };

      // Asignar valores a los inputs existentes
      document.getElementById("fecha").value = recibo.fecha;
      document.getElementById("TARIFA_REG").value = recibo.TARIFA_REG;
      document.getElementById("kwhbase").value = recibo.kwhbase;
      document.getElementById("kwhinter").value = recibo.kwhinter;
      document.getElementById("kwhpunta").value = recibo.kwhpunta;
      document.getElementById("kwhpunta2").value = recibo.kwhpunta2;
      document.getElementById("kwhinter2").value = recibo.kwhinter2;
      document.getElementById("kwhbase2").value = recibo.kwhbase2;
      document.getElementById("KVARH").value = recibo.KVARH;
      document.getElementById("FacPot").value = recibo.FacPot;
      document.getElementById("DEMANDA").value = recibo.DEMANDA;
      document.getElementById("subtotal").value = recibo.subtotal;
      document.getElementById("derechoAlumbrado").value = recibo.derechoAlumbrado;
      document.getElementById("adeudoAnt").value = recibo.adeudoAnt;
      document.getElementById("iva").value = recibo.iva;
      document.getElementById("total").value = recibo.total;
  }
}
