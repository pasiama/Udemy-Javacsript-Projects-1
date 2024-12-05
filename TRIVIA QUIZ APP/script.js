const levels = [
      {
        name: "Level 1",
        questions: [
          { question: "What is the capital of France?", options: ["Berlin", "Paris", "Rome", "Lisbon"], answer: "Paris" },
          { question: "Which planet is the Red Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], answer: "Mars" },
        ],
        summary: { total: 0, correct: 0, incorrect: 0 }, // Summary for Level 1
      },
      {
        name: "Level 2",
        questions: [
          { question: "Who wrote 'Romeo and Juliet'?", options: ["Dickens", "Shakespeare", "Austen", "Twain"], answer: "Shakespeare" },
          { question: "What is the largest ocean?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], answer: "Pacific" },
        ],
        summary: { total: 0, correct: 0, incorrect: 0 }, // Summary for Level 2
      },
    ];
    
    let currentLevelIndex = null;
    let currentQuestionIndex = 0;
    
    const levelButtons = document.querySelectorAll(".level-button");
    const questionContainer = document.getElementById("question-container");
    const summaryContainer = document.getElementById("summary-container");
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next-button");
    const progressBar = document.getElementById("progress-bar");
    const totalScoreElement = document.getElementById("total-score");
    const correctAnswersElement = document.getElementById("correct-answers");
    const incorrectAnswersElement = document.getElementById("incorrect-answers");
    const restartButton = document.getElementById("restart-button");
    
    levelButtons.forEach((button) => {
      button.addEventListener("click", () => {
        currentLevelIndex = parseInt(button.dataset.level);
        resetQuiz(); // Reset quiz state before starting a new level
        startQuiz();
      });
    });
    
    const resetQuiz = () => {
      currentQuestionIndex = 0;
      const level = levels[currentLevelIndex];
      level.summary = { total: 0, correct: 0, incorrect: 0 }; // Reset level-specific summary
      progressBar.style.width = "0%";
      summaryContainer.classList.add("hidden");
      questionContainer.classList.remove("hidden");
    };
    
    const startQuiz = () => {
      loadQuestion();
    };
    
    const loadQuestion = () => {
      const level = levels[currentLevelIndex];
      const question = level.questions[currentQuestionIndex];
      questionElement.textContent = question.question;
      optionsElement.innerHTML = "";
    
      question.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-button");
        button.addEventListener("click", () => selectAnswer(button, option, question.answer));
        optionsElement.appendChild(button);
      });
    
      nextButton.classList.add("hidden");
      updateProgress();
    };
    
    const selectAnswer = (button, selectedOption, correctOption) => {
      const buttons = optionsElement.querySelectorAll(".option-button");
      buttons.forEach((btn) => (btn.disabled = true));
    
      if (selectedOption === correctOption) {
        button.style.backgroundColor = "green";
        levels[currentLevelIndex].summary.correct++;
      } else {
        button.style.backgroundColor = "red";
        buttons.forEach((btn) => {
          if (btn.textContent === correctOption) {
            btn.style.backgroundColor = "green";
          }
        });
        levels[currentLevelIndex].summary.incorrect++;
      }
    
      nextButton.classList.remove("hidden");
    };
    
    nextButton.addEventListener("click", () => {
      currentQuestionIndex++;
      const level = levels[currentLevelIndex];
    
      if (currentQuestionIndex < level.questions.length) {
        loadQuestion();
      } else {
        showSummary();
      }
    });
    
    const updateProgress = () => {
      const level = levels[currentLevelIndex];
      const progress = ((currentQuestionIndex + 1) / level.questions.length) * 100;
      progressBar.style.width = `${progress}%`;
    };
    
    const showSummary = () => {
      questionContainer.classList.add("hidden");
      summaryContainer.classList.remove("hidden");
      const level = levels[currentLevelIndex];
      const totalQuestions = level.questions.length;
    
      totalScoreElement.textContent = `Total Questions: ${totalQuestions}`;
      correctAnswersElement.textContent = `Correct Answers: ${level.summary.correct}`;
      incorrectAnswersElement.textContent = `Incorrect Answers: ${level.summary.incorrect}`;
    
      level.summary.total = totalQuestions; // Update summary for the level
    };
    
    restartButton.addEventListener("click", () => {
      resetQuiz();
      startQuiz();
    });
    