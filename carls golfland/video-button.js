const style = `
<style>
    .watch-video{
        border-radius: 4px;
        border: 1px solid #dfdfdf;
        display: flex;
        align-items: center;
        gap:12px;
        width: max-content;
        margin: auto;
        padding: 0 20px;
        margin: 12px 0;
        cursor: pointer;
    }
    .watch-video span{
        font-size: 16px;
    }
    .watch-video img{
        height: 60px;
    }
</style>
`;

const product_html = `
<div class="watch-video" onclick="document.querySelector('.fotorama__nav__frame.fotorama__nav__frame--thumb.video-thumb-icon').click()">
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
