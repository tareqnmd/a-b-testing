const new_easy_step = `
<style>
    .new-easy-step {
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
    }
    .new-easy-step a{
        background: #f2e0d4;
        padding: 10px 20px;
        width: max-content;
        border-radius: 50px;
    }
</style>
<div class="slideshow-container-wrapper new-easy-step">
    <h3>UNROLL YOUR RUG IN 4 EASY STEPS</h3>
    <div className="easy-step-imgs">
        <a href="">
            <img src="https://i.ibb.co/3yvCDSS/1.png" alt="" />
        </a>
        <img src="https://i.ibb.co/dDC4VMC/Arrow.png" alt="" />
        <a href="">
            <img src="https://i.ibb.co/6wvsCm9/2.png" alt="" />
        </a>
        <img src="https://i.ibb.co/dDC4VMC/Arrow.png" alt="" />
        <a href="">
            <img src="https://i.ibb.co/2Szw3fm/3.png" alt="" />
        </a>
        <img src="https://i.ibb.co/dDC4VMC/Arrow.png" alt="" />
        <a href="">
            <img src="https://i.ibb.co/FhqT3j1/4-v2.png" alt="" />
        </a>
    </div>
</div>
`;

const test_int = setInterval(() => {
	const head_sec = document.querySelector('#shopify-section-1478795901388');
	if (head_sec && !document.querySelector('.new-easy-step')) {
		head_sec.insertAdjacentHTML('afterend', new_easy_step);
		clearInterval(test_int);
	}
}, 10);
