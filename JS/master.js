
let active=document.querySelectorAll(".header .assest .text li a")

active.forEach(function(ele){
    ele.onclick=function(){
        active.forEach(function(ele){
            ele.classList.remove("active")
        })
        this.classList.add("active")
    }
})



let current=document.querySelectorAll("body nav nav__items nav__item nav__item-btn")

current.forEach(function(ele){
    ele.onclick=function(){
        current.forEach(function(ele){
            ele.classList.remove("current")
        })
        this.classList.add("current")
    }
})

