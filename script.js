const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
window.addEventListener("load",()=>setTimeout(()=>{$("#loader").style.opacity=0;setTimeout(()=>$("#loader").remove(),800)},500));

const stars=$("#stars"), particles=$("#particles"), hearts=$("#hearts");
for(let i=0;i<130;i++){let e=document.createElement("i");e.className="star";e.style.left=Math.random()*100+"%";e.style.top=Math.random()*100+"%";e.style.setProperty("--d",(1+Math.random()*4)+"s");e.style.opacity=.2+Math.random()*.8;stars.appendChild(e)}
for(let i=0;i<20;i++){let e=document.createElement("i");e.className="particle";e.style.left=Math.random()*100+"%";e.style.setProperty("--d",(8+Math.random()*15)+"s");e.style.animationDelay=-Math.random()*15+"s";particles.appendChild(e)}
for(let i=0;i<14;i++){let e=document.createElement("i");e.className="heart";e.textContent="♥";e.style.left=Math.random()*100+"%";e.style.setProperty("--d",(12+Math.random()*16)+"s");e.style.setProperty("--s",(10+Math.random()*22)+"px");e.style.animationDelay=-Math.random()*15+"s";hearts.appendChild(e)}

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
$$(".reveal").forEach(e=>observer.observe(e));

/* Relationship timer. The year is inferred as the most recent June 18 before now. */
function updateTimer(){
  const now=new Date(), start=new Date(now.getFullYear(),5,18,22,29,0);
  if(start>now)start.setFullYear(now.getFullYear()-1);
  let diff=Math.max(0,now-start), days=Math.floor(diff/86400000);diff%=86400000;
  let h=Math.floor(diff/3600000);diff%=3600000;let m=Math.floor(diff/60000);let s=Math.floor(diff/1000)%60;
  $("#days").textContent=days;$("#hours").textContent=String(h).padStart(2,"0");$("#minutes").textContent=String(m).padStart(2,"0");$("#seconds").textContent=String(s).padStart(2,"0");
}
updateTimer();setInterval(updateTimer,1000);

/* Music control. Add your own royalty-free MP3 at assets/love-song.mp3. */
const audio=$("#music"), btn=$("#musicBtn");
audio.src="assets/love-song.mp3";
btn.addEventListener("click",async()=>{if(audio.paused){try{await audio.play();btn.innerHTML="❚❚ <span>Music</span>"}catch(e){alert("Add a music file at assets/love-song.mp3, then press play again.")}}else{audio.pause();btn.innerHTML="♫ <span>Music</span>"}});
document.addEventListener("click",e=>{const a=e.target.closest("a[href^='#']");if(a){const el=$(a.getAttribute("href"));if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth"})}}});
