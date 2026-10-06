const audio = document.getElementById("audio");
const nowPlaying = document.getElementById("nowPlaying");
const soundBtn = document.getElementById("soundBtn");

document.querySelectorAll(".song-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    audio.src = btn.dataset.song;
    nowPlaying.textContent = "Now playing: " + btn.dataset.name;
    audio.play().catch(() => {
      nowPlaying.textContent = "Now selected: " + btn.dataset.name + " — press Play 🎵";
    });
  });
});

soundBtn.addEventListener("click", () => {
  if (!audio.src) {
    document.getElementById("music").scrollIntoView({behavior:"smooth"});
  } else if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

document.querySelectorAll(".memory-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    modalTitle.textContent = btn.dataset.title;
    modalText.textContent = btn.dataset.text;
    modal.classList.add("show");
    burstHearts(12);
  });
});

document.getElementById("closeModal").addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("show");
});

function burstHearts(count=5){
  for(let i=0;i<count;i++){
    setTimeout(()=>{
      const h=document.createElement("div");
      h.className="float-heart";
      h.textContent=["❤️","💖","💕","🌸","✨"][Math.floor(Math.random()*5)];
      h.style.left=(10+Math.random()*80)+"vw";
      h.style.fontSize=(16+Math.random()*22)+"px";
      document.body.appendChild(h);
      setTimeout(()=>h.remove(),5000);
    },i*120);
  }
}
setInterval(()=>burstHearts(1),1800);
