const style = `
<style>
    .hero__detail .hero__top-title,.hero__detail .hero__title,.section.hero.mobile_layout .hero__mobile-content,.section.hero.mobile_layout .hero__top-title  {
        display: none!important;
    }
    .newHero h5{}
    .newHero h5 small{}
    .newHero h5 strong{}
    .newHero h5 span{}
    .newHero h1{}
</style>
`;

const mainHeader = `
<h1 class="header-main-message">
    <small>Healthy living made easy</small>
    <strong>Reach your goals</strong>
    <span>and stay there</span>
</h1>
`;

const secondaryHeader = `
<p class="header-secondary-message">
    Kickstart weight-loss, reset your healthy habits & feel your best. Our natural juices are packed with fruit and veg to get you feeling healthier, cleanse your body, crush your cravings and keep you on track!
</p>
`;

const interval = setInterval(() => {
	try {
		const heroDetail = document.querySelector('.hero__detail');
		const mobileDetail = document.querySelector('.section.hero.mobile_layout');
		const head = document.querySelector('head');
		if (
			heroDetail &&
			mobileDetail &&
			head &&
			!document.querySelector('.header-secondary-message')
		) {
			head.insertAdjacentHTML('beforeend', style);
			mobileDetail
				.querySelector('.hero__img')
				.insertAdjacentHTML('beforebegin', mainHeader);
			mobileDetail
				.querySelector('.hero__img')
				.insertAdjacentHTML('afterend', secondaryHeader);
			heroDetail
				.querySelector('.hero__cards')
				.insertAdjacentHTML('beforebegin', mainHeader);
			heroDetail
				.querySelector('.hero__cards')
				.insertAdjacentHTML('beforebegin', secondaryHeader);
			clearInterval(interval);
		}
	} catch (error) {
		console.log('error', error);
	}
}, 10);
