let demo=document.querySelector(`#demo`)
let btn=document.createElement(`button`)
btn.classList=`btn`
//
demo.append(btn)
btn.innerText=`III`
let show=()=>{
    let show=document.createElement(`div`)
    show.setAttribute(`id`,`show`)
    demo.append(show)
    //
    let close=document.createElement(`button`)
    close.classList=`close`
    show.append(close)
    close.innerHTML=`x`
    close.addEventListener(`click`,function(){
        close.parentElement.remove()
    })
    //
    let home=document.createElement(`a`)
    home.classList=`li`
    home.innerHTML=`Home`
    show.append(home)
    let about=document.createElement(`a`)
    about.classList=`li`
    about.innerHTML=`About`
    show.append(about)
    let contact=document.createElement(`a`)
    contact.classList=`li`
    contact.innerHTML=`Contact`
    show.append(contact)
    let products=document.createElement(`a`)
    products.classList=`li`
    products.innerHTML=`Products`
    show.append(products)
    //let text=["Home", "About", "Contact", "Info"];
    //show.append(text)
}
btn.addEventListener(`click`,function(){
    show()
})



