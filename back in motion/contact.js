const style = `
<style>
    .response-info{
        display: flex;
        align-items:center;
        justify-content:center;
        gap: 8px;
        margin: 18px 0;
    }
    .response-info svg{
        flex-shrink:0;
    }
    .response-info span{
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    .gform_page {
        width:100%!important;
        padding:0 60px;
    }
    #multi-form .multi-step-form .gform_page_footer{
        background: none!important;
    }
    .gform_page_fields,.gform-theme-button.button{
        width:100%!important;
    }
    body #multi-form .multi-step-form .gform_page_footer{
        padding:0!important;
        margin:30px 0!important;
    }
    .benefit-area{
        background: #174B6A;
        width:100%;
    }
    .benefit-info{
        max-width: 1200px;
        width: 100%;
        margin: auto;
        padding: 60px 10px;
    }
    .benefit-info *{
        margin: 0;
        padding: 0;
    }
    .benefit-info h3{
        color: #FFF;
        text-align: center;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px;
        margin-bottom: 60px;
    }
    .benefit-info-details{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:60px;
    }
    .benefit-info-details > div, .benefit-info-details > ul{
        display:flex;
        flex-direction:column;
        gap:6px;
    }
    .benefit-info-details li, .benefit-info-details p{
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
    }
    @media only screen and (max-width:1220px){
        .benefit-info{
            padding: 60px 30px;
        }
    }
    @media only screen and (max-width:767px){
        .benefit-info{
            padding: 30px 30px;
        }
        .benefit-info-details{
            gap:20px;
            grid-template-columns:1fr;        
        }
        .benefit-info h3{
            margin-bottom: 30px;
        }
        .benefit-info-details > ul{
            margin-left: 20px;
        }
    }
    @media only screen and (max-width:640px){
        .benefit-info h3{
            font-size: 20px;
        }
        .benefit-info{
            padding: 60px 10px;
        }
        .benefit-info-details li, .benefit-info-details p{
            font-size: 12px;
            line-height: 16px;
        }
    }
</style>
`;

const benefit_html = `
<div class="benefit-area">
    <div class="benefit-info">
        <h3>What Are The Benefits Of Physical Therapy?</h3>
        <div class="benefit-info-details">
            <div>
                <p>Physical Therapy is the natural way to treat chronic pain.</p>
                <p>
                    Here at City Physical Therapy, we are a Physical Therapy Clinic that
                    specializes in treating and working with people who have chronic pain.
                </p>
                <p>
                    Throughout the course of your personalized care plan, we will work with
                    you to treat your pain, reverse your injuries, and prevent your issues
                    from returning. We do this through;
                </p>
            </div>
            <ul>
                <li>
                    Avoid Painkillers and Surgery: We can help you put an end to taking
                    painkillers that are no good for your health long-term
                </li>
                <li>
                    We can help you keep out of the Doctor’s waiting room or from making
                    repeat visits only to be given more pills or no new information
                </li>
                <li>
                    We will also help you target the pain and get to the root of the cause
                    ensuring your having lost lasting relief avoiding the pills and surgery.
                </li>
            </ul>
        </div>
    </div>
</div>
`;

const response_html = `
<div class="response-info">
	<svg
		width="25"
		height="24"
		viewBox="0 0 25 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clip-path="url(#clip0_12_251)">
			<path
				d="M20.438 8.00002H21.5C22.0304 8.00002 22.5391 8.21074 22.9142 8.58581C23.2893 8.96088 23.5 9.46959 23.5 10V14C23.5 14.5305 23.2893 15.0392 22.9142 15.4142C22.5391 15.7893 22.0304 16 21.5 16H20.438C20.1942 17.9333 19.2533 19.7112 17.7917 21C16.3302 22.2888 14.4486 23 12.5 23V21C14.0913 21 15.6174 20.3679 16.7426 19.2427C17.8679 18.1174 18.5 16.5913 18.5 15V9.00002C18.5 7.40872 17.8679 5.8826 16.7426 4.75738C15.6174 3.63216 14.0913 3.00002 12.5 3.00002C10.9087 3.00002 9.38258 3.63216 8.25736 4.75738C7.13214 5.8826 6.5 7.40872 6.5 9.00002V16H3.5C2.96957 16 2.46086 15.7893 2.08579 15.4142C1.71071 15.0392 1.5 14.5305 1.5 14V10C1.5 9.46959 1.71071 8.96088 2.08579 8.58581C2.46086 8.21074 2.96957 8.00002 3.5 8.00002H4.562C4.80603 6.06692 5.74708 4.2893 7.20857 3.0007C8.67007 1.7121 10.5516 1.0011 12.5 1.0011C14.4484 1.0011 16.3299 1.7121 17.7914 3.0007C19.2529 4.2893 20.194 6.06692 20.438 8.00002ZM3.5 10V14H4.5V10H3.5ZM20.5 10V14H21.5V10H20.5ZM8.26 15.785L9.32 14.089C10.2731 14.6861 11.3754 15.0018 12.5 15C13.6246 15.0018 14.7269 14.6861 15.68 14.089L16.74 15.785C15.4693 16.5812 13.9995 17.0023 12.5 17C11.0005 17.0023 9.53074 16.5812 8.26 15.785Z"
				fill="black"
			/>
		</g>
		<defs>
			<clipPath id="clip0_12_251">
				<rect
					width="24"
					height="24"
					fill="white"
					transform="translate(0.5)"
				/>
			</clipPath>
		</defs>
	</svg>
	<span>You will receive a response from our team within 2 hours.</span>
</div>
`;

const interval = setInterval(() => {
	const main = document.querySelector('#main');
	const head = document.querySelector('head');
	if (main && head && !document.querySelector('.benefit-area')) {
		head.insertAdjacentHTML('beforeend', style);
		main.insertAdjacentHTML('afterend', benefit_html);
		clearInterval(interval);
	}
}, 10);

setInterval(() => {
	const button = document.querySelector('.gform-theme-button.button');
	if (button && !document.querySelector('.btn-chk')) {
		button.classList.add('btn-chk');
		button.innerText = 'Request my callback';
		button.insertAdjacentHTML('afterend', response_html);
	}
}, 10);
