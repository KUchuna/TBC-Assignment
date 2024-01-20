const header = document.getElementById('header')

let scrollPoisiton = window.scrollY

//gets the current scroll position and changes opacity for header element
window.addEventListener('scroll', () => {
    scrollPoisiton = window.scrollY

    if(scrollPoisiton > 0) {
        header.classList.add('toggle-opacity')
    }else {
        header.classList.remove('toggle-opacity')
    }
    console.log(scrollPoisiton)
})
