import {WOW} from 'wowjs'

const animateErrorMessage = 'boxClass参数有误！'

const wowOption = {
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 0,
    mobile: true,
    live: true
}

const initWOW = (option) => {
    new WOW(Object.assign(wowOption,option)).init()
}

const getBoxClass = (option) =>{
    return Object.assign(wowOption,option).boxClass
}

export default {
    install(Vue, option) {

        initWOW(option)

        Vue.directive('animated', {
            bind(el, binding) {
                const {arg, value} = binding
                el.classList.add(getBoxClass(option),value)
            },

            unbind(el) {

            }
        })
    }
}
