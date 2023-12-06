const style = `
<style>
	.header-clock {
		background: #f2fff6;
		padding: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
		width: 100%;
	}
	img.tree{
		width: 50px;
	}
	.header-clock h2 {
		color: #292929;
		font-family: Oswald;
		font-size: 32px;
		font-style: normal;
		font-weight: 500;
		line-height: 32px;
		text-transform: uppercase;
		position:relative;
		margin: 0;
		letter-spacing: 1px;
	}
	.header-clock h2 img {
		position:absolute;
		top:-18px;
		left:-18px;
	}
	.header-clock .clock-timer {
		display: inline-flex;
		align-items: center;
		gap: 12px;
	}
	.header-clock .clock-area {
		border-radius: 4px;
		border: 1px solid #FF1167;
		background: #FAFAFA;
		display: flex;
		padding: 8px 6px;
		justify-content: center;
		align-items: baseline;
		gap: 4px;
	}
	.header-clock .clock-area span {
		color: #363636;
		font-family: Oswald;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 24px;
		width: 32px;
	}
	.header-clock .clock-area small {
		color: #000;
		font-size: 12px;
		font-style: normal;
		font-weight: 500;
		line-height: 12px;
	}
	.header-clock:nth-of-type(2) {
		display: none;
	}

	@media only screen and (max-width: 798px) {
		.header-clock:nth-of-type(1) {
			display: none;
		}
		.header-clock:nth-of-type(2) {
			display: flex;
		}
	}
	@media only screen and (max-width: 767px) {
		.header-clock {
			gap: 10px;
		}
		.header-clock h2 {
			font-size: 18px;
			line-height: 18px;
		}
		.header-clock .clock-area {
			padding: 6px 4px;
			gap: 2px;
		}
		.header-clock .clock-area span {
			font-size: 18px;
			line-height: 18px;
			width: 18px;
		}
		.header-clock .clock-area span {
			font-size: 18px;
			line-height: 18px;
			width: 18px;
		}
		.header-clock .clock-area small {
			font-size: 8px;
			line-height: 8px;
		}
		.header-clock h2 img {
			width: 20px;
			top:-10px;
			left:-10px;
		}
		img.tree{
			width: 36px;
		}
	}
	@media only screen and (max-width: 500px) {
		.header-clock {
			gap: 10px;
		}
		.header-clock h2 {
			font-size: 14px;
			line-height: 14px;
		}
		.header-clock .clock-area span {
			font-size: 14px;
			line-height: 14px;
			width: 14px;
		}
		.header-clock .clock-timer {
			gap: 6px;
		}
		img.tree{
			width: 30px;
		}
	}
	@media only screen and (max-width: 400px) {
		.header-clock h2 {
			font-size: 12px;
			line-height: 12px;
		}
		.header-clock .clock-area span {
			font-size: 12px;
			line-height: 12px;
			width: 12px;
		}
		.header-clock .clock-timer {
			gap: 4px;
		}
	}
</style>
`;
const clock_html = `
<div class="header-clock">
	<img class="tree" src="https://i.ibb.co/crvsR88/treeu.png" alt="" />
	<h2>
		<img src="https://i.ibb.co/6WXCW7Q/hat.png" alt="" />
		Holiday sale ends in
	</h2>
	<div class="clock-timer">
		<div class="clock-area hrs">
			<span>00</span>
			<small>HRS</small>
		</div>
		<div class="clock-area min">
			<span>00</span>
			<small>MIN</small>
		</div>
		<div class="clock-area sec">
			<span>00</span>
			<small>SEC</small>
		</div>
	</div>
	<img class="tree" src="https://i.ibb.co/crvsR88/treeu.png" alt="" />
</div>
`;

const toTwoDigits = (number) => {
	return number.toString().padStart(2, '0');
};

const addDaysUntilPositiveMilliseconds = (date, add_day) => {
	let daysToAdd = 0;
	let milliseconds = date.getTime() - pstDate(new Date());

	while (milliseconds < 0) {
		daysToAdd += add_day;
		milliseconds += 86400000 * add_day;
	}

	return new Date(date.getTime() + daysToAdd * 86400000);
};

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

const pstDate = (date) => {
	const offset = -8;
	return new Date(date.getTime() + offset * 3600000);
};

const getTimeDiff = () => {
	const expire_date = pstDate(new Date('2023-11-30'));
	const today = pstDate(new Date());
	let milliseconds;
	if (expire_date - today > 0) {
		milliseconds = expire_date - today;
	} else {
		milliseconds = addDaysUntilPositiveMilliseconds(expire_date, 1) - today;
	}
	const sec = Math.floor(milliseconds / 1000);
	const min = Math.floor(sec / 60);
	const hrs = Math.floor(min / 60);
	return { hrs: hrs % 24, min: min % 60, sec: sec % 60 };
};

const setTime = (clock) => {
	const hour_elm = clock.querySelector('.hrs span');
	const min_elm = clock.querySelector('.min span');
	const sec_elm = clock.querySelector('.sec span');
	const { hrs, min, sec } = getTimeDiff();
	hour_elm.innerHTML = toTwoDigits(hrs);
	min_elm.innerHTML = toTwoDigits(min);
	sec_elm.innerHTML = toTwoDigits(sec);
};

const timer_int = setInterval(() => {
	const clock_areas = [...document.querySelectorAll('.header-clock')];
	if (clock_areas.length === 2) {
		clock_areas.map((clock_area) => {
			setInterval(() => setTime(clock_area), 1000);
		});
		clearInterval(timer_int);
	}
}, 10);
