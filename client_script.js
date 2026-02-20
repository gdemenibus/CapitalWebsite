  document.querySelectorAll(".districts *").forEach(district => {
	district.addEventListener("click", () => {
	console.log("click event occurred");

	})
	  if (district.matches())
	

})
  document.querySelectorAll('path[name]').forEach(path => {
	  if (vorona_districts.has(path.getAttribute('name'))) {
		  path.classList.add('vorona')

	  }

  })

const vorona_districts = new Set(['yor', 'lon', 'cly', 'lvp', 'wal'])
const navarr_districts = new Set(['bre', 'pic', 'par', 'bur', 'mar'])
const valleta_districts = new Set(['fin', 'stp', 'lvn', 'mos', 'ukr', 'sev', 'war'])

