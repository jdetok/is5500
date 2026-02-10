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
        return objects_as_div(this.links);
    }
    add_styling() {
        let style = document.createElement('style');
        style.textContent = `
            div {
                display: grid;
                grid-auto-columns: 1fr;
                grid-auto-flow: column;
            }
            div > * {
                // color: darkgreen;
                padding: 10px;
                margin: 0 auto;
            }
        `;
        return style;
    }
};