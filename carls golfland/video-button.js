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
</style>
`;

const product_html = `
<div class="watch-video" onclick=>
  <img src="https://carlsgolfland.s3.us-east-2.amazonaws.com/cgl-360-icon.png">
  <span>Watch Video</span>
</div>
`;
const int = setInterval(() => {
	const product_media = document.querySelector('.column.main .product.media');
	const head = document.querySelector('head');
	if (product_media && head && !document.querySelector('.watch-video')) {
		product_media.insertAdjacentHTML('beforeend', product_html);
		head.insertAdjacentHTML('beforeend', style);
		clearInterval(int);
	}
}, 10);

const click_int = setInterval(() => {
	const vid_btn = document.querySelector('.watch-video');
	const video_btn = document.querySelector(
		'.fotorama__nav__frame.fotorama__nav__frame--thumb.video-thumb-icon'
	);
	const video_con = document.querySelector('.fotorama-video-container');
	if (vid_btn && video_btn && video_con) {
		vid_btn.addEventListener('click', () => {
			vid_btn.click();
			setTimeout(() => {
				video_con.click();
			}, 1000);
		});
		clearInterval(click_int);
	}
}, 10);
