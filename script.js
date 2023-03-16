const bill = document.getElementById("inputBill");

const guest = document.getElementById("inputGuest");

const service = document.getElementById("inputService");

const napiwek = document.getElementById("napiwek");

function calculate(){
    const kwotaNapiwku = ((bill.value * service.value) / guest.value).toFixed(2);

    if(guest.value == ""){
        alert("Wybierz ilosc gosci!");
    }

    if(bill.value == ""){
        alert("Wybierz kwote!");
    }

    napiwek.innerHTML = kwotaNapiwku + "$ / Osobe";
}