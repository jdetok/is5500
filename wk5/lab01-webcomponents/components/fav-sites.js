import { objects_as_div } from "./util.js";

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
        this.div.part = 'outer';
        this.div.append(this.make_ttl(), this.make_site_list());
        return this.div;
    }
    make_expand_collapse_btn() {
        this.btn = document.createElement('button');
        this.btn.part = 'btn';
        this.btn.textContent = "^";
        this.btn.addEventListener('click', () => {
            this.site_list.toggleAttribute('hidden');
        });
        return this.btn;
    }
    make_ttl() {
        this.ttl = document.createElement('div');
        this.ttl.part = 'ttl';
        this.ttl.textContent = "My favorite websites";
        this.ttl.appendChild(this.make_expand_collapse_btn());
        return this.ttl;
    }
    make_site_list() {
        this.site_list = objects_as_div(this.sites, 'site');
        this.site_list.part = 'site_list';
        return this.site_list;
    }
    add_styling() {
        let style = document.createElement('style');
        style.textContent = `
            [part="outer"], [part="ttl"], [part="site_list"] {
                display: grid;
                grid-auto-columns: 1fr;
                grid-auto-flow: row;
                padding: .3rem;
                gap: .5rem;
            }
            [hidden] {
                display: none !important;
            }
        `;
        this.style = style;
        return style;
    }
};