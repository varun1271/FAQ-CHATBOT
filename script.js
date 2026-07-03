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
  }
};

const allTopicKeys = [
  "python", "java", "c", "cpp", "javascript", "typescript", "go", "rust", "php", "ruby", "swift", "kotlin", "html", "css", "sql", "react", "node.js", "express", "mongodb", "postgresql", "git", "github", "docker", "linux", "api", "json", "dsa", "algorithms", "data structures", "machine learning", "ai", "flask", "django", "fastapi", "spring boot", "angular", "vue", "bootstrap", "tailwind css", "firebase", "supabase", "rest api", "graphql", "loops", "arrays", "functions", "oops"
];

const supportedFixLanguages = [
  "Python", "Java", "C", "C++", "JavaScript", "TypeScript", "Go", "Rust", "PHP", "Ruby", "Swift", "Kotlin", "SQL", "HTML", "CSS"
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
  return nonCodingKeywords.some(k => query.toLowerCase().includes(k));
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
      { h: "Definition", p: data.definition },
      { h: "Why it is used", p: data.why },
      { h: "Syntax", m: data.syntax },
      { h: "Simple Explanation", p: data.explanation },
      { h: "Flow Diagram (ASCII)", m: data.flow },
      { h: "Real-life Example", p: data.realLife },
      { h: "Multiple Examples", m: data.examples },
      { h: "Common Mistakes", p: data.mistakes },
      { h: "Interview Questions", p: data.interview },
      { h: "Best Practices", p: data.bestPractices },
      { h: "Summary", p: data.summary }
    ];

    sections.forEach(s => {
      const sec = document.createElement("section");
      const h3 = document.createElement("h3");
      h3.textContent = s.h;
      sec.appendChild(h3);

      if (s.p) {
        const p = document.createElement("p");
        p.textContent = s.p;
        sec.appendChild(p);
      } else if (s.m) {
        const div = document.createElement("div");
        div.innerHTML = marked.parse(s.m);
        sec.appendChild(div);
      }
      responseContent.appendChild(sec);
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

    let message = "I am CodeGPT. I only answer programming-related questions.";
    if (query.toLowerCase().includes("joke")) message = "I only assist with coding.";

    responseContent.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.textContent = "CodeGPT";
    const p = document.createElement("p");
    p.className = "rejection-msg";
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
    code.className = "language-javascript";
    code.textContent = `// Code example for ${topic} would go here.`;
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

// Fuzzy Search Logic
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
    const fuzzy = allTopicKeys.filter(t => !t.startsWith(query) && levenshtein(query, t) <= 2)
      .sort((a, b) => levenshtein(query, a) - levenshtein(query, b));
    matches = [...matches, ...fuzzy].slice(0, 5);
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
      errors.push({ line: "N/A", msg: "Missing colon (:) at header.", why: "Python requires colons to start blocks." });
      correctedCode = code.replace(/(if .*|def .*|for .*|while .*)/g, "$1:");
    }
    if (code.includes("print") && !code.includes("(") && !code.includes(")")) {
      errors.push({ line: "N/A", msg: "Missing parentheses in print.", why: "In Python 3, print is a function." });
      correctedCode = correctedCode.replace(/print (.*)/g, "print($1)");
    }
  } else if (lang === "javascript") {
    if ((code.includes("if") || code.includes("for") || code.includes("while")) && !code.includes("{") && !code.includes("}")) {
      errors.push({ line: "Logic", msg: "Block without curly braces.", why: "While optional for single lines, braces are recommended for clarity." });
    }
  }

  if (errors.length === 0) {
    errors.push({ line: "Logic", msg: "No critical syntax errors detected.", why: "Ensure your logic matches your requirements." });
  }

  return { original: code, corrected: correctedCode, errors: errors, lang: lang };
}

function renderFix(analysis) {
  responseContent.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.textContent = "Code Fix Report";
  responseContent.appendChild(h1);

  const sec1 = document.createElement("section");
  const h3_1 = document.createElement("h3"); h3_1.textContent = "Detected Errors"; sec1.appendChild(h3_1);
  analysis.errors.forEach(e => {
    const div = document.createElement("div"); div.className = "error-item glass"; div.style.padding = "1rem"; div.style.marginBottom = "1rem"; div.style.borderRadius = "8px";
    const strong = document.createElement("strong"); strong.textContent = `Error: ${e.msg}`; div.appendChild(strong); div.appendChild(document.createElement("br"));
    const small = document.createElement("small"); small.textContent = `Why: ${e.why}`; div.appendChild(small); sec1.appendChild(div);
  });
  responseContent.appendChild(sec1);

  const sec2 = document.createElement("section");
  const h3_2 = document.createElement("h3"); h3_2.textContent = "Correct Code"; sec2.appendChild(h3_2);
  const pre = document.createElement("pre"); const code = document.createElement("code"); code.className = `language-${analysis.lang}`; code.textContent = analysis.corrected; pre.appendChild(code); sec2.appendChild(pre);
  responseContent.appendChild(sec2);

  const sec3 = document.createElement("section");
  const h3_3 = document.createElement("h3"); h3_3.textContent = "Difference"; sec3.appendChild(h3_3);
  const p3 = document.createElement("p"); p3.textContent = "Corrected common syntax patterns and ensured basic structure compliance."; sec3.appendChild(p3);
  responseContent.appendChild(sec3);

  const sec4 = document.createElement("section");
  const h3_4 = document.createElement("h3"); h3_4.textContent = "Optimization Tips"; sec4.appendChild(h3_4);
  const ul = document.createElement("ul");
  ["Use modern language features.", "Ensure efficient memory allocation."].forEach(tip => {
    const li = document.createElement("li"); li.textContent = tip; ul.appendChild(li);
  });
  sec4.appendChild(ul);
  responseContent.appendChild(sec4);

  hljs.highlightAll();
  addCopyButtons();
}

// UI Extras
function addCopyButtons() {
  document.querySelectorAll("pre").forEach(block => {
    const btn = document.createElement("button"); btn.className = "copy-code-btn"; btn.innerHTML = '<i class="far fa-copy"></i>';
    btn.onclick = () => {
      navigator.clipboard.writeText(block.querySelector("code").innerText).then(() => {
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
charCount.style.fontSize = "0.8rem"; charCount.style.color = "var(--text-secondary)"; charCount.style.textAlign = "right";
fixCodeInput.parentNode.insertBefore(charCount, fixSubmit);
fixCodeInput.addEventListener("input", () => {
  charCount.textContent = `${fixCodeInput.value.length} characters`;
});

// Global Event Listeners
learnSubmit.addEventListener("click", handleLearnSearch);
learnInput.addEventListener("keypress", (e) => { if (e.key === "Enter") handleLearnSearch(); });
backBtn.addEventListener("click", () => { responsePage.classList.add("hidden"); landingPage.classList.remove("hidden"); });

function addToHistory(item) {
  history.unshift({ text: item, date: new Date().toLocaleString() });
  if (history.length > 10) history.pop();
  localStorage.setItem("codeGPT_history", JSON.stringify(history));
}

// History
const historyBtn = document.getElementById("historyBtn");
const historyModal = document.getElementById("historyModal");
const closeHistory = document.getElementById("closeHistory");
const historyList = document.getElementById("historyList");

historyBtn.addEventListener("click", () => {
  historyList.innerHTML = history.length ? "" : "<p>No recent activity.</p>";
  history.forEach(h => {
    const div = document.createElement("div"); div.className = "history-item suggestion-item";
    div.innerHTML = `<strong>${h.text}</strong> <br> <small>${h.date}</small>`;
    div.onclick = () => { if (h.text.startsWith("Learn: ")) { learnInput.value = h.text.replace("Learn: ", ""); historyModal.classList.add("hidden"); handleLearnSearch(); } };
    historyList.appendChild(div);
  });
  historyModal.classList.remove("hidden");
});
closeHistory.addEventListener("click", () => historyModal.classList.add("hidden"));

document.getElementById("copyAllBtn").addEventListener("click", () => {
  navigator.clipboard.writeText(responseContent.innerText).then(() => showToast("Copied to clipboard!", "success"));
});

document.getElementById("downloadBtn").addEventListener("click", () => {
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`<html><head><title>CodeGPT</title><style>body{font-family:sans-serif;padding:2rem;}pre{background:#f1f5f9;padding:1rem;border-radius:8px;}h1,h2,h3{color:#0284c7;}</style></head><body>${responseContent.innerHTML}</body></html>`);
  printWindow.document.close();
  printWindow.print();
});
