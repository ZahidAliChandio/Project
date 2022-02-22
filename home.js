let navbar = document.getElementById('navbar');
let check = document.getElementById('nav-check-box');
let menuIcon = document.querySelector('#menu-icon');
let dDown = document.querySelector('#drop-btn');
let dropLi = document.getElementById('drop-down')
let faChevronRight = document.querySelector('.fa-chevron-right a');
let faGraduationCap = document.querySelector('.fa-graduation-cap');
let icons = document.querySelectorAll('ul i');
let iconText = document.querySelectorAll('ul a');
let lis = document.querySelectorAll('ul li');

//To Expand Courses
let dropCheck = document.getElementById('drop-check-box');
let dropContent = document.querySelector('ul .drop-content')
let dropContentAnchor = document.querySelector('.drop-content-Anchor')

    showNavbar();

// To Show Navbar
function showNavbar() {
    //While Navbar is expanded

    if (check.checked == true) {
        navbar.style.width = '400%';
        navbar.style.zIndex = '1000';

        for (let i = 0; i < lis.length; i++) {
            lis[i].style.width = 'inherit';
            iconText[i].style.display = 'inline';
        }
        dDown.style.color = 'white';
        dDown.style.display = 'inline-block';

        for (let i = 0; i < lis.length; i++) {
            lis[i].addEventListener('mouseover', () => {
                if (lis[i].id == 'drop-down') {
                    dropContent.style.display = 'none';
                    dropContent.addEventListener('mouseover', dropOver1)
                    dropContent.addEventListener('mouseout', dropOut2)
                }
                lis[i].style.width = 'inherit';
            })
            lis[i].addEventListener('mouseout', () => {
                lis[i].style.background = 'none';
                iconText[i].style.display = 'inline';
            })
        }
        function dropOver1() {
            if (check.checked == false) {
                dropContent.style.display = 'block';
                lis[i].style.width = '17rem';
                iconText[i].style.display = 'inline';
            }
        }
        function dropOut2() {
            dropContent.style.display = 'none';
            lis[i].style.background = 'none';
            lis[i].style.width = 'inherit';
            if (check.checked == false)
                iconText[i].style.display = 'none';
        }
    }

    // While Navbar is shrinked
    else {
        dropCheck.checked = false;
        navbar.style.width = 'inherit';
        dDown.style.display = 'none';

        for (let i = 0; i < lis.length; i++) {
            lis[i].style.width = 'inherit';
            iconText[i].style.display = 'none';
        }
        for (let i = 0; i < lis.length; i++) {
            lis[i].addEventListener('mouseover', () => {
                lis[i].style.width = '17rem';
                lis[i].style.background = 'mediumaquamarine';
                iconText[i].style.display = 'inline';

                if (lis[i].id == 'drop-down') {
                    dropContent.style.display = 'block';
                    dropContent.style.position = 'absolute';
                    dropContent.style.backgroundColor = '#0d4877';
                    dropContentAnchor.style.display = 'block';
                    dropContent.style.width = '12rem';
                    dropContent.style.marginLeft = '5.4rem';
                    dropContentAnchor.style.padding = '5px 0.5rem';
                    dropContentAnchor.style.margin = '0.5rem';
                    dropContentAnchor.innerHTML = `<i class="fas fa-chevron-right"></i>  more`;
                    dropContent.addEventListener('mouseover', dropOver)
                    dropContent.addEventListener('mouseout', dropOut)
                }
            })
            lis[i].addEventListener('mouseout', () => {
                lis[i].style.background = 'none';
                lis[i].style.width = 'inherit';
                iconText[i].style.display = 'none';
                if (lis[i].id == 'drop-down') {
                    dropContent.style.display = 'none';
                }
            })
            function dropOver() {
                if (check.checked == false) {
                    dropContent.style.display = 'block';
                    lis[i].style.width = '17rem';
                    lis[i].style.background = 'mediumaquamarine';
                    iconText[i].style.display = 'inline';
                }
            }
            function dropOut() {
                dropContent.style.display = 'none';
                lis[i].style.background = 'none';
                lis[i].style.width = 'inherit';
                if (check.checked == false)
                    iconText[i].style.display = 'none';
            }
        }
    }
}

function transform() {
    let trans = 'transform 0.5s ease-in-out';
    if (dropCheck.checked == true && check.checked == true) {
        dDown.style.transition = trans;
        dropContent.style.display = 'block';
        dDown.style.transform = 'rotate(-90deg)';
        dropContent.style.position = 'absolute';
        dropContent.style.width = '12rem';
        dropContent.style.marginLeft = '2rem';
        dropContent.style.background = 'none';
        if (check.checked == true) {
            dropContentAnchor.innerHTML = `<i class="fas fa-graduation-cap"></i> more`;
        }
        else
            dropContentAnchor.innerHTML = `<i class="fas fa-chevron-right"></i>more`;
    }
    else {
        dDown.style.transition = trans;
        dDown.style.transform = 'rotate(0deg)';
        dropContent.style.display = 'none';
    }
}

// Haad time function
function updateTime() {
    time.innerHTML = new Date().toString().slice(4, 24);
}
setInterval(updateTime, 0.01);

//Body Section

//Progress Day and Date
let progressDay = document.querySelectorAll('.progress-day');
let progressDate = document.querySelectorAll(".progress-date");
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var d = new Date();
var dayName = days[d.getDay()];

let countDate = 0;
progressDate.forEach(element => {
    setInterval(() => {
        element.innerHTML = new Date().toString().slice(8, 10);
    }, 0.01);
});
progressDay.forEach(element => {
    setInterval(() => {
        element.innerHTML = dayName;
    }, 0.01);
});
// Statistics Month
let month = document.getElementById('month');
month.innerHTML = new Date().toLocaleString('en-us', { month: 'short' });

//Body Java Script
let pTime = document.getElementById('productive-time')