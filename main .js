const experience = {
  title: "Software Engineer",
  company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    startDate: "June 2020",
    endDate: "Present",
    responsibilities: [
      "Developed and maintained web applications using React and Node.js.",
        "Collaborated with cross-functional teams to define, design, and ship new features.",
        "Participated in code reviews and provided constructive feedback to peers.",
        "Implemented RESTful APIs and integrated third-party services.",
        "Optimized application performance and ensured scalability.",]};
        function btn() {
         window.alert(`Title: ${experience.title}\nCompany: ${experience.company}\nLocation: ${experience.location}\nStart Date: ${experience.startDate}\nEnd Date: ${experience.endDate}\nResponsibilities:\n- ${experience.responsibilities.join("\n- ")}`);

        };
        const education = {
            message:"sorry my friend there is no any degree have been uploaded here by now, so thanks for checking!!!"
        };
        function educations(){
            window.alert(`${education.message}`);
        }
const skill = {
    message:"sorry my friend there is no any Skills i have been uploaded here by now, so thanks for checking!!!"
};
function skills(){
    window.alert(`${skill.message}`);
};
const projects = {
    message:"sorry my friend there is no any project i have been uploaded here by now, so thanks for checking!!!"
};
function project(){
        window.alert(`${projects.message}`);
};
const informations = {
NAME :"KWIZERA Edison",
GENDER : "Male",
STATUS:"Singel"

};
function information(){
   window.alert(`my name: ${informations.NAME}\n my gender: ${informations.GENDER}\nmy status: ${informations.STATUS}`);
};
  
    const sendBtn = document.getElementById('send-btn');
    const input = document.getElementById('message-input');
    const chatBox = document.getElementById('chat-box');

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
      const message = input.value.trim();
      if (message) {
        addMessage(message, 'user');
        input.value = '';

        // Simulate bot response
        setTimeout(() => {
          addMessage("You said: " + message, 'bot');
        }, 500);
      }
    }

    function addMessage(text, sender) {
      const messageElem = document.createElement('div');
      messageElem.classList.add('message', sender);
      messageElem.textContent = text;
      chatBox.appendChild(messageElem);
      chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
    }
    const sliderTrack = document.getElementById('slider-track');
  sliderTrack.addEventListener('mouseenter', () => {
    sliderTrack.style.animationPlayState = 'paused';
  });
  sliderTrack.addEventListener('mouseleave', () => {
    sliderTrack.style.animationPlayState = 'running';
  });
  