document.querySelectorAll('.accordion-item__trigger').forEach(item => {
	item.addEventListener('click', () => {
		const parent = item.parentElement;

		if (parent.classList.contains('active')) {
			parent.classList.remove('active')
		} else {
			document.querySelectorAll('.accordion-item').forEach(child => child.classList.remove('active'))
			parent.classList.add('active')
		}
	})
})