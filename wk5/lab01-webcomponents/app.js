import { HeadBar } from "./components/head-bar.js"
import { ExpandableList } from "./components/exp-list.js";
import { FootBar } from "./components/foot-bar.js";

document.addEventListener('DOMContentLoaded', () => {
    customElements.define('head-bar', HeadBar);
    customElements.define('exp-list', ExpandableList);
    customElements.define('foot-bar', FootBar);

    const fav_sites = document.getElementById('fav_sites');
    fav_sites.items = [
        { lbl: "jdeko.me (my website :))", href: "https://jdeko.me" },
        { lbl: "Basketball Reference", href: "https://www.basketball-reference.com" },
        { lbl: "FlightRadar24", href: "https://www.flightradar24.com" },
        { lbl: "Wikipedia", href: "https://en.wikipedia.org/wiki/Main_Page" },
        { lbl: "Tetris", href: "https://play.tetris.com" },
        { lbl: "ESPN", href: "https://www.espn.com" },
    ];
    
    const fav_animals = document.getElementById('fav_animals');
    fav_animals.items = [
        { lbl: "Cats" },
        { lbl: "Snakes" },
        { lbl: "Dogs" },
        { lbl: "Groundhogs" },
        { lbl: "Raccoons" },
        { lbl: "Pigeons" },
    ];

    const fav_hobbies = document.getElementById('fav_hobbies');
    fav_hobbies.items = [
        { lbl: "Making/listening to music" },
        { lbl: "Programming" },
        { lbl: "Microprocessor programming" },
        { lbl: "Learning about things" },
        { lbl: "Watching Youtube videos, movies, sports, etc" },
        { lbl: "Running/experimenting with home servers" },
    ];
});
