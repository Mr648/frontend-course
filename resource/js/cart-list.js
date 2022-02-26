let cart = {
    name: "Rahmat",
    phone: "08733451234"
}

let carts = [
    /* Index 0 */{
        name: "Rahmat",
        phone: "08733451234",
        image: "/resource/images/03.jpg",
        description: "This is sample"
    },
    /* Index 1 */{
        name: "Karo Ahmadi",
        phone: "08733451234",
        image: "/resource/images/04.jpg",
        description: "This is sample"
    },
    /* Index 2 */{
        name: "Soshians Vaziri",
        phone: "08733451234",
        image: "/resource/images/07.jpg",
        description: "This is sample"
    },
    /* Index 3 */{
        name: "Arshia Ahmadpanah",
        phone: "08733451234",
        image: "/resource/images/09.jpg",
        description: "This is sample"
    }
];

let carts_html = "";

for (let index = 0; index < carts.length; index++) {
    let cart = carts[index];


    let start = '<div class="cart">';
    let image = "";

    /*if (index % 2 === 0){
         image = '<img class="img" src="' + cart.image+ '">'
    }*/


    let name = '<h2 class="title">' + cart.name + '</h2>';
    image = '<img class="img" src="' + cart.image + '">'
    let phone = '<a class="phone" href="tel:'
        + cart.phone
        + '">'
        + cart.phone
        + '</a>';

    let description = '<p class="description">' + cart.description + '</p>';
    let end = '</div>';

    let html = start
        + name
        + image
        + description
        + phone
        + end;


    carts_html += html; // adding cart to div html

}

document.getElementById('carts').innerHTML = carts_html;

