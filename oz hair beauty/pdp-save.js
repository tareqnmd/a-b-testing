const style = `
<style>
.new-save-elm {
    position: absolute;
    bottom: 10px;
    left: 10px;
    z-index: 10;
}
</style>
`;

const new_elm_html = `<img class="new-save-elm" src="https://i.ibb.co/LxnTFMj/Group.png" alt="" />`;

const interval = setInterval(() => {
	const exist_elms = [
		...document.querySelectorAll('.relative > .Swiper_swiperCommon__TaNb5'),
	];
	const head = document.querySelector('head');
	if (exist_elms && head && !document.querySelector('.new-save-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elms.map((item) => {
			item.insertAdjacentHTML('beforeend', new_elm_html);
		});
	}
}, 10);
