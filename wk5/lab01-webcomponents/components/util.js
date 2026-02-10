// pass existing div and an array of objects, each with a "lbl" field
// and optional "href" field (will create an anchor if href exists)
export function objects_as_div(objects, part = "") {
    let div = document.createElement('div');
    for (let obj of objects) {
        let el;
        if (obj.href) { // el is an anchor if an href link was provided
            el = document.createElement('a');
            el.href = obj.href;
            el.target = '_blank';
        } else { // normal text if no href
            el = document.createElement('p');
        }
        if (part !== "") { el.part = part; }
        el.textContent = obj.lbl;

        // switch between short/lbl depending on window size (shorter 
        // names when smaller screen)
        if (obj.short) {
            let mq = window.matchMedia('(max-width: 1200px)');
            mq.addEventListener('change', (e) => {
                change_label_from_width(e, el, obj);
            }) // set initial labels from window width
            change_label_from_width(mq, el, obj); 
        }
        div.appendChild(el);
    }
    return div; 
}

function change_label_from_width(event, el, obj) {
    el.textContent = event.matches ? obj.short : obj.lbl;
}