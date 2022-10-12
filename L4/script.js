console.log(null || 2 || undefined);
2
console.log(alert(1) || 2 || alert(3));
1, 2
console.log(1 && null && 2);
null
console.log(alert(1) && alert(2));
1, undefined
console.log(null || 2 && 3 || 4);
3


if (age >= 14 && age <= 90)
    if ((!age >= 14 && age <= 90))
        if (age < 14 || age > 90)






            let login = prompt("Кто там ?", " ");
if (login === "Admin") {
    let password = promt("Пароль?", " ");
    if (password = "Я главный") {
        alert("Здравствуйте");
    } else if (password = "" || password = null) {
        alert("Отменено");
    } else {
        alert("Неверный пароль");

    }

}