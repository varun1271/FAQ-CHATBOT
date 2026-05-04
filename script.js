const greetings = [
  "hello",
  "hi",
  "hey",
  "good morning",
  "good afternoon",
  "good evening"
];

const topicFaqs = [
  {
    topic: "Artificial Intelligence",
    items: [
      { question: "what is ai", answer: "AI stands for Artificial Intelligence. It enables machines to simulate human intelligence and make decisions." },
      { question: "define artificial intelligence", answer: "Artificial Intelligence is the field of building systems that can learn, reason, and solve problems." },
      { question: "who is father of ai", answer: "John McCarthy is widely known as the father of Artificial Intelligence." },
      { question: "who introduced ai", answer: "The term Artificial Intelligence was introduced by John McCarthy in 1956." },
      { question: "why is ai important", answer: "AI is important because it helps automate tasks, improve decisions, and analyze large amounts of data quickly." },
      { question: "uses of ai", answer: "AI is used in healthcare, education, banking, chatbots, robotics, recommendation systems, and automation." },
      { question: "advantages of ai", answer: "AI offers speed, automation, pattern recognition, reduced manual effort, and better scalability." },
      { question: "disadvantages of ai", answer: "AI can be expensive, data-dependent, difficult to explain, and may introduce bias if not designed carefully." },
      { question: "types of ai", answer: "Common AI categories include narrow AI, general AI, and superintelligent AI in theoretical discussions." },
      { question: "example of ai", answer: "Examples of AI include voice assistants, smart recommendation engines, fraud detection systems, and chatbots." }
    ]
  },
  {
    topic: "Machine Learning",
    items: [
      { question: "what is machine learning", answer: "Machine learning is a branch of AI where systems learn patterns from data and improve over time." },
      { question: "define machine learning", answer: "Machine learning is the process of training algorithms to make predictions or decisions from data." },
      { question: "types of machine learning", answer: "The main types of machine learning are supervised, unsupervised, and reinforcement learning." },
      { question: "what is supervised learning", answer: "Supervised learning uses labeled data so a model can learn the relationship between input and output." },
      { question: "what is unsupervised learning", answer: "Unsupervised learning finds hidden structures or patterns in unlabeled data." },
      { question: "what is reinforcement learning", answer: "Reinforcement learning trains an agent through rewards and penalties based on its actions." },
      { question: "applications of machine learning", answer: "Machine learning is used in recommendation systems, fraud detection, medical diagnosis, forecasting, and image recognition." },
      { question: "difference between ai and machine learning", answer: "AI is the broader concept of intelligent machines, while machine learning is one method used to build AI systems." },
      { question: "why machine learning is useful", answer: "Machine learning is useful because it can detect patterns, automate predictions, and adapt from new data." },
      { question: "examples of machine learning", answer: "Email spam filters, product recommendations, predictive maintenance, and demand forecasting are common machine learning examples." }
    ]
  },
  {
    topic: "Deep Learning",
    items: [
      { question: "what is deep learning", answer: "Deep learning is a machine learning technique based on neural networks with multiple layers." },
      { question: "define deep learning", answer: "Deep learning is a subset of machine learning that learns complex representations from large datasets." },
      { question: "what are neural networks", answer: "Neural networks are computing systems inspired by the human brain that process data through connected layers." },
      { question: "what is ann", answer: "ANN stands for Artificial Neural Network, a model made of connected nodes that learns patterns from data." },
      { question: "what is cnn", answer: "CNN stands for Convolutional Neural Network, a deep learning model commonly used for image processing tasks." },
      { question: "what is rnn", answer: "RNN stands for Recurrent Neural Network, a model designed to handle sequential data such as text or time series." },
      { question: "uses of deep learning", answer: "Deep learning is used in computer vision, speech recognition, language translation, and autonomous systems." },
      { question: "difference between machine learning and deep learning", answer: "Deep learning is a specialized part of machine learning that usually needs larger datasets and deeper neural models." },
      { question: "why deep learning needs more data", answer: "Deep learning models have many parameters, so they typically require more data to learn strong patterns reliably." },
      { question: "example of deep learning", answer: "Face recognition, speech-to-text systems, and advanced image classification are examples of deep learning." }
    ]
  },
  {
    topic: "Natural Language Processing",
    items: [
      { question: "what is nlp", answer: "NLP stands for Natural Language Processing. It helps computers understand and generate human language." },
      { question: "define natural language processing", answer: "Natural Language Processing is the area of AI focused on analyzing, interpreting, and producing human language." },
      { question: "applications of nlp", answer: "NLP is used in chatbots, translation, summarization, search, sentiment analysis, and speech assistants." },
      { question: "what is tokenization", answer: "Tokenization is the process of splitting text into smaller units such as words or phrases." },
      { question: "what is stemming", answer: "Stemming reduces words to their root form by trimming endings, such as changing running to run." },
      { question: "what is lemmatization", answer: "Lemmatization reduces words to their dictionary base form while preserving proper language meaning." },
      { question: "what is sentiment analysis", answer: "Sentiment analysis identifies whether a piece of text expresses positive, negative, or neutral emotion." },
      { question: "how nlp is used in chatbots", answer: "NLP helps chatbots understand user questions, identify intent, and generate or select relevant responses." },
      { question: "difference between nlp and nlu", answer: "NLP is the broader language-processing field, while NLU focuses more specifically on understanding meaning and intent." },
      { question: "example of nlp", answer: "Language translation apps, smart assistants, grammar correction tools, and FAQ bots are examples of NLP." }
    ]
  },
  {
    topic: "Cloud Computing",
    items: [
      { question: "what is cloud computing", answer: "Cloud computing delivers storage, servers, software, and computing resources over the internet." },
      { question: "define cloud computing", answer: "Cloud computing is the on-demand delivery of technology services through online platforms instead of local hardware." },
      { question: "benefits of cloud computing", answer: "Cloud computing offers scalability, lower setup cost, easier maintenance, and access from anywhere." },
      { question: "types of cloud services", answer: "Common cloud service models are IaaS, PaaS, and SaaS." },
      { question: "what is iaas", answer: "IaaS means Infrastructure as a Service, where servers, storage, and networking are provided online." },
      { question: "what is paas", answer: "PaaS means Platform as a Service, where developers get a platform to build and deploy applications." },
      { question: "what is saas", answer: "SaaS means Software as a Service, where users access software over the internet without local installation." },
      { question: "what is public cloud", answer: "A public cloud is a cloud environment where services are provided over the internet to multiple customers." },
      { question: "what is private cloud", answer: "A private cloud is a cloud environment dedicated to a single organization for greater control." },
      { question: "examples of cloud platforms", answer: "Amazon Web Services, Microsoft Azure, and Google Cloud Platform are common cloud platforms." }
    ]
  },
  {
    topic: "Data Science",
    items: [
      { question: "what is data science", answer: "Data science is the practice of analyzing data to uncover useful insights and support decisions." },
      { question: "define data science", answer: "Data science combines statistics, programming, and domain knowledge to extract value from data." },
      { question: "tools for data science", answer: "Popular data science tools include Python, R, SQL, Jupyter, Tableau, and Power BI." },
      { question: "why data science is important", answer: "Data science is important because it helps organizations make evidence-based decisions and discover trends." },
      { question: "what is data analysis", answer: "Data analysis is the process of cleaning, exploring, and interpreting data to answer questions." },
      { question: "what is data visualization", answer: "Data visualization presents data through charts, dashboards, and graphs to make insights easier to understand." },
      { question: "difference between data science and machine learning", answer: "Data science is broader and includes analysis, visualization, and business insight, while machine learning focuses on predictive models." },
      { question: "what is big data", answer: "Big data refers to very large and complex datasets that require advanced tools and methods to process." },
      { question: "what is data cleaning", answer: "Data cleaning means fixing missing, incorrect, duplicate, or inconsistent data before analysis." },
      { question: "example of data science", answer: "Customer churn prediction, sales forecasting, and recommendation engines are examples of data science in action." }
    ]
  },
  {
    topic: "Python",
    items: [
      { question: "what is python", answer: "Python is a popular programming language known for its simple syntax and wide use in AI and data science." },
      { question: "why python for ai", answer: "Python is popular for AI because it is readable and has strong libraries like TensorFlow, PyTorch, and scikit-learn." },
      { question: "is python easy to learn", answer: "Yes, Python is considered beginner-friendly because its syntax is clean and easy to understand." },
      { question: "python libraries for ai", answer: "Popular Python libraries for AI include TensorFlow, PyTorch, scikit-learn, Keras, and spaCy." },
      { question: "python libraries for data science", answer: "NumPy, pandas, Matplotlib, Seaborn, and scikit-learn are common Python libraries for data science." },
      { question: "what is pandas", answer: "Pandas is a Python library used for working with structured data, tables, and analysis tasks." },
      { question: "what is numpy", answer: "NumPy is a Python library used for numerical computing and efficient array operations." },
      { question: "what is matplotlib", answer: "Matplotlib is a Python plotting library used to create charts, graphs, and visual reports." },
      { question: "what is scikit learn", answer: "Scikit-learn is a Python machine learning library used for model building, evaluation, and preprocessing." },
      { question: "where python is used", answer: "Python is used in web development, automation, AI, data science, scripting, and software testing." }
    ]
  },
  {
    topic: "Chatbots",
    items: [
      { question: "what is chatbot", answer: "A chatbot is a software application that simulates conversation and responds to user queries automatically." },
      { question: "how chatbot works", answer: "Chatbots work by analyzing input, identifying intent or similarity, and selecting an appropriate response." },
      { question: "types of chatbots", answer: "Common chatbot types include rule-based bots, FAQ bots, AI chatbots, and hybrid chatbots." },
      { question: "what is faq chatbot", answer: "An FAQ chatbot answers user questions using a predefined knowledge base of common questions and answers." },
      { question: "benefits of chatbots", answer: "Chatbots provide instant replies, reduce manual support load, and improve availability for users." },
      { question: "chatbot uses", answer: "Chatbots are used in customer support, lead generation, education, internal help desks, and e-commerce." },
      { question: "what is conversational ai", answer: "Conversational AI refers to systems that use language technologies to hold more natural conversations with users." },
      { question: "difference between chatbot and virtual assistant", answer: "A chatbot is often task-focused, while a virtual assistant usually supports broader, more interactive workflows." },
      { question: "can chatbot use nlp", answer: "Yes, many chatbots use NLP to better understand user messages and improve response accuracy." },
      { question: "example of chatbot", answer: "Website support bots, banking assistants, and order-tracking assistants are common chatbot examples." }
    ]
  },
  {
    topic: "Internet of Things",
    items: [
      { question: "what is iot", answer: "IoT means Internet of Things, where physical devices connect to the internet and exchange data." },
      { question: "define internet of things", answer: "The Internet of Things is a network of connected smart devices that collect and share information." },
      { question: "examples of iot", answer: "Smart watches, smart home devices, sensors, connected vehicles, and industrial monitors are examples of IoT." },
      { question: "benefits of iot", answer: "IoT improves automation, monitoring, real-time insights, efficiency, and remote control of devices." },
      { question: "iot applications", answer: "IoT is used in smart homes, healthcare monitoring, agriculture, manufacturing, and logistics." },
      { question: "what is smart device", answer: "A smart device is an electronic device connected to a network that can collect data or be controlled remotely." },
      { question: "iot in healthcare", answer: "IoT in healthcare supports remote monitoring, connected medical devices, and real-time patient tracking." },
      { question: "iot in agriculture", answer: "IoT in agriculture helps monitor soil, weather, irrigation, and crop conditions using sensors." },
      { question: "security issues in iot", answer: "IoT security issues include weak authentication, outdated firmware, poor encryption, and device vulnerabilities." },
      { question: "difference between iot and ai", answer: "IoT focuses on connected devices and data collection, while AI focuses on learning, reasoning, and intelligent decisions." }
    ]
  },
  {
    topic: "General Tech Support",
    items: [
      { question: "what services do you offer", answer: "We provide AI solutions, NLP projects, chatbots, automation, analytics, and cloud-related support." },
      { question: "what is your pricing", answer: "Pricing depends on the service scope. Basic plans start from Rs.100." },
      { question: "how can i contact support", answer: "You can contact support at support@example.com for project or technical help." },
      { question: "do you offer chatbot projects", answer: "Yes, we build FAQ chatbots, AI chatbots, and domain-specific assistant solutions." },
      { question: "do you provide ai training", answer: "Yes, guidance and project support can be provided for AI, machine learning, and NLP topics." },
      { question: "can i customize the chatbot", answer: "Yes, the chatbot can be customized with your own topics, FAQs, branding, and response style." },
      { question: "is support available", answer: "Yes, support is available to help with setup, debugging, and project-related questions." },
      { question: "what technologies do you work with", answer: "We work with AI, ML, deep learning, NLP, cloud platforms, Python, and automation tools." },
      { question: "can this chatbot answer only faq", answer: "This chatbot is designed mainly for FAQ-style questions and similarity-based response matching." },
      { question: "does this chatbot use cosine similarity", answer: "Yes, this chatbot uses preprocessing, bag-of-words vectors, and cosine similarity to match questions." }
    ]
  }
];

const FAQs = topicFaqs.flatMap((topic) => topic.items);

const stopWords = new Set([
  "a", "an", "and", "are", "as", "at", "be", "by", "can", "do", "does", "for",
  "from", "good", "how", "i", "in", "is", "it", "me", "my", "of", "on", "or",
  "please", "the", "to", "what", "who", "why", "with", "you", "your"
]);

const fallbackResponse = "Sorry, I didn't understand that. Please ask me about AI, machine learning, deep learning, NLP, cloud computing, data science, Python, chatbots, IoT, or general tech support.";
const similarityThreshold = 0.24;

const colorThemes = [
  { orb1: "rgba(110, 69, 33, 0.8)", orb2: "rgba(239, 219, 183, 0.5)", base1: "#1a1008", base2: "#5b3720", base3: "#9c6b43" },
  { orb1: "rgba(18, 18, 18, 0.85)", orb2: "rgba(120, 120, 120, 0.35)", base1: "#000000", base2: "#1b1b1b", base3: "#353535" },
  { orb1: "rgba(255, 255, 255, 0.75)", orb2: "rgba(210, 210, 210, 0.45)", base1: "#505050", base2: "#9e9e9e", base3: "#ececec" },
  { orb1: "rgba(255, 105, 180, 0.8)", orb2: "rgba(255, 182, 193, 0.5)", base1: "#450a24", base2: "#a11d58", base3: "#ff8fb8" },
  { orb1: "rgba(59, 130, 246, 0.8)", orb2: "rgba(147, 197, 253, 0.45)", base1: "#081a35", base2: "#174ea6", base3: "#60a5fa" },
  { orb1: "rgba(128, 90, 213, 0.8)", orb2: "rgba(196, 181, 253, 0.45)", base1: "#1c1038", base2: "#5630a5", base3: "#9f7aea" },
  { orb1: "rgba(139, 92, 246, 0.82)", orb2: "rgba(221, 214, 254, 0.45)", base1: "#210f36", base2: "#6d28d9", base3: "#c4b5fd" },
  { orb1: "rgba(234, 179, 8, 0.82)", orb2: "rgba(253, 224, 71, 0.48)", base1: "#3a2904", base2: "#9a6b00", base3: "#f5d76e" },
  { orb1: "rgba(192, 192, 192, 0.85)", orb2: "rgba(245, 245, 245, 0.45)", base1: "#3d3d46", base2: "#858592", base3: "#dadbe3" },
  { orb1: "rgba(34, 197, 94, 0.82)", orb2: "rgba(134, 239, 172, 0.45)", base1: "#092512", base2: "#1f7a3a", base3: "#86efac" },
  { orb1: "rgba(56, 189, 248, 0.8)", orb2: "rgba(186, 230, 253, 0.45)", base1: "#082634", base2: "#0e7490", base3: "#7dd3fc" }
];

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const chatForm = document.getElementById("chatForm");
const rootStyles = document.documentElement;

let lastThemeStep = 0;

function preprocessText(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .filter((token) => !stopWords.has(token));
}

function buildVocabulary(tokenLists) {
  return [...new Set(tokenLists.flat())];
}

function vectorize(tokens, vocabulary) {
  return vocabulary.map((term) => tokens.filter((token) => token === term).length);
}

function cosineSimilarity(vectorA, vectorB) {
  let dotProduct = 0;
  let magnitudeA = 0;
  let magnitudeB = 0;

  for (let index = 0; index < vectorA.length; index += 1) {
    dotProduct += vectorA[index] * vectorB[index];
    magnitudeA += vectorA[index] * vectorA[index];
    magnitudeB += vectorB[index] * vectorB[index];
  }

  if (!magnitudeA || !magnitudeB) {
    return 0;
  }

  return dotProduct / (Math.sqrt(magnitudeA) * Math.sqrt(magnitudeB));
}

const faqDataset = FAQs.map((faq) => {
  const tokens = preprocessText(faq.question);

  return {
    ...faq,
    tokens
  };
});

const faqVocabulary = buildVocabulary(faqDataset.map((faq) => faq.tokens));

faqDataset.forEach((faq) => {
  faq.vector = vectorize(faq.tokens, faqVocabulary);
});

function detectGreeting(inputText) {
  const normalizedInput = inputText.toLowerCase().trim();

  return greetings.some((greeting) => normalizedInput === greeting || normalizedInput.startsWith(`${greeting} `));
}

function applyTheme(themeIndex) {
  const theme = colorThemes[themeIndex % colorThemes.length];

  rootStyles.style.setProperty("--bg-orb-1", theme.orb1);
  rootStyles.style.setProperty("--bg-orb-2", theme.orb2);
  rootStyles.style.setProperty("--bg-base-1", theme.base1);
  rootStyles.style.setProperty("--bg-base-2", theme.base2);
  rootStyles.style.setProperty("--bg-base-3", theme.base3);
}

function updateBackgroundFromInput(text) {
  const compactLength = text.replace(/\s/g, "").length;
  const nextThemeStep = compactLength < 2
    ? 0
    : (Math.floor(compactLength / 2) % colorThemes.length);

  if (nextThemeStep !== lastThemeStep) {
    lastThemeStep = nextThemeStep;
    applyTheme(nextThemeStep);
  }
}

function findBestFaqMatch(inputText) {
  if (detectGreeting(inputText)) {
    return {
      answer: "Hello sir, how can I help you today?",
      score: 1
    };
  }

  const inputTokens = preprocessText(inputText);

  if (!inputTokens.length) {
    return {
      answer: fallbackResponse,
      score: 0
    };
  }

  const inputVector = vectorize(inputTokens, faqVocabulary);
  let bestFaq = null;
  let bestScore = 0;

  faqDataset.forEach((faq) => {
    const score = cosineSimilarity(inputVector, faq.vector);

    if (score > bestScore) {
      bestScore = score;
      bestFaq = faq;
    }
  });

  if (!bestFaq || bestScore < similarityThreshold) {
    return {
      answer: fallbackResponse,
      score: bestScore
    };
  }

  return {
    answer: bestFaq.answer,
    score: bestScore
  };
}

function scrollChatToBottom() {
  chatBox.scrollTop = chatBox.scrollHeight;
}

function createMessageRow(text, sender) {
  const row = document.createElement("article");
  row.className = `message-row ${sender}-row`;

  if (sender === "bot") {
    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = "AI";
    row.appendChild(avatar);
  }

  const message = document.createElement("div");
  message.className = `message ${sender}`;
  message.textContent = text;
  row.appendChild(message);

  if (sender === "user") {
    const avatar = document.createElement("div");
    avatar.className = "avatar user-avatar";
    avatar.textContent = "You";
    row.appendChild(avatar);
  }

  chatBox.appendChild(row);
  scrollChatToBottom();
}

function showTypingIndicator() {
  const row = document.createElement("article");
  row.className = "message-row bot-row typing";
  row.id = "typingIndicator";

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = "AI";

  const message = document.createElement("div");
  message.className = "message bot";
  message.innerHTML = 'AI is typing <span class="typing-dots"><span></span><span></span><span></span></span>';

  row.appendChild(avatar);
  row.appendChild(message);
  chatBox.appendChild(row);
  scrollChatToBottom();
}

function removeTypingIndicator() {
  const indicator = document.getElementById("typingIndicator");

  if (indicator) {
    indicator.remove();
  }
}

function sendMessage() {
  const text = userInput.value.trim();

  if (!text) {
    return;
  }

  createMessageRow(text, "user");
  userInput.value = "";
  updateBackgroundFromInput("");
  userInput.focus();

  showTypingIndicator();

  window.setTimeout(() => {
    removeTypingIndicator();
    const result = findBestFaqMatch(text);
    createMessageRow(result.answer, "bot");
  }, 850);
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessage();
});

userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});

userInput.addEventListener("input", (event) => {
  updateBackgroundFromInput(event.target.value);
});
