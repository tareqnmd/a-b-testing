const style = `
<style>
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
    @media only screen and (max-width:767px){
        .benefit-info{
            padding: 30px 20px;
        }
        .benefit-info-details{
            gap:30px;
            grid-template-columns:1fr;        
        }
        .benefit-info h3{
            margin-bottom: 30px;
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

const interval = setInterval(() => {
	const main = document.querySelector('#main');
	const head = document.querySelector('head');
	if (main && head && !document.querySelector('.benefit-area')) {
		head.insertAdjacentHTML('beforeend', style);
		main.insertAdjacentHTML('afterend', benefit_html);
		clearInterval(interval);
	}
}, 10);
