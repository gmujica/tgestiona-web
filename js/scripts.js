$(() => {
	const menuItem = $('#scrolling-menu>ul>li')
	const activeClass = 'current'

	const sections = [
		{
			topX: 0,
			botX: 873
		},
		{
			topX: 873,
			botX: 1858
		},
		{
			topX: 1858,
			botX: 2730
		},
		{
			topX: 2730,
			botX: 3928
		},
		{
			topX: 3928,
			botX: 4263
		},
		{
			topX: 4264,
			botX: 4265
		}
	]

	function checkSection() {
		let i = 0
		for (let sec of sections) {
			if (window.scrollY >= sec.topX && window.scrollY < sec.botX) {
				$(menuItem[i]).addClass(activeClass)
			} else {
				$(menuItem[i]).removeClass(activeClass)
			}
			i++
		}
	}

	window.onscroll = checkSection
})