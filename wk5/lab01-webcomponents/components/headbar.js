export class headbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        let linksdiv = document.createElement('div');

        let links = [
            { name: "email", href: "test" },
            { name: "linkedin", href: "test" },
        ];

        for (let obj of links) {
            const ln = document.createElement('a');
            ln.textContent = obj.name;
            ln.href = obj.href;
            linksdiv.appendChild(ln);
        }
        
        let style = document.createElement('style');

        style.textContent = `
            div {
                display: grid;
                grid-template-columns: 1fr 1fr;
            }
            a {
                color: green;
                padding: 10px;
                margin: 0 auto;
            }
        `

        this.shadowRoot.append(style, linksdiv);
    }   
};