// v1
const test_int = setInterval(() => {
	const type_area = document.querySelector(
		'#shopify-section-408b8ba8-8b28-48e0-9652-3fad92bd41da'
	);
	const photo_area = document.querySelector(
		'#shopify-section-0b438056-01c6-4e1d-b266-294fe61ed8bd'
	);
	if (photo_area && type_area) {
		type_area.insertAdjacentElement('beforebegin', photo_area);
		clearInterval(test_int);
	}
}, 10);

// v2
const test_sec_int = setInterval(() => {
	const type_area = document.querySelector(
		'#shopify-section-408b8ba8-8b28-48e0-9652-3fad92bd41da'
	);
	const photo_area = document.querySelector(
		'#shopify-section-0b438056-01c6-4e1d-b266-294fe61ed8bd'
	);
	if (photo_area && type_area) {
		type_area.insertAdjacentElement('beforebegin', photo_area);
		photo_area.querySelector('img').src = 'https://i.ibb.co/Xx3xH6b/Sydney-Team-ABTest-Desktop4-gotham-1.png';
		clearInterval(test_sec_int);
	}
}, 10);
