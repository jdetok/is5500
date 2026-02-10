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
        div.appendChild(el);
    }
    return div;
}