$(document).ready(function() {
    let currentWord = '';
    let currentTranslation = '';
    let score = 0;
    let gameActive = false;
    
    // Get dictionary data from hidden input
    const dictData = $('#dict').val();
    let dictionary = {};
    
    try {
        dictionary = JSON.parse(dictData);
    } catch(e) {
        console.error('Dictionary parsing failed:', e);
        dictionary = {"hello": "こんにちは", "world": "世界", "test": "テスト"};
    }
    
    const words = Object.keys(dictionary);
    
    function getRandomWord() {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }
    
    function startGame() {
        gameActive = true;
        score = 0;
        updateScore();
        nextWord();
        $('#start').text('ゲーム中...');
    }
    
    function nextWord() {
        currentWord = getRandomWord();
        currentTranslation = dictionary[currentWord];
        $('#sens_output').html(`<div style="font-size: 24px; margin: 20px 0;">${currentWord}</div><div style="font-size: 16px; color: #666;">${currentTranslation}</div>`);
        $('#number').focus();
    }
    
    function updateScore() {
        $('#img').text(`スコア: ${score}`);
    }
    
    function checkAnswer() {
        const userInput = $('#number').val().trim().toLowerCase();
        if (userInput === currentWord.toLowerCase()) {
            score += 10;
            updateScore();
            $('#number').val('');
            nextWord();
        }
    }
    
    // Event handlers
    $('#start').on('click', function() {
        if (!gameActive) {
            startGame();
        }
    });
    
    $('#number').on('keypress', function(e) {
        if (e.which === 13 && gameActive) { // Enter key
            checkAnswer();
        }
    });
    
    $('#number').on('input', function() {
        if (gameActive) {
            checkAnswer();
        }
    });
    
    // Initialize
    $('#start').text('ゲーム開始');
    $('#sens_output').html('<div style="padding: 20px; text-align: center;">ゲーム開始ボタンを押してください</div>');
    $('#img').text('スコア: 0');
});
