import { footerContent, socialIcons } from "./data.js";

const footer = document.querySelector('footer')

function renderFooter(){
footer.innerHTML = `<div class='footer-container'>
<div class='links-part'>
    ${footerContent.map(el => 
    `<div class='links-group'>
        <h3>${el.title}</h3>
        <div class='links-wrapper'>${el.contain.map(el => `<a>${el}</a>`).join('')}
        </div>
    </div>`).join('')}
</div>

<div class='form-part'>
<div class='footer-title-wrapper'>
<button>></button>
<h3>Subscribe to our monthly newsletter</h3>
</div>
<div class= 'email-wrapper-wrapper'>
<p>Your email address:</p>
<div class= 'email-wrapper'>
<input type="email">
<button>GO</button>
</div>
<div class='grey-line'></div>
<div class='social-icons'>
${socialIcons.map(el => `<a>${el}</a>`).join('')}
</div>
</div>
</div>
</div>
`
}

renderFooter()