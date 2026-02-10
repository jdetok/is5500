// pass existing div and an array of objects, each with a "lbl" field
// and optional "href" field (will create an anchor if href exists)
export function objects_as_div(objects) {
    let div = document.createElement('div');
    for (let obj of objects) {
        let el;
        if (obj.href) {
            el = document.createElement('a');
            el.href = obj.href;
            el.target = '_blank';
        } else {
            el = document.createElement('p');
        }
        el.textContent = obj.lbl;

        if (obj.short) {
            let mq = window.matchMedia('(max-width: 700px)');
            mq.addEventListener('change', (e) => {
                change_label_from_width(e, el, obj);
            })
            change_label_from_width(mq, el, obj);
        }
    
        div.appendChild(el);
    }
    return div;
}

function change_label_from_width(event, el, obj) {
    if (event.matches) {
        console.log(`media query matches: ${window.innerWidth}`);
        el.textContent = obj.short;
    } else {
        el.textContent = obj.lbl;
    }
}