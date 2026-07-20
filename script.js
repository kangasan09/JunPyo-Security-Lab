// ==============================
// JunPyo Security Lab v3.0
// ==============================

let percent = 0;

// 부팅 화면
function bootAnimation() {

    let bar = document.getElementById("loadingBar");
    let text = document.getElementById("bootText");
    let per = document.getElementById("percent");

    let timer = setInterval(function () {

        percent++;

        bar.style.width = percent + "%";
        per.innerHTML = percent + "%";

        if (percent == 20)
            text.innerHTML = "Loading AI...";

        if (percent == 40)
            text.innerHTML = "Loading Reverse Engineering...";

        if (percent == 60)
            text.innerHTML = "Loading Malware Database...";

        if (percent == 80)
            text.innerHTML = "Checking Security...";

        if (percent >= 100) {

            clearInterval(timer);

            setTimeout(function () {

                document.getElementById("bootScreen").style.display = "none";
                document.getElementById("mainScreen").style.display = "block";

                typeWriter();
                updateClock();

                setInterval(updateClock, 1000);

                terminalPrint(
                    "JunPyo Security Lab v3.0\n" +
                    "Type 'help' to see available commands."
                );

            }, 500);

        }

    }, 40);

}

// 타이핑 애니메이션
let text = "Welcome Researcher.";
let i = 0;

function typeWriter() {

    if (i < text.length) {

        document.getElementById("msg").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 80);

    }

}

// 로그인
function login() {

    let pw = document.getElementById("password").value;

    if (pw == "1234") {

        document.getElementById("msg").innerHTML =
            "🟢 ACCESS GRANTED";

        document.getElementById("level").innerHTML =
            "Access Level : Administrator";

        document.body.style.background = "#002b00";

    }
    else {

        document.getElementById("msg").innerHTML =
            "🔴 ACCESS DENIED";

        document.getElementById("level").innerHTML =
            "Access Level : Guest";

    }

}

// 날짜 / 시간
function updateClock() {

    let now = new Date();

    document.getElementById("date").innerHTML =
        "📅 " + now.toLocaleDateString("ko-KR");

    document.getElementById("clock").innerHTML =
        "⏰ " + now.toLocaleTimeString("ko-KR");

}

// 터미널 출력
function terminalPrint(message) {

    let output = document.getElementById("output");

    output.innerHTML += message + "\n\n";

    output.scrollTop = output.scrollHeight;

}

// 명령어
function terminalCommand(event) {

    if (event.key !== "Enter")
        return;

    let input = document.getElementById("terminalInput");

    let cmd = input.value.trim().toLowerCase();

    terminalPrint("C:\\JunPyo> " + cmd);

    switch (cmd) {

        case "help":

            terminalPrint(
                "Commands\n\n" +
                "help\n" +
                "about\n" +
                "reverse\n" +
                "malware\n" +
                "clear"
            );

            break;

        case "about":

            terminalPrint(
                "JunPyo Security Lab\n" +
                "Learning Reverse Engineering,\n" +
                "Malware Analysis and AI Security."
            );

            break;

        case "reverse":

            terminalPrint(
                "Reverse Engineering\n" +
                "- x64dbg\n" +
                "- Ghidra\n" +
                "- IDA Free"
            );

            break;

        case "malware":

            terminalPrint(
                "Malware Analysis\n" +
                "- Static Analysis\n" +
                "- Dynamic Analysis\n" +
                "- Sandbox"
            );

            break;

        case "clear":

            document.getElementById("output").innerHTML = "";

            break;

        default:

            terminalPrint(
                "Unknown command.\nType 'help'."
            );

    }

    input.value = "";

}

// 시작
window.onload = function () {

    bootAnimation();

};

function changeLanguage(){

    document.getElementById("siteTitle").innerHTML =
    "🦊 Nexus 보안 연구소";


    document.getElementById("reverse").innerHTML =
    "리버스 엔지니어링";


    document.getElementById("malware").innerHTML =
    "악성코드 분석";


    document.getElementById("ai").innerHTML =
    "AI 보안";


    document.getElementById("msg").innerHTML =
    "연구원님 환영합니다.";

}
