const chargeLevel = document.getElementById("charge-level")
const charge = document.getElementById("charge")
const chargingTimeRef = document.getElementById("charging-time")

window.onload = () => {
    // Para os Browsers que não suportam a API de status da bateria
    if(!navigator.getBattery) {
        alert("API de status da bateria não tem suporte no seu Browser")
        return false;
    }
};

navigator.getBattery().then((battery) => {
    function updateAllBatteryInfo() {
        updateChargingInfo()
        updateLevelInfo()
    }
    updateAllBatteryInfo();

    // Quando o status de carga muda
    battery.addEventListener("chargingchange", () => {
        updateAllBatteryInfo();
    });

    // Quando o nível da bateria muda
    battery.addEventListener("levelchange", () => {
        updateAllBatteryInfo();
    });

    function updateChargingInfo() {
        if(battery.charging) {
            charge.classList.add("active")
            chargingTimeRef.innerText = ""
        }else {
            charge.classList.remove("active")

            // Mostra quanto tempo falta para acabar a bateria quando valor inteiro e não infinito
            if(parseInt(battery.dischargingTime)) {
                let hr = parseInt(battery.dischargingTime / 3600);
                let min = parseInt(battery.dischargingTime / 60 - hr * 60)
                chargingTimeRef.innerText = `${hr}hr ${min}mins faltando`;
            }
        }
    }

    // Atualizando o nível da bateria
    function updateLevelInfo() {
        let batteryLevel = `${parseInt(batteryLevel * 100)}%`
        charge.style.width = batteryLevel
        chargeLevel.textContent = batteryLevel
    }
});