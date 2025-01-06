const languages = [
    'Hello', 'Bonjour', 'Hola', 'Ciao', 'Konnichiwa', 'Namaste', 'Salam', 'Merhaba',
    'Ni hao', 'Annyeong', 'Guten Tag', 'Olá', 'Zdravstvuyte', 'Sawubona', 'Jambo'
  ];
  
  const symbols = ['🌍', '🗣️', '💬', '🔤', '📚', '🖊️', '✍️', '📝', '🔠', '🔡'];
  
  function createLanguageBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'language-bubble';
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.top = `${Math.random() * 100}vh`;
    bubble.style.width = `${Math.random() * 60 + 40}px`;
    bubble.style.height = bubble.style.width;
    bubble.textContent = languages[Math.floor(Math.random() * languages.length)];
    bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;
    document.getElementById('language-animation-container').appendChild(bubble);
  
    setTimeout(() => {
      bubble.remove();
    }, 25000);
  }
  
  function createLanguageSymbol() {
    const symbol = document.createElement('div');
    symbol.className = 'language-symbol';
    symbol.style.left = `${Math.random() * 100}vw`;
    symbol.style.top = `${Math.random() * 100}vh`;
    symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    symbol.style.animationDuration = `${Math.random() * 8 + 7}s`;
    document.getElementById('language-animation-container').appendChild(symbol);
  
    setTimeout(() => {
      symbol.remove();
    }, 15000);
  }
  
  function startAnimations() {
    setInterval(createLanguageBubble, 2000);
    setInterval(createLanguageSymbol, 3000);
  }
  
  window.addEventListener('load', startAnimations);
  
  