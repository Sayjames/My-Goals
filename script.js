function updateTimeAndDay() {
    const now = new Date();
    const utcOffset = 1; // Offset for West Central Africa (UTC+01:00)
    const localTime = new Date(now.setHours(now.getUTCHours() + utcOffset));
    
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const time = localTime.toLocaleTimeString('en-US', options);
    const dayOptions = { weekday: 'long' };
    const day = localTime.toLocaleDateString('en-US', dayOptions);

    document.getElementById('currentTimeUTC').textContent = time;
    document.getElementById('currentDay').textContent = day;
}

// Update time and day on page load
updateTimeAndDay();
// Update time and day every second
setInterval(updateTimeAndDay, 1000);
