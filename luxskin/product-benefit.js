const style = `
<style>
#shopify-section-product-template
	.station-tabs-tabset.mod-vertical
	.station-tabs-tab {
	border: none !important;
	border-top: 1px solid #eeeeee !important;
}
#shopify-section-product-template .station-tabs-tabset::after {
	content: '';
	position: absolute;
	background: #fff3f7;
	right: -100%;
	top: 0;
	bottom: 0;
	width: 100%;
	z-index: 999;
}
#shopify-section-product-template .station-tabs-tabset::before {
	content: '';
	position: absolute;
	background: #fff3f7;
	left: -100%;
	top: 0;
	bottom: 0;
	width: 100%;
	z-index: 999;
}
#shopify-section-product-template .station-tabs-tabset {
	background: #ffffff;
	padding: 16px !important;
	margin: 20px !important;
	border-radius: 8px;
}
</style>
`;

const interval = setInterval(() => {
	try {
		const head = document.querySelector('head');
		if (head) {
			head.insertAdjacentHTML('beforeend', style);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
