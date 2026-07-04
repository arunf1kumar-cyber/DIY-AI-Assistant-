// DIY AI Assistant Demo

document.getElementById("startBtn").addEventListener("click", function () {
    alert("🚀 Welcome to DIY AI Assistant!\n\nThis is a demo website.\nSoon you'll be able to build electronics projects with AI guidance.");
});

document.querySelectorAll(".project button").forEach(button => {
    button.addEventListener("click", function () {
        alert("Project details will be available in the full version.");
    });
});
