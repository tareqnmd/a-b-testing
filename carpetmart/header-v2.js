const style = `
<style>
	#s-9afc4307-eebc-4a4a-bba7-9b2edeceb35d-root{
		background: #000000;
		font-size: 14px;
		font-weight: 700;
		line-height: 16px;
		text-align: center;
	}
	#s-9afc4307-eebc-4a4a-bba7-9b2edeceb35d-root a{
		padding: 12px;
		font-size: 14px!important;
		font-weight: 700;
		line-height: 16px;
		text-align: center;
		margin:0!important;
		border-radius: 0!important;
		background-color: unset!important;
	}
	.header-top .header-center{
		background-color: unset !important;
    	padding: 16px !important;
    	height: auto;
	}
	.header-top .header-center a{
		font-size: 16px!important;
		font-weight: 700!important;
		line-height: 18px!important;
		color: black!important;
	}
	#menu{
		background: #5A8028!important;
	}
	.header-bottom{
		height:auto!important;
		max-width: 1200px;
		display: grid;
		grid-template-columns: 5fr 2fr;
		margin: 20px auto;
	}
	.header-logo.hidden-mobile .measure{
		display: none!important;
	}
	.header-bottom .container{
		width:inherit!important;
		display: flex;
		align-items:center;
		gap:10px;
	}
	.header-bottom .container:last-child .right-bottom{
		gap:12px;
	}
	.header-bottom .container:last-child .header-left ul {
		display: flex;
		gap:12px;
	}
	#menu .navPage-subMenu ,#menu ul.navPage-childList{
		background: #5A8028!important;
	}
	#menu a{
		font-size: 16px!important;
		font-weight: 700!important;
		line-height: 18px!important;
		color: white!important;
	}
	.header-bottom .container:first-child .header-left .cta{
		display: none;
	}
	@media (min-width: 320px) {
		.body .container_page {
			margin-top: 0!important;
		}
	}
</style>
`;

const interval = setInterval(() => {
	const headerElm = document.querySelector('.header-top');
	const couponElm = document.querySelector(
		'#s-9afc4307-eebc-4a4a-bba7-9b2edeceb35d-root'
	);
	const headerTopContainer = document.querySelector('.header-top > .container');
	const headerBottomContainer = document.querySelector(
		'.header-bottom > .container'
	);

	const head = document.querySelector('head');
	if (
		couponElm &&
		headerElm &&
		headerTopContainer &&
		headerBottomContainer &&
		head &&
		!document.querySelector('.new-elm')
	) {
		headerElm.insertAdjacentElement('beforebegin', couponElm);
		headerBottomContainer.insertAdjacentElement('afterend', headerTopContainer);
		head.insertAdjacentHTML('beforeend', style);
		clearInterval(interval);
	}
}, 10);
