
let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

const speech = new SpeechSynthesisUtterance(); //new speech synthesis utterance object instance
const speech1 = new SpeechSynthesisUtterance(); //new speech synthesis utterance object instance
const speech2 = new SpeechSynthesisUtterance(); //new speech synthesis utterance object instance

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; //reference to the speech recognition controller
const recognition = new SpeechRecognition(); // new speech recognition object instance
window.onload = welcome();
//function to make the robot voice for the welcome message
function robotwelcome() {
    const welcomeSpeech = new SpeechSynthesisUtterance();
    welcomeSpeech.text = "Welcome to MDX Financial Support"
    window.speechSynthesis.speak(welcomeSpeech);
    welcome(welcomeSpeech.text);
}
function welcome() {
    const speech = "Welcome to MDX Financial Support"
    chatareamain.appendChild(showchatbotmsg(speech));
}

//function to display user question on the screen 
function showusermsg(usermsg) {
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}
//function to display the user typed in query from the text field to the chatbot screen
function usermsg() {
    let usertypein = document.getElementById("userinput").value;
    chatareamain.appendChild(showusermsg(usertypein));
    chatbotvoice(usertypein);
}
//function to display the robot message on the screen which takes the intended reply as parameter
function showchatbotmsg(chatbotmsg) {
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}
//function to verify if the userinput contains any of the recognised keywords, if so the intended reply is play aloud by the robot
function chatbotvoice(messageinput) {
    var message = messageinput.toLowerCase();

    if ((message.includes('course cost')) || (message.includes('how much does my course costs')) || (message.includes('course'))) {
        speech.text = "Thank you for your query! ";
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        speech1.text = "Below is a list of the available types of programs at our institution. Can you please confirm for which type of program are you inquiring for : ";
        window.speechSynthesis.speak(speech1);
        chatareamain.appendChild(showchatbotmsg(speech1.text));
        speech.text = "Under graduate programme or postgraduate programme"
        window.speechSynthesis.speak(speech);
        createbutton();
    } else {
        if ((message.includes('undergraduate')) || (message.includes('undergraduate program')) || (message.includes('under graduate program'))) {
            speech1.text = "Please note that the below prices are applicable only for september 2021 intake students."
                + " If you aren't part of the batch of intake, you are kindly requested to please come and meet us on campus.";
            window.speechSynthesis.speak(speech1);
            chatareamain.appendChild(showchatbotmsg(speech1.text));
            speech.text = "All undergraduate programs (Excluding the LLB Program) are currently fixed to 226,000 MUR per year" +
                " LLB Bachelor Programe and LLB Laws with International Relations are currently fixed to 274,000 MUR and 280,000 MUR respectively. ";
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));

        } else {
            if ((message.includes('post graduate')) || (message.includes('postgraduate program')) || (message.includes('postgraduate')) || (message.includes('post graduate program'))) {
                speech1.text = "Please note that the below prices are applicable only for september 2021 intake students."
                    + " If you aren't part of the batch of intake, you are kindly requested to please come and meet us on campus.";
                window.speechSynthesis.speak(speech1);
                chatareamain.appendChild(showchatbotmsg(speech1.text));
                speech.text = "All postgraduate programmes are currently fixed to 280,000 MUR per year";
                window.speechSynthesis.speak(speech);
                chatareamain.appendChild(showchatbotmsg(speech.text));
            } else {
                if ((message.includes('payment')) || (message.includes("fee")) || (message.includes("fees"))) {
                    speech.text = "Thank you for your message. Due to confidentiality, you are requested to please come and meet us in the finance department on campus along with your student id.We shall verify if you have any balance due and communicate it to you on spot or you can email us your query.";
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));// calling the function to display the robot reply as text on the screen 
                } else {
                    if ((message.includes('how to clear')) || (message.includes('clear')) || (message.includes('dues')) || (message.includes('due'))) {
                        speech.text = "Are you a local or international student please?";
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                    } else {

                        if (message.includes('local')) {
                            speech.text = "The local bank details are as follows:";
                            window.speechSynthesis.speak(speech);
                            chatareamain.appendChild(showchatbotmsg(speech.text));
                            var local = document.createElement("IMG");
                            local.setAttribute("src", "images/local.PNG");
                            local.style.float = "right";
                            chatareaouter.appendChild(local);

                        } else {
                            if ((message.includes('international student')) || ((message.includes('international')))) {
                                speech.text = "For international transfers some of our accepted debit/credit cards includes: ";
                                window.speechSynthesis.speak(speech);
                                chatareamain.appendChild(showchatbotmsg(speech.text));
                                var cdcards = document.createElement("IMG");
                                cdcards.setAttribute("src", "images/cards.png");
                                cdcards.style.float = "right";
                                cdcards.style.height = "2cm"
                                chatareaouter.appendChild(cdcards);

                                speech.text = "Else you can proceed with direct bank transfers, the details are as follows:";
                                window.speechSynthesis.speak(speech);
                                chatareamain.appendChild(showchatbotmsg(speech.text));
                                var international = document.createElement("IMG");
                                international.setAttribute("src", "images/international.PNG");
                                international.style.float = "right";
                                chatareaouter.appendChild(international);
                            } else {
                                if ((message.includes('loan'))) {
                                    speech.text = "Many UK and EU students are eligible to apply for loans and grants to help meet tuition and living costs.";
                                    window.speechSynthesis.speak(speech);
                                    chatareamain.appendChild(showchatbotmsg(speech.text));
                                    speech1.text = "To check your eligibility, please visit the Student Finance pages at Gov.uk where you can then estimate your likely entitlements and  finally make an application.";
                                    window.speechSynthesis.speak(speech1);
                                    chatareamain.appendChild(showchatbotmsg(speech1.text));
                                    speech.text = "Once your application has been assessed you will receive a breakdown of your loan and/or grant entitlement for the academic year. This is known as Maintenance Funding.";
                                    window.speechSynthesis.speak(speech);
                                    chatareamain.appendChild(showchatbotmsg(speech.text));
                                    speech2.text = "You can find more information about student loan on the below link";
                                    window.speechSynthesis.speak(speech2);
                                    chatareamain.appendChild(showchatbotmsg(speech2.text));
                                        var a = document.createElement('a');

                                        // Create the text node for anchor element.
                                        var link = document.createTextNode("Student loan further details");

                                        // Append the text node to anchor element.
                                        a.appendChild(link);

                                        // Set the title.
                                        a.title = "Student loan";
                                        a.target = "_blank";
                                        // Set the href property.
                                        a.href = "https://unihub.mdx.ac.uk/support/fees-payments-funding/financial-support/student-loans";
                                       a.style.float = "right";
                                     
                                       a.style.left = "15cm"
                                       a.style.marginLeft = "15cm"
                                       a.style.backgroundColor = "black"
                                       a.style.color = "White";
                                       a.style.padding = "15px";
                                        // Append the anchor element to the body.
                                        //chatareamain.appendChild(showchatbotmsg(a));
                                        chatareaouter.appendChild(a); 
                                    } else {
                                        if ((message.includes('eligible')) || ((message.includes('scholarship')))) {
                                            speech.text = "Middlesex University offers an array of Scholarships to students from various backgrounds and disciplines. Awards vary from cash prizes to fee waivers and are available to incoming new students and current undergraduate/postgraduate students. ";
                                            window.speechSynthesis.speak(speech);
                                            chatareamain.appendChild(showchatbotmsg(speech.text));
                                            speech2.text ="In order to know if you are eligible for any scholarship kindly email the concerned team on Scholarships@mdx.ac.uk";
                                            window.speechSynthesis.speak(speech2);
                                            chatareamain.appendChild(showchatbotmsg(speech2.text));

                                        } else {
                                            if ((message.includes('hello')) || (message.includes('hi')) || (message.includes('hey'))) {
                                                speech.text = "Yes, how can we help you?";
                                                window.speechSynthesis.speak(speech);
                                                chatareamain.appendChild(showchatbotmsg(speech.text));// calling the function to display the robot reply as text on the screen 
                                            } else {
                                                speech.text = "I'm sorry I didn't understand you! Please check your query again or you can even email us on finance@mdx.ac.mu";
                                                window.speechSynthesis.speak(speech);
                                                chatareamain.appendChild(showchatbotmsg(speech.text));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    function onbuttonclick(userchoice) {
        chatareamain.appendChild(showusermsg(userchoice));
        chatbotvoice(userchoice);
    }

    function createbutton() {
        var btnunder = document.createElement("BUTTON");
        btnunder.innerHTML = "Undergraduate";
        btnunder.style.float = "right";
        btnunder.style.left = "15cm"
        btnunder.style.marginLeft = "25cm"
        btnunder.style.backgroundColor = "grey"
        btnunder.style.color = "black";
        btnunder.style.padding = "15px";
        btnunder.style.fontSize = "18px";
        btnunder.style.fontFamily = "cursive";
        btnunder.style.borderStyle = "solid";
        btnunder.style.borderColor = "white";
        btnunder.style.cursor = "pointer";
        btnunder.style.borderRadius = "50%";
        btnunder.style.display = "inline-block";
        btnunder.style.textAlign = "center";

        var choice = "undergraduate"

        chatareaouter.appendChild(btnunder);
        btnunder.onclick = function () {
            onbuttonclick(choice); return false;
        };
        var btnpost = document.createElement("BUTTON");
        btnpost.innerHTML = "Postgraduate";
        btnpost.style.float = "right";

        btnpost.style.marginLeft = "15cm"
        btnpost.style.backgroundColor = "grey"
        btnpost.style.color = "black";
        btnpost.style.padding = "15px";
        btnpost.style.fontSize = "18px";
        btnpost.style.fontFamily = "cursive";
        btnpost.style.borderStyle = "solid";
        btnpost.style.borderColor = "white";
        btnpost.style.cursor = "pointer";
        btnpost.style.borderRadius = "50%";
        btnpost.style.display = "inline-block";
        btnpost.style.textAlign = "center";

        var choice = "postgraduate"

        chatareaouter.appendChild(btnpost);
        btnpost.onclick = function () {
            onbuttonclick(choice); return false;
        };
    }


    recognition.onresult = function (e) {
        let resultIndex = e.resultIndex;
        let transcript = e.results[resultIndex][0].transcript;
        chatareamain.appendChild(showusermsg(transcript));
        chatbotvoice(transcript);
        console.log(transcript);
    }

    mic.addEventListener("click", function () {
        recognition.start();
        console.log("Activated");
    })

    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

