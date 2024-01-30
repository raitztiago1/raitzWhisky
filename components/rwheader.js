export class RWHeader extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./css/style.css">

            <header>
                <nav class="navigation">
                    <a href="./index.html" class="logo">R<span>aitz</span> W<span>hisk</span>Y</a>
                    <ul class="nav-menu">
                        <li class="nav-item"><a href="./index.html">Home</a></li>
                        <li class="nav-item"><a href="./reviews.html">Reviews & Coleção</a></li>
                        <li class="nav-item"><a href="./contacts.html">Contatos</a></li>
                        <i class='bx bx-search'></i>
                    </ul>
                    <div class="menu">
                        <span class="bar">Home</span>
                        <span class="bar">Reviews & Coleção</span>
                        <span class="bar">Contatos</span>
                    </div>
                </nav>
            </header>
            `
    }
}
