function checkQuiz() {
  const answers = {
    q1: "b",
    q2: "c",
    q3: "c",
    q4: "c",
    q5: "c"
  };
  let score = 0;
  const total = Object.keys(answers).length;

  const isComplete = Object.keys(answers).every(key =>
    document.querySelector(`input[name="${key}"]:checked`)
  );
  if (!isComplete) {
    alert("Please answer all questions before submitting.");
    return;
  }

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  const resultDiv = document.getElementById("quizResult");
  let resultText = "";

  if (score === total) {
    resultText = `<p class="text-green-700 font-semibold">✅ Perfect! You got all ${score}/${total} questions right. Great job!</p>`;
  } else {
    resultText = `
      <div class="space-y-2">
        <p class="text-green-700 font-semibold">👍 You got ${score}/${total} correct.</p>
        <a href="https://anthonyconstant.co.uk/blog/f/computer-systems-security-fundamentals?blogcategory=Cyber+Security"
           target="_blank"
           class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow transition duration-300">
           📖 Read the Blog Post
        </a>
      </div>
    `;
  }
  
  resultDiv.innerHTML = resultText;
  
  resultDiv.classList.add("show");
  resultDiv.scrollIntoView({ behavior: "smooth" });
}

function resetQuiz() {
  // Uncheck all selected answers
  document.querySelectorAll('input[type="radio"]').forEach(input => {
    input.checked = false;
  });

  // Clear the result box and hide it
  const resultDiv = document.getElementById("quizResult");
  resultDiv.innerHTML = "";
  resultDiv.classList.remove("show");

  // Scroll to top of quiz
  const quizSection = document.getElementById("quiz");
  quizSection.scrollIntoView({ behavior: "smooth" });
}

function showComingSoon() {
  const msg = document.getElementById("comingSoonMsg");
  msg.classList.remove("hidden");
  msg.classList.add("opacity-0");

  setTimeout(() => {
    msg.classList.add("opacity-100");
    msg.classList.remove("opacity-0");
  }, 50);

  // Auto-hide after 5 seconds (optional)
  setTimeout(() => {
    msg.classList.remove("opacity-100");
    msg.classList.add("opacity-0");
    setTimeout(() => msg.classList.add("hidden"), 500);
  }, 5000);
}
