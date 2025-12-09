init();
function init () {
    const fragment = document.createDocumentFragment();

    for (i = 1; i < 17; i++) {
        if (i < 16) {
            fragment.appendChild(create(i));
        } else {
            fragment.appendChild(create());
        }
    }

    const elem = document.querySelector(".grid-container");
    elem.appendChild(fragment);
}


function create (elem='') {
    const div = document.createElement('div');
    div.textContent = elem;
    div.draggable= true;
    div.classList = 'grid-tile'
    return div
}