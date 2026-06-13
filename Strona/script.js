function checkCode() {
    const code = document.getElementById("secretCode").value.trim().toLowerCase();
    const messageBox = document.getElementById("messageBox");
    const secretMessage = document.getElementById("secretMessage");

    // Dodaliśmy "messages/" przed każdą nazwą pliku
    const routes = {
        "maks": "messages/maks.html",
        "kosmos": "messages/messages/kolega2.html",
        "sunset": "messages/kolega3.html",
        "minimal": "messages/kolega4.html",
        "gamer": "messages/kolega5.html",
        "retro": "messages/kolega6.html",
        "pastel": "messages/kolega7.html",
        "zen": "messages/kolega8.html",
        "gold": "messages/kolega9.html",
        "michalina": "messages/michalina.html",
        "michalina1": "messages/michalina1.html"
    };

    if (routes[code]) {
        window.location.href = routes[code];
    } else {
        secretMessage.innerText = "Niepoprawny kod. Spróbuj ponownie.";
        messageBox.classList.remove("hidden");
    }
}