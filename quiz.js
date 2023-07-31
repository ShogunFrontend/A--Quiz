// Quiz data
const quizData = [
  {
    question:
      "Question 1: Which of the following mobile devices is known to use electrophoretic ink?",
    choices: ["E-Reader", "Smart Watch", "Smart Glass", "Tablet"],
    correctAnswer: ["E-Reader"],
    explanation:
      "The Majority of E-Reader displays employ electrophoretic ink, or E ink, which is a patented sort of electronic paper. Although E ink is available in color, many people believe that grayscale or pure black and white are the finest applications for it. Furthermore,E Ink consumes almost no power to keep print on the page until it is altered.",
  },
  {
    question:
      "Question 2: What best describes the job of an inverter in a laptop?",
    choices: [
      "It changes the screen orientation when the laptop is rotated.",
      "It converts AC power into DC power for the display backlight.",
      "It allows the laptop display to function in tablet mode.",
      "It converts DC power into AC for the display backlight.",
    ],
    correctAnswer: [
      "It converts AC power into DC power for the display backlight.",
    ],
    explanation:
      "The laptop power supply converts AC power into DC power for the laptop's internal circuitry. The display backlight, if used, needs AC power. The inverter's job is to convert (invert) the DC power into AC power for the backlight.",
  },
  {
    question:
      "Question 3: Your customer has a laptop with a built-in battery that no longer charges. You've assured them that replacing the battery would simply solve the problem. Which of the following steps must be done FIRST?",
    choices: [
      "Disconnect the LCD panel.",
      "Disconnect the external power.",
      "Remove the back cover",
      "Remove the keyboard",
    ],
    correctAnswer: ["Disconnect the external power."],
    explanation:
      "Legacy laptops may include a removable and replaceable battery that may be accessed by sliding a connector or removing a few screws from the back of the chassis, but you may not be able to obtain a compatible replacement. Internal batteries are used in modern laptops. To avoid being shocked or harming the laptop, turn off the power before removing the back (bottom) cover to access the battery. You'll also want to make sure that you get a compatible battery in terms of both functionality and size/shape. Most don't require you to remove the keyboard or LCD panel to access the battery, but before you do any of those, make sure the power is turned off and you've thoroughly researched the laptop.",
  },
  {
    question:
      "Question 4: What THREE components of a mobile display are frequently linked in such a way that if one fails, the other two must be replaced?",
    choices: ["Digitizer", "Glass cover", "LCD", "Wi-Fi antenna"],
    correctAnswer: ["Digitizer", "Glass cover", "LCD"],
    explanation:
      "A mobile device's digitizer is a thin layer of electronic material that is attached or fused to the back of the glass. Popular new smartphones include all three,so if you lose the ability to interact with the smartphone via touch, you must replace not only the digitizer but also the glass cover and LCD (Liquid Crystal Display). Because it is sold as a single unit, if the glass cover shatters, the digitizer and LCD are also replaced. The Wi-Fi antenna is typically a separate component within the case.",
  },
  {
    question:
      "Question 5: A Technician is configuring a customer's mobile device to use email through an ISP. The Port number that he should configure to use SMTP is, port ____",
    choices: ["995", "25", "110", "143"],
    correctAnswer: ["25"],
    explanation:
      "SMTP sends mail to the server on TCP port 25. POP3 uses port 110. IMAP4 uses port 143. POP3 uses port 995 securely over SSL or TLS.",
  },
  {
    question:
      "Question 6: You are configuring TCP/IP hosts on the network manually. What configuration parameter specifies the router's internal address, which allows internet access?",
    choices: ["DNS server", "DHCP server", "Default gateway", "Subnet mask"],
    correctAnswer: ["Default gateway"],
    explanation:
      "On the LAN side of the router, the default gateway is the address to the network's router. The router enables the host to communicate with hosts outside the local network. the router's internal address is another name for the default gateway. To view the default gateway address that the local computer is currently set to use, run the ipconfig / all command. The router will also have an external address, which will be used to communicate with networks that are not part of the LAN. When requesting information from a remote network, almost almost all modern routers use a process known as network address translation (NAT), which substitutes the router's external address for the host's IP address. When the router receives the information, it knows which host requested it and forwards it to the relevant host. the router protects the local hosts from the outside world in this way.",
  },
  {
    question:
      "Question 7: What IEEE Wi-Fi protocol is also referred to as Wi-Fi 6?",
    choices: ["802.11ax", "802.11ac", "802.11n", "802.11a"],
    correctAnswer: ["802.11ax"],
    explanation:
      "The 802.11ax standard from the institute of Electrical and Electronic Engineering (IEEE) is currently known as Wi-Fi 6, and it is considered a replacement for 802.11ac (Wi-Fi 5). 802.11n is sometimes known as Wi-Fi 4. Prior IEEE standards (802.11b, 802.11a, and 802.11g) are not marked with official Wi-Fi x nomenclature, but working backwards in time, 802.11g is Wi-Fi 3, 802.11a is Wi-Fi 2, and 802.11b is Wi-fi 1.",
  },
  {
    question:
      "Question 8: You are troubleshooting a Cat6 network connection that is intermittently failing. You believe there is a short in the connection. which tool can you use to figure this out?",
    choices: [
      "Crimper",
      "Tone generator and probe",
      "Cable tester",
      "Loopback plug",
    ],
    correctAnswer: ["Cable tester"],
    explanation:
      "A cable tester normally employs lights to indicate whether or not the cable is functioning properly; if there is a short, the indicators for two wires will light up at the same time. Cable testers range in the price from a few dollars to hundreds of dollars for the more advanced models. Some of the better ones can tell you how faw away the fault in the cable is. A tone generator and probe are used to trace a wire or find a specific wire among a set of wires, a loopback plug is used to test a network interface card (NIC), and a crimper is used to connect a network wire to its terminator, which is typically an RJ45 plug.",
  },
  {
    question:
      "Question 9: Calibration is a required step in the maintenance process of which printer types?",
    choices: ["Impact", "Thermal", "Inkjet", "Laser"],
    correctAnswer: ["Inkjet", "Laser"],
    explanation:
      "Both Laser and Inkjet printers require calibration on occasion. The exact point depends on the printer, but it's usually after inserting a new ink cartridge for Inkjet printers and when you need to adjust colors for Laser printers.",
  },
  {
    question:
      "Question 10: A cable in a network is only capable of 100 Mbps maximum speed. What type of cable is this?",
    choices: ["Cat 5", "Single mode", "Cat 6a", "Cat 5e"],
    correctAnswer: ["Cat 5"],
    explanation:
      "Cat 5 UTP can transmit data at up to 100 Mbps over a 100-meter distance. Cat 5e has a data rate up to 1 Gbps. Cat 6 and later can handle up to 10 Gbps. Single mode fiber optic cable is very fast form of fiber optic cable",
  },
  {
    question:
      "Question 11: You are replacing a motherboard in a computer that uses an AMD Ryzen 3 processor. Which of the following CPU socket types must the motherboard have?",
    choices: ["AM2", "AM3", "AM4", "LGA 1151"],
    correctAnswer: ["AM4"],
    explanation:
      "The AMD Ryzen 3, Ryzen 5, and Ryzen 7 CPUs use Socket AM4. Am2 and AM3 are used for older processors, such as the Phenom II, Athlon II, Sempron, and Opteron. Any socket that starts with LGA in its socket name is for intel processors.",
  },
  {
    question:
      "Question 12: You are using the best practice methodology to troubleshoot a video problem. During which step should you question the obvious?",
    choices: [
      "Establish a theory of probable cause.",
      "Establish a plan of action to resolve the problem.",
      "Test the theory to determine cause.",
      "Identify the problem",
    ],
    correctAnswer: ["Establish a theory of probable cause."],
    explanation:
      "The second step in the best practice methodology is to establish a theory of probable cause (question the obvious). While it makes sense to question the obvious at all times during troubleshooting, it officially falls under this step in the best methodology.",
  },
  {
    question:
      "Question 13: You hear a rhythmic ticking coming from inside the case while you are turning on a computer, and it fails to boot. what causes the problem?",
    choices: [
      "A Bomb",
      "Failed CPU",
      "Failed Ram",
      "Failed Motherboard",
      "Failed Hard Drive",
    ],
    correctAnswer: ["Failed Hard Drive"],
    explanation:
      "Ticking or clicking noses are only caused by components with moving parts. (Bombs can too, but hopefully, you recognized that as a fake answer!) This question assumes that the hard drive is an HDD and not an SSD but none of the other components would create a ticking noise.",
  },
  {
    question:
      "Question 14: Users are complaining that their print jobs are not printing. You open the print queue and see 50 jobs lined up. The printer is connected suitably and online. You should do what in this situation?",
    choices: [
      "Open printer Troubleshooting and have it diagnose the problem",
      "Delete and reinstall the printer",
      "Delete and reinstall Windows",
      "Stop and restart the print spooler",
    ],
    correctAnswer: ["Stop and restart the print spooler"],
    explanation:
      "You should stop and start the printer spooler service if print jobs are seemingly getting 'stuck' in the printer queue. There is no Printer Troubleshooting utility. Deleting and reinstalling the printer and/or Windows is not necessary.",
  },
  {
    question:
      "Question 15: You decide to gain a new IP address from the DHCP server while troubleshooting a client computer. After releasing the existing address, a command that you could use to get new IP information from the DHCP server is _____.",
    choices: [
      "ifconfig /release",
      "ifconfig /start",
      "ipconfig /renew",
      "ipconfig /refresh",
    ],
    correctAnswer: ["ipconfig /renew"],
    explanation:
      "Perhaps, the most-used utility in troubleshooting and network configurations is the ipconfig command. The ipconfig /renew command will send a query to the DHCP server asking it to resend and renew all DHCP information. For a more detailed look at the ipconfig command type <em>ipconfig /?</em> at the command prompt. The ifconfig command is used with Linux and macOS clients. There are no /refresh or /start switches for these commands.",
  },
  {
    question:
      "Question 16: An Organization wants their employees to access their productivity apps from anywhere they have an internet connection. Therefore, they have decided to implement Google Apps. This is a instance of _____ cloud model.",
    choices: ["IaaS", "NaaS", "PaaS", "SaaS"],
    correctAnswer: ["SaaS"],
    explanation:
      "SasS can be described as any program that is accessed via the Web and not locally installed. Google Apps&reg and Dropbox&reg; are examples of SassS providers.",
  },
  {
    question:
      "Question 17: Your employer has a large team of developers that concentrate on developing a significant set of internal business applications. In an effort to speed up the time to market of bug fixes and new features you have been asked to find a developer-focused cloud platform. The type of cloud computing model that has a focus on software development is _____.",
    choices: ["PaaS", "IaaS", "DaaS", "SaaS"],
    correctAnswer: ["PaaS"],
    explanation:
      "A Platform as a Service (PaaS) is a cloud computing model that focuses on simplifying software delivery. A PaaS will try to automate everything but the software development itself, comprising the creation of application servers, configuration of those servers, network setup, and possibly even creation of extra services like databases or file storage servers. The Ultimate target of a PaaS is to be so simple a developer can upload their code and it will run without the need of specialized IT operations teams to install, configure, monitor, etc. the application.",
  },
  {
    question:
      "Question 18: Which of the following options are required to accomplish full virtualization?",
    choices: ["Rapid Elasticity", "Emulator", "Hypervisor", "Measured Service"],
    correctAnswer: ["Hypervisor"],
    explanation:
      "To accomplish full virtualization, hypervisors are needed. They handle all interactions during virtualization and make it possible to operate multiple guests operating systems at once.",
  },
  {
    question:
      "Question 19: What port does traffic travel on when you connect to a website that encrypts its connection with TLS?",
    choices: ["443", "21", "80", "143"],
    correctAnswer: ["443"],
    explanation:
      "Hypertext Transfer Protocol Secure (HTTPS) can be used to securely encrypt traffic between a web server and a client. HTTPS connections are protected by Secure Socket Layer (SSL) or Transport Layer Security (TLS). HTTPS employs port 443. File Transfer Protocol (FTP) uses port 21, Hypertext Transfer Protocol (HTTP) uses port 80, and Internet Mail Access Protocol (IMAP) uses port 143.",
  },
  {
    question:
      "Question 20: You are given two hard drives by a client and he wants you to increase the fault tolerance of his computer's storage system. Which of the following is the BEST solution to meet his requirements?",
    choices: [
      "Install both drives and configure them as separate volumes.",
      "Install both drives and implement RAID-1.",
      "Install both drives and implement RAID-5.",
      "Install both drives and implement RAID-0",
    ],
    correctAnswer: ["Install both drives and implement RAID-1."],
    explanation:
      "RAID-1 is also known as disk mirroring since it writes data to both drives at the same time. If one drive fails, the data is still available on the other. RAID-0 is a disk striping technique that does not provide fault tolerance. RAID-5 provides fault tolerance and striping with parity, although it requires a minimum of three hard disks.",
  },

  // Add more questions here
];

// Quiz state
let currentQuestion = 0;
let userScore = 0;

// DOM elements
const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitBtn = document.getElementById("submit-btn");
const feedbackElement = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

// Event listeners
startBtn.addEventListener("click", startQuiz);
choicesElement.addEventListener("change", enableSubmit);
submitBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", nextQuestion);

// Function to start the quiz
function startQuiz() {
  document.getElementById("start-screen").style.display = "none";
  quizContainer.style.display = "block";
  loadQuestion();
  submitBtn.style.display = "block";
}

// Function to load a question and its choices
function loadQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;
  choicesElement.innerHTML = "";

  for (let i = 0; i < question.choices.length; i++) {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const label = document.createElement("label");
    input.type = question.correctAnswer.length === 1 ? "radio" : "checkbox";
    input.name = "choice";
    input.value = i;
    label.innerText = question.choices[i];
    li.appendChild(input);
    li.appendChild(label);
    choicesElement.appendChild(li);
  }

  submitBtn.disabled = true;
  nextBtn.style.display = "none";
  feedbackElement.style.display = "none";
}

// Function to enable submit button when a choice is selected
function enableSubmit() {
  const selectedChoices = Array.from(
    document.querySelectorAll('input[name="choice"]:checked')
  );
  submitBtn.disabled = selectedChoices.length === 0;
}

// Function to check the user's answer
function checkAnswer() {
  const selectedChoices = Array.from(
    document.querySelectorAll('input[name="choice"]:checked')
  ).map((choice) => parseInt(choice.value));

  if (selectedChoices.length === 0) return;

  const question = quizData[currentQuestion];
  const correctChoices = question.correctAnswer.map((answer) =>
    question.choices.indexOf(answer)
  );

  const isCorrect =
    selectedChoices.length === correctChoices.length &&
    selectedChoices.every((choice) => correctChoices.includes(choice));

  if (isCorrect) {
    userScore++;
    feedbackElement.innerHTML = `<strong>Correct!</strong> ${question.explanation}`;
  } else {
    feedbackElement.innerHTML = `<strong>Wrong!</strong> ${question.explanation}`;
  }

  feedbackElement.style.display = "block";
  submitBtn.disabled = true;
  nextBtn.style.display = "block";

  // Disable input elements
  const inputElements = Array.from(
    document.querySelectorAll('input[name="choice"]')
  );
  inputElements.forEach((input) => {
    input.disabled = true;
  });
}
// Function to move to the next question
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion === quizData.length) {
    endQuiz();
  } else {
    loadQuestion();
  }
}
//function to end the quiz and show score
function endQuiz() {
  quizContainer.style.display = "none";
  document.getElementById("finished-screen").style.display = "block";
  document.getElementById(
    "final-score"
  ).innerText = `Your score: ${userScore}/${quizData.length}`;
  startBtn.disabled = true;
}

function goToStartScreen() {
  location.reload();
}
