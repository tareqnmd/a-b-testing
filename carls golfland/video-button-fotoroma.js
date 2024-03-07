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
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 111;
        right: 0;
    }
    .vid-area iframe{
        width: 100%;
        height: 100%;
    }
    .vid-area.show-vid{
        display: block;
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
    <iframe src=${url} title="FootJoy HyperFlex White/Lime/Blue Golf Shoes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
`;

const int = setInterval(() => {
	const product_media = document.querySelector('.column.main .product.media');
	const fotorama_stage = document.querySelector('.fotorama__stage');
	const sku = document.querySelector('.product.attribute.sku .value').innerText;
	const head = document.querySelector('head');
	if (
		product_media &&
		fotorama_stage &&
		head &&
		sku &&
		!document.querySelector('.watch-video')
	) {
		head.insertAdjacentHTML('beforeend', style);
		product_media.insertAdjacentHTML('beforeend', product_html);
		fotorama_stage.insertAdjacentHTML('afterbegin', vid_area(video_links[sku]));
		clearInterval(int);
	}
}, 10);

const click_int = setInterval(() => {
	const video_btn = document.querySelector('.watch-video');
	const vid_area = document.querySelector('.vid-area');
	if (video_btn && vid_area) {
		video_btn.addEventListener('click', () => {
			vid_area.classList.add('show-vid');
			setTimeout(() => {
				vid_area.classList.remove('show-vid');
			}, 10000);
		});
		clearInterval(click_int);
	}
}, 10);
