document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('update-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Update Team Alpha
        var teamNameAlpha = document.getElementById('team-name-alpha').value;
        var scoreAlpha = document.getElementById('score-alpha').value;
        if (teamNameAlpha) {
            document.querySelector('#team-alpha .team-name').textContent = teamNameAlpha;
        }
        if (scoreAlpha) {
            document.getElementById('score-alpha').textContent = scoreAlpha;
        }

        // Update Team Beta
        var teamNameBeta = document.getElementById('team-name-beta').value;
        var scoreBeta = document.getElementById('score-beta').value;
        if (teamNameBeta) {
            document.querySelector('#team-beta .team-name').textContent = teamNameBeta;
        }
        if (scoreBeta) {
            document.getElementById('score-beta').textContent = scoreBeta;
        }
    });
});
