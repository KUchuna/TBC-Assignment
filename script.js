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
})



// this portion is for sponsors page

const prevArrow = document.getElementById('prev-arrow')
const nextArrow = document.getElementById('next-arrow')
const pages = document.querySelectorAll('.sponsor-page')
const dotsContainer = document.getElementById('dots-container')
const dots = document.querySelectorAll('.sponsor-dot')

let currentPage = 0;


document.addEventListener('DOMContentLoaded', function () {
    
    // shows the selected page by changing its opacity

    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.opacity = (i === index) ? 1 : 0;
        });
        
        updateDots(index)
    }

    // manually change sponsors page with arrows
    
    prevArrow.addEventListener('click', function () {
        currentPage = (currentPage - 1 + pages.length) % pages.length;
        showPage(currentPage);
    });

    
    nextArrow.addEventListener('click', function () {
        currentPage = (currentPage + 1) % pages.length;
        showPage(currentPage);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            currentPage = index;
            showPage(currentPage);
        });
    });
    
    function updateDots(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    //timer for the pages to change automatically

    function startTimer() {
        timer = setInterval(function () {
            currentPage = (currentPage + 1) % pages.length;
            showPage(currentPage);
        }, 5000);
    }

    function stopTimer() {
        clearInterval(timer);
    }

    //this is needed so that if user is hovering/clicking on the arrows or dots
    //the timer will stop, so that it does not double skip the pages
    //and then the timer starts again once the user moves mouse away

    prevArrow.addEventListener('mouseenter', stopTimer)
    prevArrow.addEventListener('mouseleave', startTimer)
    
    nextArrow.addEventListener('mouseenter', stopTimer)
    nextArrow.addEventListener('mouseleave', startTimer)

    dotsContainer.addEventListener('mouseenter', stopTimer)
    dotsContainer.addEventListener('mouseleave', startTimer)


    startTimer();
    showPage(currentPage);

    const questions = document.querySelectorAll(".question");
    const questionArrows = document.querySelectorAll(".question-arrow")

    questions.forEach((question, index) => {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            const questionArrow = questionArrows[index];

            // close all other answers
            questions.forEach((otherQuestion, otherIndex) => {
                if (otherQuestion !== question) {
                    const otherAnswer = otherQuestion.nextElementSibling;
                    otherAnswer.style.maxHeight = "0";
                    otherAnswer.style.paddingBottom = "0";
                    questionArrows[otherIndex].src = "./assets/downArrow.svg";
                }
            });

            // toggle the clicked answer
            if (answer.style.maxHeight === "0px" || answer.style.maxHeight === "") {
                answer.style.maxHeight = answer.scrollHeight + 26 + "px";
                answer.style.paddingBottom = "26px";
                questionArrow.src = "./assets/upArrow.svg";
            } else {
                answer.style.maxHeight = "0";
                answer.style.paddingBottom = "0";
                questionArrow.src = "./assets/downArrow.svg";
            }
        });
    });
})

const hamMenu = document.getElementById("ham-menu")
const hamFirst = document.getElementById("ham-first")
const hamSecond = document.getElementById("ham-second")
const hamThird = document.getElementById("ham-third")

const navMenu = document.getElementById("nav-menu")
const headerList = document.getElementById("header-list")

const pageOverlay = document.getElementById("page-overlay")


hamMenu.addEventListener('click', function () {
    hamMenu.classList.toggle("active")
    hamFirst.classList.toggle("span-first-active")
    hamSecond.classList.toggle("span-second-active")
    hamThird.classList.toggle("span-third-active")

    navMenu.classList.toggle("nav-active")

    pageOverlay.classList.toggle("overlay-active")

    headerList.classList.toggle("list-shown")
})