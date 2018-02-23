const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)
const on = (elem, type, listener) => elem.addEventListener(type,listener)

on($("button[id='toggle-left']"),'click',()=>{
   $$(".start").forEach((elem) => elem.classList.toggle('closed'))
})
on($("button[id='toggle-right']"),'click',()=>{
   $$(".end").forEach((elem) => elem.classList.toggle('closed'))
})


