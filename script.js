const form = document.getElementById("quizForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let age = parseInt(document.getElementById("age").value);
    let smoke = document.getElementById("smoke").value;

    // klachten ophalen
    let klachten = Array.from(document.querySelectorAll(".klachten input[type=checkbox]:checked"))
      .map(cb => cb.value);

    // medische aandoeningen ophalen
    let aandoeningen = Array.from(document.querySelectorAll(".aandoeningen input[type=checkbox]:checked"))
      .map(cb => cb.value);

    let advies = "<h2>Persoonlijk advies</h2>";

    // leeftijd + roken
    if (age >= 35 && smoke === "ja") {
      advies += "<p><strong>Let op:</strong> De combinatie van de pil en roken is riskant boven de 35 jaar. Een spiraal of hormoonstaafje kan veiliger zijn.</p>";
    }

    // PMS & klachten
    if (klachten.includes("Stemmingswisselingen") || klachten.includes("Depressieve gevoelens") || klachten.includes("Prikkelbaarheid")) {
      advies += "<p>PMS-klachten zoals stemmingswisselingen of depressieve gevoelens kunnen soms verergeren door de pil. Een spiraal of staafje is vaak geschikter.</p>";
    }
    if (klachten.includes("Migraine met aura")) {
      advies += "<p>Bij migraine met aura wordt de combinatiepil afgeraden. Een progestageen-only optie zoals de minipil of spiraal is beter.</p>";
    }
    if (klachten.includes("Zware menstruatie") || klachten.includes("Pijnlijke menstruatie")) {
      advies += "<p>Een hormoonspiraal kan helpen bij zware of pijnlijke menstruaties.</p>";
    }
    if (klachten.includes("Acne")) {
      advies += "<p>Bepaalde combinatiepillen kunnen acne verminderen.</p>";
    }
    if (klachten.includes("Gewichtstoename") || klachten.includes("Hoofdpijn")) {
      advies += "<p>Gewichtstoename en hoofdpijn zijn bekende bijwerkingen. Overweeg een andere vorm als dit storend is.</p>";
    }

    // medische voorgeschiedenis
    if (aandoeningen.includes("Trombose") || aandoeningen.includes("Bloedstolsels") || aandoeningen.includes("Hartaanval") || aandoeningen.includes("Hart- en vaatziekten")) {
      advies += "<p><strong>Belangrijk:</strong> Bij trombose of hart- en vaatziekten wordt de pil afgeraden. Een spiraal (koper of hormoon) is veiliger.</p>";
    }
    if (aandoeningen.includes("Leverziekte")) {
      advies += "<p>Bij leverziekten zijn hormonale middelen vaak niet geschikt. Overleg altijd met een arts.</p>";
    }
    if (aandoeningen.includes("Borstkanker")) {
      advies += "<p>Familiegeschiedenis van borstkanker? Kies liever geen hormonale anticonceptie.</p>";
    }
    if (aandoeningen.includes("Diabetes")) {
      advies += "<p>Bij diabetes met complicaties is voorzichtigheid nodig. Een spiraal wordt vaak aangeraden.</p>";
    }

    // standaard als niets ingevuld is
    if (advies === "<h2>Persoonlijk advies</h2>") {
      advies += "<p>Geen opvallende risico’s. De meeste vormen van hormonale anticonceptie zijn mogelijk geschikt.</p>";
    }

    // opslaan
    localStorage.setItem("advies", advies);
    window.location.href = "results.html";
  });
}

// resultatenpagina
const resultDiv = document.getElementById("result");
if (resultDiv) {
  let advies = localStorage.getItem("advies");
  if (advies) {
    resultDiv.innerHTML = advies;
  } else {
    resultDiv.innerHTML = "<p>Geen resultaten gevonden. Vul eerst de vragenlijst in.</p>";
  }
}
