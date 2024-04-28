const interval = setInterval(() => {
	const desktop_img = document.querySelector('.mobile_image img');
	const mobile_img = document.querySelector('.desktop_image img');
	const head = document.querySelector('head');
	if (desktop_img && mobile_img && head) {
		head.insertAdjacentHTML('beforeend', style);
		desktop_img.src = 'https://i.ibb.co/ssDn4ys/Banner-desktop.png';
		mobile_img.src = 'https://i.ibb.co/283S7rX/Banner-Mobile-2x.png';
		clearInterval(interval);
	}
}, 10);
