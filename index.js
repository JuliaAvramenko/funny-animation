for (let i = 0; i < 5; i++) {
    const snowflake = document.createElement("div");
    const racoon = document.createElement('video');
    racoon.classList.add("video", "video-racoon");
    racoon.muted = "muted";
    racoon.autoplay = "autoplay";
    racoon.loop = "loop";
    racoon.src = "./assets/raccoon.mp4";
    racoon.style.left = `${Math.random() * 100}%`;
    racoon.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.querySelector(".racoons").appendChild(racoon);


}