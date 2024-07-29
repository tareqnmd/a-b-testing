const interval = setInterval(() => {
	try {
		const showArea = document.querySelector(
			'button.b20QW[aria-controls="disclosure_details"]'
		);
		if (showArea) {
			showArea.click();
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
