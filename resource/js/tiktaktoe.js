const SRC_CIRCLE = 'resource/icons/circle.png';
const SRC_CLOSE = 'resource/icons/close.png';

const SHAPE_NONE = 0;
const SHAPE_CIRCLE = 1;
const SHAPE_CLOSE = 2;

let player = false;

function addEventListener(element) {
    element.addEventListener('click', function (click) {
        let shape = parseInt(this.getAttribute('data-shape'));
        if (shape === 0) {
            if (player) {
                element.setAttribute('src', SRC_CLOSE);
                element.setAttribute('data-shape', SHAPE_CLOSE);
            } else {
                element.setAttribute('src', SRC_CIRCLE);
                element.setAttribute('data-shape', SHAPE_CIRCLE);
            }
        } else {
            if (player) {
                if (shape === SHAPE_CIRCLE) {
                    element.setAttribute('src', SRC_CLOSE);
                    element.setAttribute('data-shape', SHAPE_CLOSE);
                } else if (shape === SHAPE_CLOSE) {
                    element.setAttribute('src', SRC_CIRCLE);
                    element.setAttribute('data-shape', SHAPE_CIRCLE);
                }
            } else {
                if (shape === SHAPE_CIRCLE) {
                    element.setAttribute('src', SRC_CIRCLE);
                    element.setAttribute('data-shape', SHAPE_CIRCLE);
                } else if (shape === SHAPE_CLOSE) {
                    element.setAttribute('src', SRC_CLOSE);
                    element.setAttribute('data-shape', SHAPE_CLOSE);
                }
            }
        }

        player = !player;
    });
}


let buttons = document.getElementsByClassName('cell');

for (let i = 0; i < buttons.length; i++) {
    let btn = buttons[i];
    addEventListener(btn);
}
