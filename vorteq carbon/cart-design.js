const copy_svg = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33341 4.66675C9.33341 4.04549 9.33341 3.73487 9.23195 3.48983C9.09661 3.16313 8.83701 2.90357 8.51035 2.76824C8.26528 2.66675 7.95468 2.66675 7.33341 2.66675H5.33341C4.07633 2.66675 3.44779 2.66675 3.05727 3.05727C2.66675 3.44779 2.66675 4.07633 2.66675 5.33341V7.33341C2.66675 7.95468 2.66675 8.26528 2.76824 8.51035C2.90357 8.83701 3.16313 9.09661 3.48983 9.23195C3.73487 9.33341 4.04549 9.33341 4.66675 9.33341" stroke="#0D0C22" stroke-width="1.4"/>
<path d="M12.0001 6.66675H8.00008C7.26368 6.66675 6.66675 7.26368 6.66675 8.00008V12.0001C6.66675 12.7365 7.26368 13.3334 8.00008 13.3334H12.0001C12.7365 13.3334 13.3334 12.7365 13.3334 12.0001V8.00008C13.3334 7.26368 12.7365 6.66675 12.0001 6.66675Z" stroke="#0D0C22" stroke-width="1.4"/>
</svg>
`;

const style = `
<style>
    .new-coupon-elm{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: linear-gradient(90deg, #FEF8F3 0%, #FFE5D3 100%);
        border-radius: 8px;
        padding: 8px 16px;
    }
    .new-coupon-elm div{
        display: grid;
    }
    .new-coupon-elm div strong{
        color: #FF437A;
        font-size: 18px;
        font-weight: 700;
        line-height: 28px;
    }
    .new-coupon-elm div span{
        font-family: Inter;
        font-size: 10px;
        font-weight: 400;
        line-height: 12px;
        color: #000000;
    }
    .new-coupon-elm button{
        background: #FFFFFF;
        padding: 8px 10px;
        gap: 6px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        border:none;
    }
    .new-coupon-elm button span{
        color: #0D0C22;
        font-size: 10px;
        font-weight: 600;
    }
</style>
`;

const new_elm_html = `
<div class="new-coupon-elm">
    <div>
        <strong>Additional 10% Off</strong>
        <span>Additional 10% Off</span>
    </div>
    <button>
        <span>Copy Code</span>
        ${copy_svg}
    </button>
</div>
`;

const interval = setInterval(() => {
	const exist_elm = document.querySelector('#cart .button-container');
	const head = document.querySelector('head');
	if (exist_elm && head && !document.querySelector('.new-coupon-elm')) {
		head.insertAdjacentHTML('beforeend', style);
		exist_elm.insertAdjacentHTML('beforebegin', new_elm_html);
		clearInterval(interval); 
	}
}, 10);
