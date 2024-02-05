const new_easy_step = `
<style>
    .new-easy-step {
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
        margin: 30px auto;
    }
    .new-easy-step h3{
        color: #232323;
        font-family: lato;
        margin-bottom: 16px;
    }
    .new-easy-step .easy-step-imgs{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
    }
    .new-easy-step .easy-step-imgs > img{
        margin-bottom: 30px;
    }
    .new-easy-step .easy-step-imgs a{
        align-self: flex-start;
    }
    @media only screen and (max-width:1200px){
        .new-easy-step .easy-step-imgs > img{
            width: 60px;
        }
        .new-easy-step .easy-step-imgs{
            gap: 20px;
        }
        .new-easy-step {
            width: 90%;
        }
    }
    @media only screen and (max-width:767px){
        .new-easy-step .easy-step-imgs > img{
            width: 40px;
        }
        .new-easy-step .easy-step-imgs{
            gap: 10px;
        }
        .new-easy-step h3{
            margin-bottom: 20px;
        }
    }
    @media only screen and (max-width:480px){
        .new-easy-step .easy-step-imgs > img{
            width: 20px;
        }
        .new-easy-step .easy-step-imgs > img{
            margin-bottom: 20px;
        }
        .new-easy-step h3{
            margin-bottom: 16px;
        }
    }
</style>
<div class="slideshow-container-wrapper new-easy-step">
    <h3>UNROLL YOUR RUG IN 4 EASY STEPS</h3>
    <div class="easy-step-imgs">
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
