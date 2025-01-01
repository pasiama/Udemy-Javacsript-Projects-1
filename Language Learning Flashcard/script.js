// Flashcards data
const flashcards = [
      { front: "Apple", back: "Manzana", learned: false },
      { front: "House", back: "Casa", learned: false },
      { front: "Dog", back: "Perro", learned: false },
      { front: "Book", back: "Libro", learned: false },
      { front: "Sun", back: "Sol", learned: false },
    ];
    
    const flashcardGrid = document.getElementById('flashcardGrid');
    const progress = document.getElementById('progress');
    const nextButton = document.getElementById('nextButton');
    
    let currentIndex = 0;
    let learnedCount = 0;
    
    // Render flashcards
    const renderFlashcards = () => {
      flashcardGrid.innerHTML = '';
      const card = flashcards[currentIndex];
    
      const flashcardDiv = document.createElement('div');
      flashcardDiv.classList.add('flashcard');
    
      flashcardDiv.innerHTML = `
        <div class="flashcard-inner">
          <div class="flashcard-front">${card.front}</div>
          <div class="flashcard-back">${card.back}</div>
        </div>
      `;
    
      flashcardGrid.appendChild(flashcardDiv);
    
      // Add flip event
      flashcardDiv.addEventListener('click', () => {
        flashcardDiv.classList.toggle('flipped');
        if (!card.learned) {
          card.learned = true;
          learnedCount++;
          updateProgress();
        }
      });
    };
    
    // Update progress tracker
    const updateProgress = () => {
      progress.textContent = `Words Learned: ${learnedCount}`;
    };
    
    // Show next card
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % flashcards.length;
      renderFlashcards();
    });
    
    // Initial render
    renderFlashcards();
    updateProgress();
    