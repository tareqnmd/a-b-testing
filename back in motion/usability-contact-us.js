const style_elm = `
<style>
    .client-review-area{
        background: #003A5D;
        width:100%;
    }
    .client-review{
        max-width: 1200px;
        width: 100%;
        margin: auto;
        padding: 60px 10px;
        padding-top:0;
    }
    .client-review *{
        margin: 0;
        padding: 0;
    }
    .client-review h3{
        color: #FFF;
        text-align: center;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px;
        margin-bottom: 60px;
    }
    .client-revs {
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:20px;
    }
    .client-revs > div{
        border-radius: 16px;
        background: #FFF;
        display:flex;
        flex-direction:column;
        padding:20px;
        gap:10px;
    }
    .client-revs > div p{
        color: #3A3957;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; 
    }
    .client-revs > div small{
        color: #6B7280;
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        text-align: end;
    }
    .rev-info {
        display: grid;
        grid-template-columns: 50px 1fr;
        gap: 0 10px;
    }
    .rev-info img{
        grid-row: 1/span 2;
    }
    @media only screen and (max-width:1220px){
        .client-review{
            padding: 60px 30px;
        }
    }
    @media only screen and (max-width:767px){
        .client-review{
            padding: 30px 30px;
        }
        .client-revs {
            grid-template-columns: 1fr;
            gap:20px;
        }
        .client-review h3{
            margin-bottom: 30px;
        }
    }
    @media only screen and (max-width:640px){
        .client-review h3{
            font-size: 20px;
        }
        .client-review{
            padding: 60px 10px;
        }
    }
</style>
`;

const five_star = `
<svg
	width="69"
	height="12"
	viewBox="0 0 69 12"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M6.59564 0L7.94273 4.1459H12.302L8.77527 6.7082L10.1224 10.8541L6.59564 8.2918L3.06893 10.8541L4.41601 6.7082L0.889303 4.1459H5.24856L6.59564 0Z"
		fill="#F59E0B"
	/>
	<path
		d="M20.5956 0L21.9427 4.1459H26.302L22.7753 6.7082L24.1224 10.8541L20.5956 8.2918L17.0689 10.8541L18.416 6.7082L14.8893 4.1459H19.2486L20.5956 0Z"
		fill="#F59E0B"
	/>
	<path
		d="M34.5956 0L35.9427 4.1459H40.302L36.7753 6.7082L38.1224 10.8541L34.5956 8.2918L31.0689 10.8541L32.416 6.7082L28.8893 4.1459H33.2486L34.5956 0Z"
		fill="#F59E0B"
	/>
	<path
		d="M48.5956 0L49.9427 4.1459H54.302L50.7753 6.7082L52.1224 10.8541L48.5956 8.2918L45.0689 10.8541L46.416 6.7082L42.8893 4.1459H47.2486L48.5956 0Z"
		fill="#F59E0B"
	/>
	<path
		d="M62.5956 0L63.9427 4.1459H68.302L64.7753 6.7082L66.1224 10.8541L62.5956 8.2918L59.0689 10.8541L60.416 6.7082L56.8893 4.1459H61.2486L62.5956 0Z"
		fill="#F59E0B"
	/>
</svg>
`;

const client_html_elm = `
<div class="client-review-area">
	<div class="client-review">
		<h3>What Our Clients Say</h3>
		<div class="client-revs">
			<div>
				<div class="rev-info">
					<img
						src="https://i.ibb.co/kxxhJBx/Ellipse-110.png"
						alt="user-img"
					/>
					<strong>Brooklyn Simmons</strong>
					${five_star}
				</div>
				<p>
					“Porem ipsum dolor sit amet consectetur. Metus volutpat pulvinar
					pulvinar pellentesque accumsan. Risus porta in pellentesque vulputate
					egestas integer proin. Tincidunt et adipiscing pharetra mi.”
				</p>
				<small>4 Jun 2023</small>
			</div>
			<div>
				<div class="rev-info">
					<img
						src="https://i.ibb.co/kxxhJBx/Ellipse-110.png"
						alt="user-img"
					/>
					<strong>Brooklyn Simmons</strong>
					${five_star}
				</div>
				<p>
					“Porem ipsum dolor sit amet consectetur. Metus volutpat pulvinar
					pulvinar pellentesque accumsan. Risus porta in pellentesque vulputate
					egestas integer proin. Tincidunt et adipiscing pharetra mi.”
				</p>
				<small>4 Jun 2023</small>
			</div>
			<div>
				<div class="rev-info">
					<img
						src="https://i.ibb.co/kxxhJBx/Ellipse-110.png"
						alt="user-img"
					/>
					<strong>Brooklyn Simmons</strong>
					${five_star}
				</div>
				<p>
					“Porem ipsum dolor sit amet consectetur. Metus volutpat pulvinar
					pulvinar pellentesque accumsan. Risus porta in pellentesque vulputate
					egestas integer proin. Tincidunt et adipiscing pharetra mi.”
				</p>
				<small>4 Jun 2023</small>
			</div>
		</div>
	</div>
</div>
`;

const interval_elm = setInterval(() => {
	const main = document.querySelector('#main');
	const head = document.querySelector('head');
	if (main && head && !document.querySelector('.client-review-area')) {
		head.insertAdjacentHTML('beforeend', style_elm);
		main.insertAdjacentHTML('afterend', client_html_elm);
		clearInterval(interval_elm);
	}
}, 10);
