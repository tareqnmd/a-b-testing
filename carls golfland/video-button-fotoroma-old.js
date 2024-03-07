const video_links = {
	FTJ51075:
		'https://www.youtube.com/embed/wCkVEAFTMQI?autoplay=1&rel=0&enablejsapi=1&origin=https%3A%2F%2Fwww.carlsgolfland.com&widgetid=1',
	FTJ53916:
		'https://www.youtube.com/embed/hfFL3GI5hX8?autoplay=1&rel=0&enablejsapi=1&origin=https%3A%2F%2Fwww.carlsgolfland.com&widgetid=1',
	TITPROV123Y:
		'https://www.youtube.com/embed/sEiLF-iPwqY?autoplay=1&rel=0&enablejsapi=1&origin=https%3A%2F%2Fwww.carlsgolfland.com&widgetid=1',
	TITPLAYGLOV20:
		'https://www.youtube.com/embed/c1JgKw-0p8M?autoplay=1&rel=0&enablejsapi=1&origin=https%3A%2F%2Fwww.carlsgolfland.com&widgetid=1',
	TITTSR3DRP:
		'https://www.youtube.com/embed/ZIs_gcLMQVg?autoplay=1&rel=0&enablejsapi=1&origin=https%3A%2F%2Fwww.carlsgolfland.com&widgetid=1',
	TITTSR2DRW:
		'https://www.youtube.com/embed/XBuBZE9Po3s?autoplay=1&rel=0&enablejsapi=1&origin=https%3A%2F%2Fwww.carlsgolfland.com&widgetid=1',
	TITTSR2DRP:
		'https://www.youtube.com/embed/XBuBZE9Po3s?autoplay=1&rel=0&enablejsapi=1&origin=https%3A%2F%2Fwww.carlsgolfland.com&widgetid=1',
	TITTSR3DR:
		'https://www.youtube.com/embed/ZIs_gcLMQVg?autoplay=1&rel=0&enablejsapi=1&origin=https%3A%2F%2Fwww.carlsgolfland.com&widgetid=1',
	TITTSR2DR:
		'https://www.youtube.com/embed/XBuBZE9Po3s?autoplay=1&rel=0&enablejsapi=1&origin=https%3A%2F%2Fwww.carlsgolfland.com&widgetid=3',
	GFOG4GMF000042T:
		'https://www.youtube.com/embed/sPoefnsWJa0?autoplay=1&rel=0&enablejsapi=1&origin=https%3A%2F%2Fwww.carlsgolfland.com&widgetid=1',
	GFOG4MC0EF40T:
		'https://www.youtube.com/embed/sPoefnsWJa0?autoplay=1&rel=0&enablejsapi=1&origin=https%3A%2F%2Fwww.carlsgolfland.com&widgetid=1',
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

const vid_area = (url, title) => `
<div class="vid-area">
	<iframe
		id="vid_iframe"
		src=${url}
		title=${title}
		frameborder="0"
		allowfullscreen=""
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	></iframe>
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
	const title = document.querySelector('.page-title').innerText;
	if (video_btn && fotorama_stage) {
		video_btn.addEventListener('click', () => {
			video_btn.disabled = true;
			fotorama_stage.insertAdjacentHTML(
				'afterbegin',
				vid_area(video_links[sku], title)
			);
			setTimeout(() => {
				video_btn.disabled = false;
				document.querySelector('.vid-area').remove();
			}, 12000);
		});
		clearInterval(click_int);
	}
}, 10);
