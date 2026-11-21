const reactionBox = document.querySelector('#reactionBox');
const waitBox = document.querySelector('#waitBox');
const clickBox = document.querySelector('#clickBox');
const message = document.querySelector('#message');
const myBtn = document.querySelector('#myBtn');

waitBox.style.display = "block";
clickBox.style.display = "none";

myBtn.addEventListener('click', () => {
    reactionBox.style.display = 'none';
    waitBox.style.display = "block";
    message.textContent = "Wait for green!";
    setTimeout(() => {
        waitBox.style.display = "none";
        clickBox.style.display = "block";
        message.textContent = "CLICK NOW!";
        startTime = Date.now();
    }), Math.floor(Math.random() * 4000) + 2000;
})
clickBox.addEventListener('click', () => {
    let endTime = Date.now();

    let reactionTime = endTime - startTime;

    message.textContent = `Your reaction time: ${reactionTime} ms`;
});
