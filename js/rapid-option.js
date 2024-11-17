function startGame() {
    const timeInMinutes = document.getElementById('timeSelect').value;
    const incrementInSeconds = document.getElementById('incrementSelect').value;
    const timeInSeconds = timeInMinutes * 60;

    localStorage.setItem('initialTime', timeInSeconds);
    localStorage.setItem('incrementTime', incrementInSeconds);

    window.location.href = './rapid.html';
}