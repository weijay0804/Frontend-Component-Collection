/*
 * @Author: weijay
 * @Date: 2022-08-26 17:20:53
 * @LastEditors: weijay
 * @LastEditTime: 2022-08-26 17:22:16
 * @FilePath: /frontend-component-collection/input-range/script.js
 * @Description: 
 */
const slide = document.querySelector('#slide')
const output = document.querySelector('#output')

const showvalue = () => {
    output.textContent = slide.value
}

slide.oninput = () => {
    showvalue()
}

showvalue()