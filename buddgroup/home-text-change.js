const interval = setInterval(() => {
	try {
		const topBtn = document.querySelector(
			'.navbar .button.nav-button.trigger.w-button'
		);
		const heroBtn = document.querySelector(
			'.wrapper.ban .button1.trigger.w-button'
		);
		if (topBtn && heroBtn) {
			topBtn.innerText = 'Request a Quote';
			heroBtn.innerText = 'Request a Quote';
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
