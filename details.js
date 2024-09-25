const existingWindow = window.open('', 'myWindow');

document.querySelector('.back-to-main').addEventListener('click', function(){
    if (existingWindow && !existingWindow.closed) {
        existingWindow.focus();
    } else {
        const newWindow = window.open('file:///C:/Users/User/Desktop/dato2/Product%20Site/main.html', 'myWindow');
    }
});


const reviews = document.getElementById('reviews');

//We do [0] because getElementByClassName returns an Array.
const reviewPopUp = document.getElementsByClassName('review-pop-up')[0];

reviews.addEventListener('click', function(){
    if (reviewPopUp.style.display == 'none' || reviewPopUp.style.display == '') {
        reviewPopUp.style.display = 'block';
        
    } else {
        reviewPopUp.style.display = 'none';
    }
});
