const style = `
<style>
</style>
`;

const getSingleImg = (img) => `
    <img src="${img.src}">
`;

const new_elm_html = (imgs) => `
<div class="new-slider-elm">
    <div class="img-show-area">
        <img src="${imgs[0].src}">
    </div>
    <div class="mob-img-slider-area">
        <button class="prev">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1">
                <path d="M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z"/>
            </svg>
        </button>
        <button class="next">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1">
                <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"/>
            </svg>
        </button>
        <div class="mob-img-slider">
            ${imgs?.map((review) => getSingleImg(review)).join('')}
        </div>
    </div>
</div>
`;

const interval = setInterval(() => {
	const rating = document.querySelector('#product-detail-rating');
	const slide_imgs = [
		...document.querySelectorAll(
			'.flex .relative .Swiper_swiperCommon__TaNb5 .swiper-wrapper img'
		),
	];
	const head = document.querySelector('head');
	if (
		rating &&
		slide_imgs &&
		head &&
		!document.querySelector('.new-slider-elm')
	) {
		head.insertAdjacentHTML('beforeend', style);
		rating.insertAdjacentHTML('afterend', new_elm_html(slide_imgs));
		clearInterval(interval);
	}
}, 10);
