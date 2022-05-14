const typed = new Typed(".typing", {
    strings: [
    "⚡ Not born to be the Best but want to<br> be better than the Best!",
    "👑 Outer Shell Black, Inner Shell White!",
    "🎸 Socitey Treats Life as a Stock,<br> Connect with The Person When Rising,<br> Get Away when its Declining.",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
    backDelay: 2000,
    showCursor: true,
});
document.getElementById("nyt").onclick = function() {
    window.open("https://discord.gg/34Un6KrbCj");
};