/* CUSTOM CODE */
const style = `
<style>
	.header-clock {
		background: #0f0f0f;
		padding: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 40px;
		width: 100%;
	}
	.header-clock h2 {
		color: #fff;
		font-family: Oswald;
		font-size: 32px;
		line-height: 32px;
		font-style: normal;
		font-weight: 700;
        margin: 0;
        letter-spacing:1px;
	}
	.header-clock .clock-timer {
		display: inline-flex;
		align-items: center;
		gap: 12px;
	}
	.header-clock .clock-area {
		border-radius: 6px;
		background: #03a196;
		display: flex;
		padding: 8px 12px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 4px;
	}
	.header-clock .clock-area span {
		color: #fff;
		font-family: Roboto;
		font-size: 24px;
		line-height: 24px;
		font-style: normal;
		font-weight: 900;
	}
	.header-clock .clock-area small {
		color: #fbfbfb;
		leading-trim: both;
		text-edge: cap;
		font-family: Roboto;
		font-size: 10px;
		line-height: 10px;
		font-style: normal;
		font-weight: 500;
	}
    @media only screen and (max-width:700px){
        .header-clock {
            gap: 20px;
        }
        .header-clock h2 {
            font-size: 16px;
            line-height: 16px;
        }
        .header-clock .clock-area {
            padding: 4px 8px;
            gap: 2px;
        }
        .header-clock .clock-area span {
            font-size: 12px;
            line-height: 12px;
        }
        .header-clock .clock-area small {
            font-size: 8px;
            line-height: 8px;
        }
    }
    @media only screen and (max-width:420px){
        .header-clock {
            gap: 10px;
        }
        .header-clock h2 {
            font-size: 14px;
            line-height: 14px;
        }
        .header-clock .clock-timer {
            gap: 6px;
        }
    }
</style>
`;
const clock_html = `
<div class="header-clock">
	<h2>CYBER WEEK SALE ENDS IN</h2>
	<div class="clock-timer">
		<div class="clock-area">
			<span>00</span>
			<small>DAYS</small>
		</div>
		<div class="clock-area">
			<span>00</span>
			<small>HRS</small>
		</div>
		<div class="clock-area">
			<span>00</span>
			<small>MIN</small>
		</div>
		<div class="clock-area">
			<span>00</span>
			<small>SEC</small>
		</div>
	</div>
</div>
`;
const header_clock_int = setInterval(() => {
	const header_top = document.querySelector('.header .top-bar');
	const header = document.querySelector('#header');
	const head = document.querySelector('head');
	if (
		header &&
		header_top &&
		head &&
		!document.querySelector('.header-clock')
	) {
		head.insertAdjacentHTML('beforeend', style);
		header_top.insertAdjacentHTML('beforebegin', clock_html);
		header.insertAdjacentHTML('beforebegin', clock_html);
		clearInterval(header_clock_int);
	}
}, 10);
