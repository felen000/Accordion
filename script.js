document.querySelectorAll('.accordion-item__trigger').forEach(item => {
	item.addEventListener('click', () => {
		const accordionItem = item.parentElement;
		const accordionName = accordionItem.parentElement.getAttribute('class')

		console.log(accordionName);

		if (accordionName == 'accordion-1') {
			accordionItem.classList.toggle('active')
		} else {
			if (accordionItem.classList.contains('active')) {
				accordionItem.classList.remove('active')
			} else {
				document.querySelectorAll('.accordion-item').forEach(child => child.classList.remove('active'))
				accordionItem.classList.add('active')
			}
		}


	})
})