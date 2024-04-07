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
    .popup-vid {
        position: fixed;
        top: -100vh;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        display: grid;
        place-items: center;
        background-color: #dfdfdf66;
        transition: 0.1s;
        z-index: 999;
        cursor: pointer;
    }
    .popup-vid-wrap {
        position: relative;
        width: 600px;
        height: 600px;
        margin: auto;
    }
    .popup-vid-wrap > button {
        position: absolute;
        right: 10px;
        top: 10px;
        height: 30px;
        width: 30px;
        font-size: 12px;
        font-weight: bold;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        background: white;
        display: grid;
        place-content: center;
    }
    .popup-vid iframe {
        width: 100%;
        height: 100%;
        background: #000;
    }
    
    @media only screen and (max-width:540px){
        .popup-vid-wrap {
          width: 300px;
          height: 300px;
      }
    }
</style>
`;

const product_html = `
<div class="watch-video" onclick=>
  <img src="https://carlsgolfland.s3.us-east-2.amazonaws.com/cgl-360-icon.png">
  <span>Watch Video</span>
</div>
`;

const vid_area = `
<div class="popup-vid">
	<div class="popup-vid-wrap">
		<button>X</button>
	</div>
</div>
`;

const vid = (url, title) => `
<iframe
    frameborder="0"
    allowfullscreen=""
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    title="${title}"
    src="${url}"
    id="vid_iframe"
></iframe>
`;

const int = setInterval(() => {
	const product_media = document.querySelector('.column.main .product.media');
	const body = document.querySelector('body');
	const head = document.querySelector('head');
	if (
		product_media &&
		head &&
		body &&
		!document.querySelector('.watch-video')
	) {
		head.insertAdjacentHTML('beforeend', style);
		body.insertAdjacentHTML('afterbegin', vid_area);
		product_media.insertAdjacentHTML('beforeend', product_html);
		clearInterval(int);
	}
}, 10);

const click_int = setInterval(() => {
	const video_btn = document.querySelector('.watch-video');
	const video_area = document.querySelector('.popup-vid');
	const video_wrap_area = document.querySelector('.popup-vid-wrap');
	const url = document
		.querySelector('.product-video')
		.getAttribute('data-code');
	const title = document.querySelector('.page-title').innerText;
	if (video_btn && url && title && video_area) {
		const youtube_url = `https://www.youtube.com/embed/${url}?&loop=1&playlist=${url};rel=0&controls=1&autoplay=1&mute=1&start=0`;
		video_btn.addEventListener('click', () => {
			video_area.style.top = '0';
			if (!document.querySelector('#vid_iframe')) {
				video_wrap_area.insertAdjacentHTML(
					'beforeend',
					vid(youtube_url, title)
				);
			}
		});
		video_area.addEventListener('click', () => {
			video_area.style.top = '-100vh';
			if (document.querySelector('#vid_iframe')) {
				document.querySelector('#vid_iframe').remove();
			}
		});
		clearInterval(click_int);
	}
}, 10);
