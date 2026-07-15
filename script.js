let display = document.getElementById("display");

function add(value){
  display.value += value;
}

function clr(){
  display.value = "";
}

function back(){
  display.value = display.value.slice(0, -1);
}

function showPremium(){
  resetPaywall();
  document.getElementById("popup").classList.add("show");
}

function closePopup(){
  document.getElementById("popup").classList.remove("show");
  hideBankNotif();
}

function resetPaywall(){
  const buyBtn = document.getElementById("buyBtn");
  const successBox = document.getElementById("successBox");
  const continueBtn = document.getElementById("continueBtn");
  const sheet = document.querySelector(".sheet");

  buyBtn.disabled = false;
  buyBtn.innerHTML = "Unlock unlimited math — $399";
  buyBtn.style.display = "block";
  successBox.classList.remove("show");
  continueBtn.classList.remove("show");
  sheet.classList.remove("pop");
}

function tryPurchase(){
  const buyBtn = document.getElementById("buyBtn");
  const successBox = document.getElementById("successBox");
  const continueBtn = document.getElementById("continueBtn");
  const sheet = document.querySelector(".sheet");

  buyBtn.disabled = true;
  buyBtn.innerHTML = '<span class="spinner"></span>Processing payment...';

  setTimeout(() => {
    buyBtn.style.display = "none";
    successBox.classList.add("show");
    continueBtn.classList.add("show");
    sheet.classList.add("pop");
    setTimeout(() => sheet.classList.remove("pop"), 350);
    showBankNotif();
  }, 1600);
}

function showBankNotif(){
  const notif = document.getElementById("bankNotif");
  notif.classList.add("show");
  setTimeout(() => hideBankNotif(), 3500);
}

function hideBankNotif(){
  document.getElementById("bankNotif").classList.remove("show");
}
