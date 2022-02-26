
let ul = document.getElementsByTagName('ul')[0];
console.log(ul);

ul.addEventListener('click', function(event){
    alert('Ul Clicked');
});



let selected_list_items = document.getElementsByClassName('selected');

for (let i = 0; i < selected_list_items.length; i++) {
    let item = selected_list_items[i];
    item.setAttribute('style',"color: red;");
}