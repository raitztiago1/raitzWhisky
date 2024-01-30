export class RWFooter extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="./css/style.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

            <div class="ft-align">
                <a href="https://www.instagram.com/raitzwhisky/" class="btn-ig">
                    <i class="bi bi-instagram ft-ico">
                        <p class="ft-txt-ico"> @raitzwhisky</p>
                    </i>
                </a>
                
                <p class="ft-txt">Copyright © 2024</p>
                <p class="ft-txt"> | </p>
                <p class="ft-txt">Todos os direitos reservados</p>
            </div>
        
            `
    }
}
