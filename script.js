function updateClock() {
    const selectedTimeZone = document.getElementById('country-select').value;
    const now = moment().tz(selectedTimeZone);

    // Obtenir les heures, minutes et secondes actuelles
    const hours = now.hours() % 12;
    const minutes = now.minutes();
    const seconds = now.seconds();
    console.log(minutes)

    // Calculer les degrés de rotation pour chaque aiguille
    const hourDegree = (hours + minutes / 60) * 360 / 12;
    const minuteDegree = (minutes + seconds / 60) * 360 / 60;
    const secondDegree = seconds * 360 / 60;

    // Mettre à jour la rotation de chaque aiguille en fonction des degrés calculés
    const selectedCountryClock = document.getElementById('selected-country-clock');
    selectedCountryClock.querySelector('.hand-hour').style.transform = `rotate(${hourDegree + 90}deg)`;
    selectedCountryClock.querySelector('.hand-minute').style.transform = `rotate(${minuteDegree + 90}deg)`;
    selectedCountryClock.querySelector('.hand-second').style.transform = `rotate(${secondDegree + 90}deg)`;

}

// Mettre à jour l'horloge chaque seconde
setInterval(updateClock, 1000);

// Mettre à jour l'horloge immédiatement au chargement de la page
updateClock();

// Mettre à jour l'horloge quand le fuseau horaire sélectionné change
document.getElementById('country-select').addEventListener('change', updateClock);