let cart = {
    name: "Rahmat",
    phone: "08733451234"
}

let carts = [
    /* Index 0 */{
        name: "Rahmat",
        phone: "08733451234",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpreviews.123rf.com%2Fimages%2Faquir%2Faquir1311%2Faquir131100316%2F23569861-%25EC%2583%2598%25ED%2594%258C-%25EC%25A7%2580-%25EB%25B9%25A8%25EA%25B0%2584%25EC%2583%2589-%25EB%259D%25BC%25EC%259A%25B4%25EB%2593%259C-%25EC%258A%25A4%25ED%2583%25AC%25ED%2594%2584.jpg&imgrefurl=https%3A%2F%2Fwww.123rf.com%2Fphoto_23569861_sample-grunge-red-round-stamp.html&tbnid=SygWekdULxI0FM&vet=12ahUKEwjzn5TGmoz2AhUGvBoKHbgQAHoQMygCegUIARDbAQ..i&docid=mFAc4MhHhMHJNM&w=1300&h=1300&q=sample%20image&ved=2ahUKEwjzn5TGmoz2AhUGvBoKHbgQAHoQMygCegUIARDbAQ",
        description: "This is sample"
    },
    /* Index 1 */{
        name: "Karo Ahmadi",
        phone: "08733451234",
        description: "This is sample"
    },
    /* Index 2 */{
        name: "Soshians Vaziri",
        phone: "08733451234",
        description: "This is sample"
    },
    /* Index 3 */{
        name: "Arshia Ahmadpanah",
        phone: "08733451234",
        description: "This is sample"
    }
];

let carts_html = "";

for (let index = 0; index < carts.length; index++) {
    let cart = carts[index];



    let start = '<div class="cart">';
    let image = "";

    if (index == 0){
         image = '<img src="' + cart.image+ '">'
    }

    let name = '<h2 class="title">' + cart.name + '</h2>';
    let phone = '<a class="phone" href="tel:'
        + cart.phone
        + '">'
        + cart.phone
        + '</a>';

    let description = '<p class="description">' + cart.description + '</p>';
    let end = '</div>';

    let html = start
        + name
    +image
        + description
        + phone
        + end;


    carts_html += html; // adding cart to div html

}

document.getElementById('carts').innerHTML = carts_html;