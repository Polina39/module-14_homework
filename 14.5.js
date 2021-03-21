
        function mylocalStorage(){
        let date = new Date();
        let userName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя','');
    if (localStorage.length < 1) {
        userName = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя");
        localStorage.setItem("Name", userName); 
        localStorage.setItem("Date", date);
    } else {
        alert(`Добрый день, ${localStorage.getItem('Name')}! Давно не виделись. В последний раз вы были у нас ${date.getDate()} ${date.getMonth()+1}, ${date.getFullYear()} в ${date.getHours()} : ${date.getMinutes()}`);
        date = new Date ();
        localStorage.setItem("Date", date);
    }
}