import { objects_as_div } from "./util.js";

export class HeadBar extends HTMLElement {
    constructor() {
        super();
        
        this.links = [
            { lbl: "Justin DeKock: M.S. Information Systems", short: "Justin DeKock" },
            { lbl: "Saint Louis University", short: "SLU" },
            { lbl: "IS-5500: Advanced Software Development", short: "IS-5500" },
            { lbl: "Lab 01: Web Components", short: "Lab 01" },
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