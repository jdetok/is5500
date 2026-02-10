import { objects_as_div } from "./util.js";

export class ExpandableList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.append(this.build_content(), this.add_styling());
    }
    set items(value) {
        this.list_items = value;
        this.render_list();
    }
    build_content() {
        this.div = document.createElement('div');
        this.div.part = 'outer';
        this.div.append(this.make_ttl(), this.make_list());
        return this.div;
    }
    make_expand_collapse_btn() {
        this.btn = document.createElement('button');
        this.btn.part = 'btn';
        this.btn.innerHTML = `/\\<br>|`;
        let collapsed = false;
        this.btn.addEventListener('click', () => {
            this.btn.classList.toggle('flipped', !collapsed);
            collapsed = !collapsed;
            this.list.toggleAttribute('hidden');
        });
        return this.btn;
    }
    make_ttl() {
        this.ttl = document.createElement('div');
        this.ttl.part = 'ttl';
        this.ttl.innerHTML=`<slot></slot>`
        this.ttl.appendChild(this.make_expand_collapse_btn());
        return this.ttl;
    }
    make_list() {
        this.list = document.createElement('div');;
        this.list.part = 'list';
        return this.list;
    }
    render_list() {
        if (!this.list || !this.list_items) return;
        const content = objects_as_div(this.list_items, 'item');
        this.list.replaceChildren(...content.children);
    }
    add_styling() {
        let style = document.createElement('style');
        style.textContent = `
            [part="btn"] {
                align-content: center;
                justify-content: center;
            }
            [part="btn"].flipped {
                transform: rotate(180deg);
                background: rgba(97, 195, 163, 0.672) !important;
            }
            [part="outer"], [part="ttl"], [part="list"] {
                display: grid;
                grid-auto-columns: 1fr;
                grid-auto-flow: row;
                padding: .3rem;
                gap: .5rem;
            }
            [part="list"] > * {
                margin: 0;
            }
            [hidden] {
                display: none !important;
            }
        `;
        this.style = style;
        return style;
    }
};

  // this.list_items = [
        //     { lbl: "jdeko.me (my website :))", href: "https://jdeko.me" },
        //     { lbl: "Basketball Reference", href: "https://www.basketball-reference.com" },
        //     { lbl: "FlightRadar24", href: "https://www.flightradar24.com" },
        //     { lbl: "Wikipedia", href: "https://en.wikipedia.org/wiki/Main_Page" },
        //     { lbl: "Spotify", href: "https://spotify.com" },
        //     { lbl: "Tetris", href: "https://play.tetris.com" },
        //     { lbl: "ESPN", href: "https://www.espn.com" },
        // ];