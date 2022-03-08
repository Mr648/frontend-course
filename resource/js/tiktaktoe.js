const SRC_CIRCLE = 'resource/icons/circle.png';
const SRC_CLOSE = 'resource/icons/close.png';

const SHAPE_NONE = 0;
const SHAPE_CIRCLE = 1;
const SHAPE_CLOSE = 2;

let player = false;

function checkGame() {
    let buttons = [
        [
            "#cell_00",
            "#cell_01",
            "#cell_02"
        ],
        [
            "#cell_10",
            "#cell_11",
            "#cell_12"
        ],
        [
            "#cell_20",
            "#cell_21",
            "#cell_22"
        ]
    ];


    for (let i = 0; i < 3; i++) {
        let row = buttons[i];
        let shapes = [];
        for (let j = 0; j < row.length; j++) {
            shapes[j] = $(row[j]).data('shape');
        }

        console.log([
            shapes[0] !== SHAPE_NONE,
            shapes[0] === shapes[1] ,
            shapes[1] === shapes[2]
        ]);
        if (shapes[0] !== SHAPE_NONE && shapes[0] === shapes[1] && shapes[1] === shapes[2]) {
            let name;
            /*if (player) {
                name = "Player One";
            } else {
                name = "Player Two";
            }*/
            name = player ? "Player One" : "Player Two";
            alert("The " + name + " Is Winner.");
        }
    }
}

// array
let buttons = $('.cell').each(function(){
    $(this).click(function (evt) {
        let shape = parseInt($(this).data('shape'));

        if (shape === 0) {
            if (player) {
                $(this).attr('src', SRC_CLOSE);
                $(this).data('shape', SHAPE_CLOSE);
            } else {
                $(this).attr('src', SRC_CIRCLE);
                $(this).data('shape', SHAPE_CIRCLE);
            }
        }
        checkGame();
        // clearGame()
        player = !player; // true -> false, false -> true
    });
});
