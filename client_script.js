const ownership = {
	vorona: ['yor', 'lon', 'cly', 'lvp', 'wal', 'edi'],
	navarr: ['bre', 'pic', 'par', 'bur', 'mar'],
	valletta: ['fin', 'stp', 'lvn', 'mos', 'ukr', 'sev', 'war'],
	alvaro: ['tyr', 'tri', 'vie', 'bud', 'gal', 'boh'],
	broadsheet: ['ruh', 'kie', 'mun', 'ber', 'sil', 'pru'],
	rasp: ['pie', 'tus', 'ven', 'rom', 'apu', 'nap'],
	fulcrum: ['con', 'smy', 'ank', 'arm' ],
	

}

for (const player in ownership) {
  const provinces = ownership[player];

  provinces.forEach(code => {
    const path = document.querySelector(`path[data-code="${code}"]`);
    if (path) path.classList.add(player);
  });
}

document.querySelectorAll("path[data-code]").forEach(district => {
    district.addEventListener("click", e => {
      onDistrictClick(district, e)
    })
  })

function onDistrictClick(district, event) {

	const tooltip = document.getElementById("tooltip")

	tooltip.textContent = district.dataset.code
	tooltip.style.left = event.clientX + 10 + "px"
	tooltip.style.top = event.clientY + 10 + "px"
	tooltip.hidden = false
	console.log(district)
	document
	.querySelectorAll(".districts .selected")
	.forEach(r => r.classList.remove("selected"))

  district.classList.add("selected")
}
