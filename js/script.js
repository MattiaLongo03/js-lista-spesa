const listaSpesa = [];
let alimento;
do {
	alimento = prompt('inserisci qualcosa da comprre');
	listaSpesa.push(alimento);
} while (alimento != ''  && listaSpesa.length < 3)

if (!listaSpesa[listaSpesa.length - 1]) {
	listaSpesa.pop();
}

const spesa = document.querySelector('.lista-spesa');

for (let i = 0; i < listaSpesa.length; i++) {
	spesa.innerHTML += `<li>${listaSpesa[i]}</li>`;
}