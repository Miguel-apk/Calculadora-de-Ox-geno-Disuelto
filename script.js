// script.js
document.getElementById('concentration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const soluteMass = parseFloat(document.getElementById('solute-mass').value);
    const solutionVolume = parseFloat(document.getElementById('solution-volume').value);
    
    if (isNaN(soluteMass) || isNaN(solutionVolume) || solutionVolume === 0) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }
    
    const concentration = soluteMass / solutionVolume;
    
    document.getElementById('result').textContent = `Concentración: ${concentration.toFixed(2)} g/L`;
});
