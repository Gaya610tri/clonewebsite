let menu = document.querySelector('.checkbtn');
let navbar = document.querySelector('.navbar-menu');


menu.onclick = () => {
    menu.classList.toggle('icon-img');
    navbar.classList.toggle('open')
}

// const parentContainer = document.querySelector('.grid-container');

// parentContainer.addEventListener('click', event=>{
//     const current = event.target;

//     const isSeeMoreBtn = current.className.includes('see-more-btn');

//     if(!isSeeMoreBtn) return;

//     const currentImgs = event.target.parentNode.querySelector('.see-more-imgs');

//     currentImgs.classList.toggle('see-more-imgs--show');

//     current.textContent = current.textContent.includes('see more')?
//     "see less" : "see more";

    function toggleImages() {
        const seeMoreImgs = document.querySelector('.see-more-imgs');
        const seeMoreBtn = document.querySelector('.see-more-btn');
        const seeLessBtn = document.querySelector('.see-less-btn');

        // Toggle the display of the hidden images and buttons
        if (seeMoreImgs.style.display === "none") {
            seeMoreImgs.style.display = "inline-block";
            seeMoreBtn.style.display = "none";
            seeLessBtn.style.display = "inline-block";
        } else {
            seeMoreImgs.style.display = "none";
            seeMoreBtn.style.display = "inline-block";
            seeLessBtn.style.display = "none";
        }
    }