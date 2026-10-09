function toggleMenu(){
  const links = document.querySelector('.navlinks');
  if (links) links.classList.toggle('open');
}
function updateDashboard(){
  const road = document.getElementById('roadSelect');
  const scoreEl = document.getElementById('score');
  const statusEl = document.getElementById('status');
  const forecastEl = document.getElementById('forecast');
  const confidenceEl = document.getElementById('confidence');
  if (!road || !scoreEl || !statusEl || !forecastEl || !confidenceEl) return;
  const presets = {
    'Main Road': [64, 'MODERATE', 'High', '82%'],
    'City Center': [82, 'HIGH', 'Severe', '88%'],
    'Airport Road': [43, 'MODERATE', 'Moderate', '79%'],
    'Highway Junction': [91, 'SEVERE', 'Severe', '91%']
  };
  const values = presets[road.value] || presets['Main Road'];
  scoreEl.textContent = values[0];
  statusEl.textContent = values[1];
  statusEl.className = 'status ' + (values[0] >= 80 ? 'high' : 'moderate');
  forecastEl.textContent = values[2];
  confidenceEl.textContent = values[3];
  const gauge = document.querySelector('.gauge');
  if (gauge) gauge.style.background = `conic-gradient(var(--accent) 0 ${values[0]}%, #26384f ${values[0]}% 100%)`;
}
document.addEventListener('DOMContentLoaded', () => {
  updateDashboard();
});
