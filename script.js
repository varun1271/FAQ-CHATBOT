const codingKnowledge = {
  python: {
    "hello world": {
      title: "Hello World in Python",
      content: "In Python, printing 'Hello World' is as simple as using the `print()` function.\n\n```python\nprint(\"Hello, World!\")\n```"
    },
    "loop": {
      title: "Loops in Python",
      content: "Python supports `for` and `while` loops. The `for` loop is commonly used with the `range()` function.\n\n```python\n# For loop\nfor i in range(5):\n    print(i)\n\n# While loop\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1\n```"
    },
    "function": {
      title: "Functions in Python",
      content: "Functions are defined using the `def` keyword.\n\n```python\ndef greet(name):\n    return f\"Hello, {name}!\"\n\nprint(greet(\"Alice\"))\n```"
    },
    "class": {
      title: "Classes in Python",
      content: "Python is object-oriented. You define classes using the `class` keyword.\n\n```python\nclass Dog:\n    def __init__(self, name):\n        self.name = name\n\n    def bark(self):\n        return \"Woof!\"\n\nmy_dog = Dog(\"Buddy\")\nprint(my_dog.name)\n```"
    }
  },
  java: {
    "hello world": {
      title: "Hello World in Java",
      content: "In Java, everything must be inside a class, and the execution starts from the `main` method.\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}\n```"
    },
    "loop": {
      title: "Loops in Java",
      content: "Java has `for`, `while`, and `do-while` loops.\n\n```java\n// For loop\nfor (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}\n\n// While loop\nint count = 0;\nwhile (count < 5) {\n    System.out.println(count);\n    count++;\n}\n```"
    },
    "class": {
      title: "Classes in Java",
      content: "Java is a strictly object-oriented language.\n\n```java\npublic class Person {\n    private String name;\n\n    public Person(String name) {\n        this.name = name;\n    }\n\n    public void sayHello() {\n        System.out.println(\"Hello, my name is \" + name);\n    }\n}\n```"
    }
  },
  c: {
    "hello world": {
      title: "Hello World in C",
      content: "In C, you use `printf` from the `stdio.h` library.\n\n```c\n#include <stdio.h>\n\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}\n```"
    },
    "loop": {
      title: "Loops in C",
      content: "C uses `for`, `while`, and `do-while` loops.\n\n```c\n// For loop\nfor (int i = 0; i < 5; i++) {\n    printf(\"%d\\n\", i);\n}\n```"
    },
    "struct": {
      title: "Structs in C",
      content: "C uses `struct` to group different data types.\n\n```c\nstruct Point {\n    int x;\n    int y;\n};\n\nstruct Point p1 = {10, 20};\n```"
    }
  },
  cpp: {
    "hello world": {
      title: "Hello World in C++",
      content: "C++ uses `std::cout` from the `iostream` library.\n\n```cpp\n#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}\n```"
    },
    "class": {
      title: "Classes in C++",
      content: "C++ supports object-oriented programming with classes.\n\n```cpp\n#include <iostream>\n#include <string>\n\nclass Cat {\npublic:\n    std::string name;\n    void meow() {\n        std::cout << \"Meow!\" << std::endl;\n    }\n};\n```"
    }
  }
};

const SUPPORTED_LANGUAGES = ["python", "java", "c", "cpp", "c++"];
const SYSTEM_PROMPT = "I am CodeGPT, a specialized assistant for Python, Java, C, and C++. I only answer questions related to these four programming languages. If you ask about something else, I will politely decline.";

// DOM Elements
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const chatForm = document.getElementById("chatForm");
const sendButton = document.getElementById("sendButton");
const newChatBtn = document.getElementById("newChatBtn");
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

// State
let isTyping = false;

// Initialization
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    }
    return hljs.highlightAuto(code).value;
  },
  breaks: true
});

function scrollChatToBottom() {
  chatBox.scrollTop = chatBox.scrollHeight;
}

function createMessageRow(sender) {
  const row = document.createElement("article");
  row.className = `message-row ${sender}-row`;

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.innerHTML = sender === "assistant" ? '<i class="fas fa-robot"></i>' : "U";

  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;

  row.appendChild(avatar);
  row.appendChild(messageDiv);
  chatBox.appendChild(row);

  return messageDiv;
}

async function streamText(element, text) {
  isTyping = true;
  let currentText = "";
  const words = text.split("");

  for (let char of words) {
    currentText += char;
    element.innerHTML = marked.parse(currentText + '<span class="cursor"></span>');
    scrollChatToBottom();
    await new Promise(resolve => setTimeout(resolve, 10)); // Faster streaming
  }

  element.innerHTML = marked.parse(currentText);
  isTyping = false;
}

function findBestResponse(query) {
  const lowerQuery = query.toLowerCase();
  const words = lowerQuery.split(/[^\w+]/).filter(Boolean);

  // Check if it's even coding related
  const codingKeywords = ["code", "program", "syntax", "how to", "write", "debug", "error", "language", "loop", "function", "class", "variable", "hello world", "struct"];
  const isCodingRelated = codingKeywords.some(keyword => lowerQuery.includes(keyword)) ||
                           SUPPORTED_LANGUAGES.some(lang => {
                             if (lang === "c") {
                               return words.includes("c");
                             }
                             return lowerQuery.includes(lang);
                           });

  if (!isCodingRelated) {
    return "I'm sorry, I specialize exclusively in coding questions for Python, Java, C, and C++. I cannot help with other topics.";
  }

  // Detect language
  let detectedLang = null;
  if (lowerQuery.includes("python")) detectedLang = "python";
  else if (lowerQuery.includes("java") && !lowerQuery.includes("javascript")) detectedLang = "java";
  else if (lowerQuery.includes("c++") || lowerQuery.includes("cpp")) detectedLang = "cpp";
  else if (lowerQuery.includes(" c ") || lowerQuery.startsWith("c ") || lowerQuery.endsWith(" c") || lowerQuery === "c") detectedLang = "c";

  if (!detectedLang) {
    // If no language detected, but coding related, ask for clarification
    return "Which language are you interested in? I can help you with Python, Java, C, or C++.";
  }

  // Search in knowledge base
  const langData = codingKnowledge[detectedLang];
  for (const [key, value] of Object.entries(langData)) {
    if (lowerQuery.includes(key)) {
      return `### ${value.title}\n\n${value.content}`;
    }
  }

  return `I can help you with ${detectedLang.toUpperCase()}, but I don't have a specific example for that yet. Try asking about "loops", "functions", or "hello world".`;
}

async function handleSendMessage(e) {
  e.preventDefault();
  const text = userInput.value.trim();

  if (!text || isTyping) return;

  // Add User Message
  const userMessageDiv = createMessageRow("user");
  userMessageDiv.textContent = text;
  userInput.value = "";
  userInput.style.height = "auto";
  sendButton.disabled = true;

  // Add Assistant Response (Streaming)
  const assistantMessageDiv = createMessageRow("assistant");
  assistantMessageDiv.innerHTML = '<span class="cursor"></span>';
  scrollChatToBottom();

  const response = findBestResponse(text);
  await streamText(assistantMessageDiv, response);
}

// Event Listeners
userInput.addEventListener("input", () => {
  userInput.style.height = "auto";
  userInput.style.height = userInput.scrollHeight + "px";
  sendButton.disabled = userInput.value.trim() === "";
});

chatForm.addEventListener("submit", handleSendMessage);

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    chatForm.dispatchEvent(new Event("submit"));
  }
});

newChatBtn.addEventListener("click", () => {
  chatBox.innerHTML = `
    <article class="message-row assistant-row">
      <div class="avatar"><i class="fas fa-robot"></i></div>
      <div class="message assistant">
        Hello! I'm CodeGPT, your specialized assistant for **Python**, **Java**, **C**, and **C++**. How can I help you code today?
      </div>
    </article>
  `;
});

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// Close sidebar on mobile when clicking main
document.querySelector(".chat-main").addEventListener("click", () => {
  sidebar.classList.remove("open");
});
