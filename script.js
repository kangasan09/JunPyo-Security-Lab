// ==============================
// Nexus Security Lab v3.0
// Language System
// ==============================


let percent = 0;

let currentLanguage = "EN";




// ==============================
// Boot Animation
// ==============================


function bootAnimation(){

    let bar = document.getElementById("loadingBar");
    let text = document.getElementById("bootText");
    let per = document.getElementById("percent");


    let timer = setInterval(function(){


        percent++;


        bar.style.width = percent + "%";
        per.innerHTML = percent + "%";


        if(percent == 20)
            text.innerHTML = "Loading AI...";


        if(percent == 40)
            text.innerHTML = "Loading Reverse Engineering...";


        if(percent == 60)
            text.innerHTML = "Loading Malware Database...";


        if(percent == 80)
            text.innerHTML = "Checking Security...";



        if(percent >= 100){


            clearInterval(timer);


            setTimeout(function(){


                document.getElementById("bootScreen").style.display="none";

                document.getElementById("mainScreen").style.display="block";


                typeWriter();


                updateClock();


                setInterval(updateClock,1000);



                terminalPrint(
                    "Nexus Security Lab v3.0\n" +
                    "Type 'help' to see available commands."
                );


            },500);


        }


    },40);

}






// ==============================
// Welcome Typing
// ==============================


let text = "Welcome Researcher.";

let i = 0;


function typeWriter(){


    if(i < text.length){


        document.getElementById("msg").innerHTML += text.charAt(i);


        i++;


        setTimeout(typeWriter,80);


    }

}







// ==============================
// Login
// ==============================


function login(){


    let pw = document.getElementById("password").value;



    if(pw=="1234"){


        if(currentLanguage=="EN"){


            document.getElementById("msg").innerHTML =
            "🟢 ACCESS GRANTED";


            document.getElementById("level").innerHTML =
            "Access Level : Administrator";


        }


        else{


            document.getElementById("msg").innerHTML =
            "🟢 접근 승인";


            document.getElementById("level").innerHTML =
            "접근 권한 : 관리자";

location.href="admin.html";
        }



        document.body.style.background="#002b00";


    }



    else{


        if(currentLanguage=="EN"){


            document.getElementById("msg").innerHTML =
            "🔴 ACCESS DENIED";


            document.getElementById("level").innerHTML =
            "Access Level : Guest";


        }


        else{


            document.getElementById("msg").innerHTML =
            "🔴 접근 거부";


            document.getElementById("level").innerHTML =
            "접근 권한 : 게스트";


        }


    }


}







// ==============================
// Clock
// ==============================


function updateClock(){


    let now = new Date();


    document.getElementById("date").innerHTML =
    "📅 " + now.toLocaleDateString("ko-KR");


    document.getElementById("clock").innerHTML =
    "⏰ " + now.toLocaleTimeString("ko-KR");


}







// ==============================
// Terminal Print
// ==============================


function terminalPrint(message){


    let output=document.getElementById("output");


    output.innerHTML += message + "\n\n";


    output.scrollTop = output.scrollHeight;


}







// ==============================
// Terminal Command
// ==============================


function terminalCommand(event){


    if(event.key !== "Enter")
        return;


    let input=document.getElementById("terminalInput");


    let cmd=input.value.trim().toLowerCase();



    terminalPrint("C:\\Nexus> " + cmd);



    switch(cmd){



        case "help":


            if(currentLanguage=="EN"){


                terminalPrint(
                    "Commands\n\n" +
                    "help\n" +
                    "about\n" +
                    "reverse\n" +
                    "malware\n" +
                    "clear"
                );


            }

            else{


                terminalPrint(
                    "명령어 목록\n\n" +
                    "help - 도움말\n" +
                    "about - 소개\n" +
                    "reverse - 리버싱\n" +
                    "malware - 악성코드 분석\n" +
                    "clear - 삭제"
                );


            }


        break;





        case "about":


            if(currentLanguage=="EN"){


                terminalPrint(
                    "Nexus Security Lab\n" +
                    "Learning Reverse Engineering,\n" +
                    "Malware Analysis and AI Security."
                );


            }

            else{


                terminalPrint(
                    "Nexus 보안 연구소\n" +
                    "리버스 엔지니어링,\n" +
                    "악성코드 분석 및 AI 보안 연구."
                );


            }


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


            document.getElementById("output").innerHTML="";


        break;





        default:


            if(currentLanguage=="EN"){


                terminalPrint(
                    "Unknown command.\nType 'help'."
                );


            }

            else{


                terminalPrint(
                    "알 수 없는 명령어입니다.\nhelp를 입력하세요."
                );


            }


    }



    input.value="";


}








// ==============================
// Language Change
// ==============================


function changeLanguage(){


    if(currentLanguage=="EN"){



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


        document.getElementById("level").innerHTML =
        "접근 권한 : 게스트";


        document.getElementById("password").placeholder =
        "비밀번호 입력";


        document.getElementById("loginBtn").innerHTML =
        "로그인";


        document.getElementById("terminalTitle").innerHTML =
        "터미널";


        document.getElementById("terminalInput").placeholder =
        "명령어 입력...";


        document.getElementById("langBtn").innerHTML =
        "English";


        currentLanguage="KR";


    }



    else{



        document.getElementById("siteTitle").innerHTML =
        "🦊 Nexus Security Lab";


        document.getElementById("reverse").innerHTML =
        "Reverse Engineering";


        document.getElementById("malware").innerHTML =
        "Malware Analysis";


        document.getElementById("ai").innerHTML =
        "AI Security";


        document.getElementById("msg").innerHTML =
        "Welcome Researcher.";


        document.getElementById("level").innerHTML =
        "Access Level : Guest";


        document.getElementById("password").placeholder =
        "Enter Password";


        document.getElementById("loginBtn").innerHTML =
        "LOGIN";


        document.getElementById("terminalTitle").innerHTML =
        "Terminal";


        document.getElementById("terminalInput").placeholder =
        "Type command...";


        document.getElementById("langBtn").innerHTML =
        "한국어";


        currentLanguage="EN";


    }


}






// ==============================
// Start
// ==============================


window.onload=function(){

    bootAnimation();

};
