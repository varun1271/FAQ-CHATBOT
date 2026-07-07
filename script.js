const codingTopics = {
  python: {
    title: "Python Programming",
    definition: "Python is a high-level, interpreted, general-purpose programming language.",
    why: "It is widely used for web development, data science, AI, and automation due to its simple syntax.",
    syntax: "```python\nprint(\"Hello World\")\n```",
    explanation: "Python focuses on readability. It uses indentation to define code blocks instead of curly braces.",
    flow: "```\nStart -> Write Code -> Interpreter -> Output\n```",
    realLife: "Building a recommendation system for Netflix or an automation script for file management.",
    examples: "```python\n# Variables\nx = 10\n\n# List\nmy_list = [1, 2, 3]\n\n# Loop\nfor i in my_list:\n    print(i)\n```",
    mistakes: "Indentation errors are the most common mistake for beginners.",
    interview: "What is the difference between list and tuple?",
    bestPractices: "Follow PEP 8 guidelines for clean code.",
    summary: "Python is a versatile language perfect for beginners and experts alike."
  },
  loops: {
    title: "Loops in Programming",
    definition: "Loops are used to repeat a block of code multiple times.",
    why: "To automate repetitive tasks without writing the same code again.",
    syntax: "```python\nfor i in range(5):\n    print(i)\n```",
    explanation: "A `for` loop iterates over a sequence, while a `while` loop runs as long as a condition is true.",
    flow: "```\nCheck Condition -> [True] -> Execute Code -> Repeat -> [False] -> Stop\n```",
    realLife: "Sending an email to 1,000 customers in a list.",
    examples: "```python\n# For loop\nfor x in range(1, 6):\n    print(x)\n\n# While loop\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1\n```",
    mistakes: "Infinite loops (forgetting to update the condition) and Off-by-one errors.",
    interview: "What is an infinite loop and how do you prevent it?",
    bestPractices: "Use descriptive variable names for iterators (e.g., `item` instead of `i`).",
    summary: "Loops are fundamental for handling collections and repetitive logic."
  },
  java: {
    title: "Java Programming",
    definition: "Java is a high-level, class-based, object-oriented programming language.",
    why: "It is designed to have as few implementation dependencies as possible (Write Once, Run Anywhere).",
    syntax: "```java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World\");\n    }\n}\n```",
    explanation: "Java code is compiled into bytecode that runs on the Java Virtual Machine (JVM).",
    flow: "```\nCode (.java) -> Compiler -> Bytecode (.class) -> JVM -> Machine Code\n```",
    realLife: "Enterprise-level server-side applications and Android apps.",
    examples: "```java\n// Variable\nint num = 10;\n\n// If statement\nif (num > 5) {\n    System.out.println(\"Greater than 5\");\n}\n```",
    mistakes: "NullPointerExceptions and forgetting to declare the main method correctly.",
    interview: "What is JVM, JRE, and JDK?",
    bestPractices: "Follow CamelCase naming conventions and keep classes modular.",
    summary: "Java is a robust, secure, and powerful language for large-scale systems."
  },
  c: {
    title: "C Programming",
    definition: "C is a general-purpose, procedural computer programming language.",
    why: "It provides low-level access to memory and is used for system programming.",
    syntax: "```c\n#include <stdio.h>\nint main() {\n    printf(\"Hello World\");\n    return 0;\n}\n```",
    explanation: "C is a middle-level language that combines features of high-level and low-level languages.",
    flow: "```\nSource Code -> Preprocessor -> Compiler -> Assembler -> Linker -> Executable\n```",
    realLife: "Developing operating systems (Windows, Linux) and embedded systems.",
    examples: "```c\n// Pointers\nint x = 10;\nint *ptr = &x;\nprintf(\"%d\", *ptr);\n```",
    mistakes: "Buffer overflows and memory leaks (forgetting to free allocated memory).",
    interview: "What are pointers and how do they work in C?",
    bestPractices: "Always initialize variables and check for NULL pointers.",
    summary: "C is the foundation of modern computing and essential for system-level mastery."
  },
  cpp: {
    title: "C++ Programming",
    definition: "C++ is a general-purpose programming language as an extension of the C programming language.",
    why: "It adds object-oriented features to C, making it suitable for large-scale software.",
    syntax: "```cpp\n#include <iostream>\nint main() {\n    std::cout << \"Hello World\";\n    return 0;\n}\n```",
    explanation: "C++ supports both procedural and object-oriented programming paradigms.",
    flow: "```\nSource (.cpp) -> Compiler -> Object File (.o) -> Linker -> Executable\n```",
    realLife: "Game development (Unreal Engine), high-performance applications, and browsers.",
    examples: "```cpp\nclass MyClass {\n  public:\n    void myMethod() {\n      std::cout << \"Hello World\";\n    }\n};\n```",
    mistakes: "Complexity in using multiple inheritance and memory management errors.",
    interview: "What is the difference between C and C++?",
    bestPractices: "Use RAII for memory management and prefer STL containers.",
    summary: "C++ offers high performance and fine-grained control over system resources."
  }
};

const allTopicKeys = [
  "python", "java", "c", "cpp", "loops", "arrays", "functions", "oops", "recursion", "pointers", "classes", "objects", "inheritance", "polymorphism", "abstraction", "encapsulation", "data structures", "algorithms", "sorting", "searching", "linked list", "stack", "queue", "tree", "graph", "hash map", "exception handling", "file handling", "multithreading", "standard library", "variables", "data types", "operators", "control flow", "conditional statements", "strings", "input output", "memory management", "debugging", "compilation"
];

const supportedFixLanguages = [
  "Python", "Java", "C", "C++"
];

// DOM Elements
const learnInput = document.getElementById("learnInput");
const learnSubmit = document.getElementById("learnSubmit");
const fixSubmit = document.getElementById("fixSubmit");
const fixCodeInput = document.getElementById("fixCodeInput");
const fixLanguage = document.getElementById("fixLanguage");
const landingPage = document.getElementById("landingPage");
const responsePage = document.getElementById("responsePage");
const responseContent = document.getElementById("responseContent");
const backBtn = document.getElementById("backBtn");
const themeToggle = document.getElementById("themeToggle");
const autocompleteBox = document.getElementById("autocompleteSuggestions");
const loadingOverlay = document.getElementById("loadingOverlay");
const toastContainer = document.getElementById("toast-container");

// State
let history = JSON.parse(localStorage.getItem("codeGPT_history") || "[]");

// Populate Languages
function populateLanguages() {
  fixLanguage.innerHTML = "";
  supportedFixLanguages.forEach(lang => {
    const opt = document.createElement("option");
    opt.value = lang.toLowerCase();
    opt.textContent = lang;
    fixLanguage.appendChild(opt);
  });
}
populateLanguages();

// Theme Logic
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  themeToggle.innerHTML = isLight ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

// Toast Logic
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Learn Coding Logic
function handleLearnSearch() {
  let query = learnInput.value.trim();

  if (!query) return;

  if (!query.startsWith("/")) {
    showToast("Please start your topic using '/'", "error");
    return;
  }

  const topic = query.substring(1).toLowerCase();

  const isAllowedTopic = allTopicKeys.includes(topic) ||
                         allTopicKeys.some(key => topic.includes(key));

  if (!isAllowedTopic || isNonCoding(topic)) {
    renderRejection(topic);
    addToHistory(`Rejected: ${query}`);
  } else if (codingTopics[topic]) {
    renderTopic(codingTopics[topic]);
    addToHistory(`Learn: ${query}`);
  } else {
    renderGenericCodingResponse(topic);
    addToHistory(`Learn: ${query}`);
  }
}

function isNonCoding(query) {
  const nonCodingKeywords = ["virat kohli", "joke", "weather", "who is", "capital", "movie", "politics", "sports"];
  const otherLanguages = ["javascript", "js", "typescript", "ts", "php", "ruby", "swift", "kotlin", "rust", "go", "html", "css", "sql"];

  const isOtherLang = otherLanguages.some(lang => query.toLowerCase() === lang || query.toLowerCase().includes(lang + " "));
  const isNonCodingQuery = nonCodingKeywords.some(k => query.toLowerCase().includes(k));

  return isNonCodingQuery || isOtherLang;
}

function renderTopic(data) {
  loadingOverlay.classList.remove("hidden");
  setTimeout(() => {
    loadingOverlay.classList.add("hidden");
    landingPage.classList.add("hidden");
    responsePage.classList.remove("hidden");

    responseContent.innerHTML = "";

    const h1 = document.createElement("h1");
    h1.textContent = data.title;
    responseContent.appendChild(h1);

    const sections = [
      { h: "Definition", p: data.definition, open: true },
      { h: "Why it is used", p: data.why, open: true },
      { h: "Syntax", m: data.syntax, open: true },
      { h: "Simple Explanation", p: data.explanation, open: false },
      { h: "Flow Diagram (ASCII)", m: data.flow, open: false },
      { h: "Real-life Example", p: data.realLife, open: false },
      { h: "Multiple Examples", m: data.examples, open: false },
      { h: "Common Mistakes", p: data.mistakes, open: false },
      { h: "Interview Questions", p: data.interview, open: false },
      { h: "Best Practices", p: data.bestPractices, open: false },
      { h: "Summary", p: data.summary, open: true }
    ];

    sections.forEach(s => {
      const details = document.createElement("details");
      if (s.open) details.open = true;
      details.style.marginBottom = "1.5rem";
      details.style.borderBottom = "1px solid var(--border-color)";
      details.style.paddingBottom = "1rem";

      const summary = document.createElement("summary");
      summary.style.cursor = "pointer";
      summary.style.fontSize = "1.3rem";
      summary.style.fontWeight = "600";
      summary.style.color = "var(--accent-color)";
      summary.style.listStyle = "none";
      summary.innerHTML = `<i class="fas fa-chevron-right" style="font-size:0.8rem; margin-right:0.5rem; transition:transform 0.2s;"></i> ${s.h}`;

      details.appendChild(summary);

      const contentDiv = document.createElement("div");
      contentDiv.style.marginTop = "1rem";
      contentDiv.style.paddingLeft = "1.5rem";

      if (s.p) {
        const p = document.createElement("p");
        p.textContent = s.p;
        contentDiv.appendChild(p);
      } else if (s.m) {
        const div = document.createElement("div");
        div.innerHTML = marked.parse(s.m);
        contentDiv.appendChild(div);
      }
      details.appendChild(contentDiv);
      responseContent.appendChild(details);

      details.addEventListener("toggle", () => {
        const icon = summary.querySelector("i");
        icon.style.transform = details.open ? "rotate(90deg)" : "rotate(0deg)";
      });
    });

    hljs.highlightAll();
    addCopyButtons();
    window.scrollTo(0, 0);
  }, 1000);
}

function renderRejection(query) {
  loadingOverlay.classList.remove("hidden");
  setTimeout(() => {
    loadingOverlay.classList.add("hidden");
    landingPage.classList.add("hidden");
    responsePage.classList.remove("hidden");

    let message = "I am CodeGPT. I only assist with coding in Python, Java, C, and C++.";

    const otherLanguages = ["javascript", "js", "typescript", "ts", "php", "ruby", "swift", "kotlin", "rust", "go", "html", "css", "sql"];
    if (otherLanguages.some(lang => query.toLowerCase().includes(lang))) {
      message = `I currently only support Python, Java, C, and C++. I cannot assist with ${query.split(' ')[0]}.`;
    }

    responseContent.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.textContent = "CodeGPT";
    const p = document.createElement("p");
    p.className = "rejection-msg";
    p.style.fontSize = "1.5rem";
    p.style.marginTop = "2rem";
    p.textContent = message;

    responseContent.appendChild(h1);
    responseContent.appendChild(p);
  }, 800);
}

function renderGenericCodingResponse(topic) {
  loadingOverlay.classList.remove("hidden");
  setTimeout(() => {
    loadingOverlay.classList.add("hidden");
    landingPage.classList.add("hidden");
    responsePage.classList.remove("hidden");

    responseContent.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.textContent = topic.toUpperCase();
    responseContent.appendChild(h1);

    const p1 = document.createElement("p");
    p1.textContent = `I can help you with ${topic}, but I don't have a specific pre-defined guide for it yet. Here is a general overview:`;
    responseContent.appendChild(p1);

    const p2 = document.createElement("p");
    p2.textContent = `${topic} is an essential topic in programming. Mastering it will improve your problem-solving skills.`;
    responseContent.appendChild(p2);

    const h3 = document.createElement("h3");
    h3.textContent = "Example";
    responseContent.appendChild(h3);

    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.className = "language-python";
    code.textContent = `# Example related to ${topic}
def example_function():
    # Implementation for ${topic}
    pass`;
    pre.appendChild(code);
    responseContent.appendChild(pre);

    const h3_2 = document.createElement("h3");
    h3_2.textContent = "Best Practice";
    responseContent.appendChild(h3_2);

    const p3 = document.createElement("p");
    p3.textContent = `Always keep your code modular and well-documented when working with ${topic}.`;
    responseContent.appendChild(p3);

    hljs.highlightAll();
    addCopyButtons();
  }, 1000);
}

// Levenshtein Distance for Fuzzy Search
function levenshtein(a, b) {
  const tmp = [];
  for (let i = 0; i <= a.length; i++) tmp[i] = [i];
  for (let j = 0; j <= b.length; j++) tmp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      tmp[i][j] = Math.min(
        tmp[i - 1][j] + 1,
        tmp[i][j - 1] + 1,
        tmp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return tmp[a.length][b.length];
}

// Autocomplete Logic with Fuzzy Matching
learnInput.addEventListener("input", () => {
  let val = learnInput.value;
  autocompleteBox.innerHTML = "";

  if (!val.startsWith("/")) {
    autocompleteBox.classList.add("hidden");
    return;
  }

  const query = val.substring(1).toLowerCase();
  if (!query) {
    autocompleteBox.classList.add("hidden");
    return;
  }

  let matches = allTopicKeys.filter(t => t.startsWith(query));

  if (matches.length < 5) {
    const fuzzyMatches = allTopicKeys
      .filter(t => !t.startsWith(query))
      .filter(t => levenshtein(query, t) <= 2)
      .sort((a, b) => levenshtein(query, a) - levenshtein(query, b));

    matches = [...matches, ...fuzzyMatches].slice(0, 5);
  } else {
    matches = matches.slice(0, 5);
  }

  if (matches.length > 0) {
    autocompleteBox.classList.remove("hidden");
    matches.forEach(m => {
      const div = document.createElement("div");
      div.className = "suggestion-item";
      div.textContent = `/${m}`;
      div.onclick = () => {
        learnInput.value = `/${m}`;
        autocompleteBox.classList.add("hidden");
        handleLearnSearch();
      };
      autocompleteBox.appendChild(div);
    });
  } else {
    autocompleteBox.classList.add("hidden");
  }
});

// Fix My Code Logic
fixSubmit.addEventListener("click", () => {
  const code = fixCodeInput.value.trim();
  const lang = fixLanguage.value;

  if (!code) {
    showToast("Please paste some code first!", "error");
    return;
  }

  loadingOverlay.classList.remove("hidden");
  setTimeout(() => {
    loadingOverlay.classList.add("hidden");
    landingPage.classList.add("hidden");
    responsePage.classList.remove("hidden");

    const analysis = analyzeCode(code, lang);
    renderFix(analysis);
    addToHistory(`Fix: ${lang} code`);
  }, 1500);
});

function analyzeCode(code, lang) {
  let errors = [];
  let correctedCode = code;

  if (lang === "python") {
    if (!code.includes(":") && (code.includes("if") || code.includes("def") || code.includes("for") || code.includes("while"))) {
      errors.push({
        line: "N/A",
        msg: "Possible missing colon (:) at the end of a header.",
        why: "Python requires colons to start an indented block."
      });
    }
    if (code.includes("print") && !code.includes("(") && !code.includes(")")) {
      errors.push({
        line: "N/A",
        msg: "Missing parentheses in 'print' call.",
        why: "In Python 3, print is a function and requires parentheses."
      });
      correctedCode = correctedCode.replace(/print\s+(.*)/g, "print($1)");
    }
  } else if (lang === "java" || lang === "c" || lang === "cpp") {
    if (!code.includes(";") && code.length > 5 && !code.trim().endsWith("}")) {
      errors.push({
        line: "Syntax",
        msg: "Missing semicolon (;)",
        why: `${lang.toUpperCase()} statements must end with a semicolon.`
      });
      correctedCode = code.split('\n').map(line =>
        (line.trim() && !line.trim().endsWith(";") && !line.trim().endsWith("{") && !line.trim().endsWith("}")) ? line + ";" : line
      ).join('\n');
    }
  }

  if (errors.length === 0) {
    errors.push({
      line: "Logic",
      msg: "No critical syntax errors detected.",
      why: "The code appears valid, but ensure your logic is correct."
    });
  }

  return {
    original: code,
    corrected: correctedCode,
    errors: errors,
    lang: lang
  };
}

function renderFix(analysis) {
  responseContent.innerHTML = "";

  const h1 = document.createElement("h1");
  h1.textContent = "Code Fix Report";
  responseContent.appendChild(h1);

  const sec1 = document.createElement("section");
  const h3_1 = document.createElement("h3");
  h3_1.textContent = "Detected Errors";
  sec1.appendChild(h3_1);

  analysis.errors.forEach(e => {
    const div = document.createElement("div");
    div.className = "error-item glass";
    div.style.padding = "1rem";
    div.style.marginBottom = "1rem";
    div.style.borderRadius = "8px";

    const strong = document.createElement("strong");
    strong.textContent = `Error: ${e.msg}`;
    div.appendChild(strong);
    div.appendChild(document.createElement("br"));

    const small = document.createElement("small");
    small.textContent = `Why: ${e.why}`;
    div.appendChild(small);
    sec1.appendChild(div);
  });
  responseContent.appendChild(sec1);

  const sec2 = document.createElement("section");
  const h3_2 = document.createElement("h3");
  h3_2.textContent = "Correct Code";
  sec2.appendChild(h3_2);
  const pre = document.createElement("pre");
  const code = document.createElement("code");
  code.className = `language-${analysis.lang}`;
  code.textContent = analysis.corrected;
  pre.appendChild(code);
  sec2.appendChild(pre);
  responseContent.appendChild(sec2);

  const sec3 = document.createElement("section");
  const h3_3 = document.createElement("h3");
  h3_3.textContent = "Difference";
  sec3.appendChild(h3_3);
  const p3 = document.createElement("p");
  p3.textContent = "Corrected common syntax patterns and ensured basic structure compliance.";
  sec3.appendChild(p3);
  responseContent.appendChild(sec3);

  const sec4 = document.createElement("section");
  const h3_4 = document.createElement("h3");
  h3_4.textContent = "Optimization Tips";
  sec4.appendChild(h3_4);
  const ul = document.createElement("ul");
  ["Use modern language features.", "Ensure efficient memory allocation."].forEach(tip => {
    const li = document.createElement("li");
    li.textContent = tip;
    ul.appendChild(li);
  });
  sec4.appendChild(ul);
  responseContent.appendChild(sec4);

  hljs.highlightAll();
  addCopyButtons();
}

// Copy Buttons for Code Blocks
function addCopyButtons() {
  const codeBlocks = document.querySelectorAll("pre");
  codeBlocks.forEach(block => {
    const btn = document.createElement("button");
    btn.className = "copy-code-btn";
    btn.innerHTML = '<i class="far fa-copy"></i>';
    btn.onclick = () => {
      const code = block.querySelector("code").innerText;
      navigator.clipboard.writeText(code).then(() => {
        btn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => btn.innerHTML = '<i class="far fa-copy"></i>', 2000);
      });
    };
    block.appendChild(btn);
  });
}

// Keyboard Shortcuts
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "Enter") {
    if (document.activeElement === learnInput) handleLearnSearch();
    if (document.activeElement === fixCodeInput) fixSubmit.click();
  }
});

// Character Counter
const charCount = document.createElement("div");
charCount.style.fontSize = "0.8rem";
charCount.style.color = "var(--text-secondary)";
charCount.style.textAlign = "right";
fixCodeInput.parentNode.insertBefore(charCount, fixSubmit);
fixCodeInput.addEventListener("input", () => {
  charCount.textContent = `${fixCodeInput.value.length} characters`;
});

// Event Listeners
learnSubmit.addEventListener("click", handleLearnSearch);
learnInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleLearnSearch();
});

backBtn.addEventListener("click", () => {
  responsePage.classList.add("hidden");
  landingPage.classList.remove("hidden");
});

function addToHistory(item) {
  history.unshift({ text: item, date: new Date().toLocaleString() });
  if (history.length > 10) history.pop();
  localStorage.setItem("codeGPT_history", JSON.stringify(history));
}

// History Modal
const historyBtn = document.getElementById("historyBtn");
const historyModal = document.getElementById("historyModal");
const closeHistory = document.getElementById("closeHistory");
const historyList = document.getElementById("historyList");

historyBtn.addEventListener("click", () => {
  historyList.innerHTML = history.length ? "" : "<p>No recent activity.</p>";
  history.forEach((h, index) => {
    const div = document.createElement("div");
    div.className = "history-item suggestion-item";
    div.innerHTML = `<strong>${h.text}</strong> <br> <small>${h.date}</small>`;
    div.onclick = () => {
      if (h.text.startsWith("Learn: ")) {
        learnInput.value = h.text.replace("Learn: ", "");
        historyModal.classList.add("hidden");
        handleLearnSearch();
      }
    };
    historyList.appendChild(div);
  });
  historyModal.classList.remove("hidden");
});

closeHistory.addEventListener("click", () => historyModal.classList.add("hidden"));

// Global Actions
document.getElementById("copyAllBtn").addEventListener("click", () => {
  const text = responseContent.innerText;
  navigator.clipboard.writeText(text).then(() => showToast("Copied to clipboard!", "success"));
});

document.getElementById("downloadBtn").addEventListener("click", () => {
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>CodeGPT Response</title>
        <style>
          body { font-family: sans-serif; padding: 2rem; color: #1e293b; }
          pre { background: #f1f5f9; padding: 1rem; border-radius: 8px; }
          code { font-family: monospace; }
          h1, h2, h3 { color: #0284c7; }
        </style>
      </head>
      <body>
        ${responseContent.innerHTML}
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
});
