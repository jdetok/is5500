import { objects_as_div } from "./util.js";

const HIDE_CLASS = 'hidden'

export class FavSites extends HTMLElement {
    constructor() {
        super();
        
        this.sites = [
            { lbl: "jdeko.me (my website :))", href: "https://jdeko.me" },
            { lbl: "Basketball Reference", href: "https://www.basketball-reference.com" },
            { lbl: "FlightRadar24", href: "https://www.flightradar24.com" },
            { lbl: "Wikipedia", href: "https://en.wikipedia.org/wiki/Main_Page" },
            { lbl: "Spotify", href: "https://spotify.com" },
            { lbl: "Tetris", href: "https://play.tetris.com" },
            { lbl: "ESPN", href: "https://www.espn.com" },
        ];

        this.attachShadow({ mode: 'open' });
        
        this.shadowRoot.append(this.build_content(), this.add_styling());
    }
    build_content() {
        this.div = document.createElement('div');
        this.div.classList.add('outer');

        this.ttl = document.createElement('div');
        this.ttl.classList.add('ttl');
        this.ttl.textContent = "My favorite websites";

        this.btn = document.createElement('button');
        this.btn.textContent = "^";

        this.ttl.appendChild(this.btn);

        this.btn.addEventListener('click', () => {
            this.site_list.classList.toggle('hidden');
        });

        this.site_list = objects_as_div(this.sites);

        this.div.append(this.ttl, this.site_list);
        
        return this.div;
    }
    add_styling() {
        let style = document.createElement('style');
        style.textContent = `
            button {
                width: fit-content;
            }
            div {
                display: grid;
                grid-auto-columns: 1fr;
                grid-auto-flow: row;
                padding: 1rem;
                gap: .5rem;
            }
            div > * {
                border: 1px solid black;
                padding: .5em;
            }
            .ttl {
                font-size: 2rem;
                display: flex;
                flex-direction: row;
            }
            .outer {
                border: 2px solid black;
                border-radius: 1rem; 
                margin: 0 auto;
                width: max-content;
            }
            .hidden {
                display: none;
            }
        `;
        this.style = style;
        return style;
    }
};