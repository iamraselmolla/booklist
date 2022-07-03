let title = document.getElementById("title");
let author = document.getElementById("author");
let year = document.getElementById("year");
let btn = document.querySelector(".btn");
let bookList = document.getElementById('book-list');
console.log(title, author, year)


btn.addEventListener('click', function(e){
    e.preventDefault();

    if(title.value == '' && author.value == '' && year.value == ''){
        alert('Please fill-up all input field');
    }else{
        let newRow = document.createElement('tr');

        let newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        
        let newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        
        let newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        bookList.appendChild(newRow)

    }
})