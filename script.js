const inputEl = document.getElementById("input-value");
const convertBtn = document.getElementById("convert-btn");
const meterEl = document.getElementById("meter");
const feetEl = document.getElementById("feet");
const litterEl = document.getElementById("litter");
const gallonsEl = document.getElementById("gallons");
const kiloEl = document.getElementById("kilo");
const poundEl = document.getElementById("pounds");

// CONVERSION VALUES
const MtoF = document.getElementById("m_f");
const FtoM = document.getElementById("f_m");
const LtoG = document.getElementById("l_g");
const GtoL = document.getElementById("g_l");
const KtoP = document.getElementById("k_p");
const PtoK = document.getElementById("p_k");

const MeterToFeet = (num) => num * 3.28084;
const FeetToMeters = (num) => num * 0.3048;
const LitterToGallons = (num) => num * 0.264172;
const GallonsToLitter = (num) => num * 3.785412;
const KilloToPound = (num) => num * 2.20462262185;
const PoundsToKillos = (num) => num * 0.45359237;

const valueToConvert = [meterEl, feetEl, litterEl, gallonsEl, kiloEl, poundEl];

convertBtn.addEventListener("click", function () {
  let myValue = "";
  myValue = +inputEl.value;
  valueToConvert.forEach((item) => (item.textContent = myValue));
  MtoF.textContent = MeterToFeet(myValue).toFixed(3);
  FtoM.textContent = FeetToMeters(myValue).toFixed(3);
  LtoG.textContent = LitterToGallons(myValue).toFixed(3);
  GtoL.textContent = GallonsToLitter(myValue).toFixed(3);
  KtoP.textContent = KilloToPound(myValue).toFixed(3);
  PtoK.textContent = PoundsToKillos(myValue).toFixed(3);
});
