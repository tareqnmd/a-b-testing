const video_links = {
	FTJ51075: 'https://www.youtube.com/embed/wCkVEAFTMQI',
};

const style = `
<style>
    .watch-video{
        border-radius: 4px;
        border: 1px solid #dfdfdf;
        display: flex;
        align-items: center;
        gap:12px;
        width: max-content;
        padding: 0 20px;
        margin: 12px auto;
        cursor: pointer;
    }
    .watch-video span{
        font-size: 16px;
    }
    .watch-video img{
        height: 40px;
    }
    .vid-area{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 111;
        right: 0;
    }
    .vid-area button{
        border-radius: 50%;
        display: grid;
        width: 30px;
        place-content: center;
        background: black;
        border: none;
        position: absolute;
        top: 10px;
        color: white;
        height: 30px;
        right: 10px;
    }
    .vid-area iframe{
        width: 100%;
        height: 100%;
    }
</style>
`;

const product_html = `
<div class="watch-video" onclick=>
  <img src="https://carlsgolfland.s3.us-east-2.amazonaws.com/cgl-360-icon.png">
  <span>Watch Video</span>
</div>
`;

const vid_area = (url) => `
<div class="vid-area">
    <button class="close-vid">X</button>
    <iframe id="vid_iframe" src=${`${url}?autoplay=1`} title="FootJoy HyperFlex White/Lime/Blue Golf Shoes" frameborder="0" allowfullscreen></iframe>
</div>
`;

const int = setInterval(() => {
	const product_media = document.querySelector('.column.main .product.media');
	const head = document.querySelector('head');
	if (product_media && head && !document.querySelector('.watch-video')) {
		head.insertAdjacentHTML('beforeend', style);
		product_media.insertAdjacentHTML('beforeend', product_html);
		clearInterval(int);
	}
}, 10);

const click_int = setInterval(() => {
	const video_btn = document.querySelector('.watch-video');
	const fotorama_stage = document.querySelector('.fotorama__stage');
	const sku = document.querySelector('.product.attribute.sku .value').innerText;
	if (video_btn && fotorama_stage) {
		video_btn.addEventListener('click', () => {
			video_btn.disabled = true;
			fotorama_stage.insertAdjacentHTML(
				'afterbegin',
				vid_area(video_links[sku])
			);
		});
		document
			.querySelector('.vid-area button')
			.addEventListener('click', (e) => {
				e.preventDefault();
				e.stopPropagation();
				video_btn.disabled = false;
				document.querySelector('.vid-area').remove();
			});
		clearInterval(click_int);
	}
}, 10);
