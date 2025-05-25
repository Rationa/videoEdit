
const info = document.getElementById('info');
info.innerHTML = `electron版本${window.versions.electron()}`

const input = document.getElementById('txt');

const btn = document.getElementById('btn');

btn.onclick = () => {
  console.log('input', input.value)
  window.versions.saveFile(input.value)
}