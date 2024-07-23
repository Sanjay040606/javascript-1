 //selecting for popup
 var overlay = document.querySelector("#overlay")
 var popup = document.querySelector("#popup")
 var popup_display = document.querySelector("#footer__add_button")
 //selecting for function
 var article1 = document.querySelector("#article1")
 var add_book = document.querySelector("#add_btn")
 var book_title = document.querySelector("#book_title")
 var book_author = document.querySelector("#book_author")
 var book_description = document.querySelector("#book_description")
 var cancel_popup = document.querySelector("#cancel_btn")
 //overlay and popup
 popup_display.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display = "block"
    popup.style.display = "block"
 })
 // function
 add_book.addEventListener("click",function(event){
     event.preventDefault()
     var section = document.createElement("section")
     section.setAttribute("class","main__article1--section1")
     section.innerHTML = `<h2 class='main__article1--section1-h2'>${book_title.value}</h2>
     <h4 class='main__article1--section1-h4'>${book_author.value}</h4>
     <p class='main__article1--section1-p'>${book_description.value}</p>
     <button class='main__article1--section1-btn' onclick='delete_book(event)'>Delete</button>`

     article1.append(section)
     overlay.style.display = "none"
     popup.style.display = "none"
 })
 //cancel btn
 cancel_popup.addEventListener("click",function(event){
     event.preventDefault()
     overlay.style.display = "none"
     popup.style.display = "none"
 })
 // delete article
 function delete_book(event){
     event.target.parentElement.remove()
 }