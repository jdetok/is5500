import { objects_as_div } from "./util.js";

export class FootBar extends HTMLElement {
    constructor() {
        super();
        
        this.links = [
            { lbl: "Contact me at my SLU Email", short: "Email", href: "mailto:justin.dekock@slu.edu" },
            { lbl: "My Professional Resume", short: "Resume", href: "https://jdeko.me/resume/cv/" },
            { lbl: "View my LinkedIn", short: "LinkedIn", href: "https://www.linkedin.com/in/justin-dekock-257879185" },
        ];

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.append(this.build_content(), this.add_styling());
    }
    build_content() {
        this.ftr = document.createElement('footer');
        this.ftr.part = "ftr";
        this.ftr.appendChild(objects_as_div(this.links));
        return this.ftr 
    }
    add_styling() {
        let style = document.createElement('style');
        style.textContent = `
            div, [part="ftr"] {
                display: grid;
                grid-auto-columns: 1fr;
                grid-auto-flow: column;
            }
            div > * {
                margin: 0 auto;
            }
        `;
        return style;
    }
};