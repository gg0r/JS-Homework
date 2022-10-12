let list = document.querySelector('.navigation-list').children;
// console.log(list);

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function() {
        if (list[i].classList.contains("active")) {
            return
        } else {
            for (let i = 0; i < list.length; i++) {
                list[i].classList.remove("active")
            }
            list[i].classList.add("active")
        }
    })
}