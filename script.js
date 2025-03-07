document.getElementById('reveal-btn').addEventListener('click', function() {
    var hiddenMessage = document.getElementById('hidden-message');
    hiddenMessage.style.display = 'block';
    document.getElementById('reveal-btn').style.display = 'none';  // Hide the button after click
});
