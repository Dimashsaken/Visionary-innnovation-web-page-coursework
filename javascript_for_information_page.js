const messages = [
    "Join our company in Technology Zone of Visionary Innovation Hub for unparalleled opportunities in cutting-edge tech development! 15 QUOTAS LEFT!",
    "Become part of the Innovation Zone at Visionary Innovation Hub, where creativity meets research for groundbreaking solutions! 10 QUOTAS LEFT!",
    "Discover the Eco Zone at Visionary Innovation Hub, dedicated to sustainable practices and technologies for a greener future! 12 QUOTAS LEFT!"
];


function displayPromotionalMessages() {
    const promotionInfoDiv = document.getElementById("promotionInfo");
    let index = 0;

 
    setInterval(() => {
        promotionInfoDiv.innerHTML = `<h2>${messages[index]}</h2>`;
        index = (index + 1) % messages.length; 
    }, 3000);
}


const videos = [
    "https://personal.cs.cityu.edu.hk/~cs2204/2024/video/video1.mp4",
    "https://personal.cs.cityu.edu.hk/~cs2204/2024/video/video2.mp4"
];


function switchVideos() {
    const videoElement = document.getElementById("promoVideo");
    let videoIndex = 0;

 
    videoElement.addEventListener('ended', () => {
        videoIndex = (videoIndex + 1) % videos.length;
        videoElement.src = videos[videoIndex];
        videoElement.load(); 
        videoElement.play(); 
    });
}


window.onload = () => {
    displayPromotionalMessages();
    switchVideos();
};