const message_int = setInterval(() => {
	const low_text = document.querySelector('.amlabel-text');
	if (low_text.innerText.trim() === 'low inventory') {
		const message = document.querySelector('.amstockstatus.amsts_5564');
		message.innerHTML = message.innerText.replace(
			'In Stock.',
			'Low Inventory.'
		);
		clearInterval(message_int);
	}
}, 10);
