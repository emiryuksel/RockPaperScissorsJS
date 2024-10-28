# Rock Paper Scissors Game with Red Flash and Confetti Effects 🎉

This project is a simple **Rock Paper Scissors** game that includes interactive features, such as flashing red effects to indicate losing rounds and confetti animations to celebrate victories. Built with HTML, CSS, and JavaScript, it delivers a fun, engaging experience with visual feedback for each game outcome.

## Features

- **Dynamic Game Logic**: Engage in the classic Rock Paper Scissors game against a computer opponent.
- **Red Flash Effect**: A red flashing effect visually cues the player whenever they lose a round.
- **Confetti Celebration**: Win a round, and you'll be treated to a festive confetti animation that brings color and life to the game.
- **User-Friendly UI**: Clean, responsive design with Font Awesome icons for intuitive gameplay.

## Implementation Details

### 1. Red Flash Effect
The red flash effect adds an animated visual response when the player loses a round. This is implemented using CSS animations:

- Defined in `style.css`, the `flash-red` animation changes the background color briefly to a translucent red.
- The class `.flash-red` is applied to the player score area dynamically upon losing, triggering a `@keyframes flash-red` sequence.
- The result? A subtle yet impactful flash to enhance the sense of defeat without detracting from gameplay flow.

### 2. Confetti Celebration
Winning a round triggers a confetti explosion for added excitement, created in `confetti.js`.

- The confetti animation uses JavaScript to create colorful particles that cascade down the screen.
- Activated conditionally when a player wins, the confetti effect adds to the immersive celebration of each victory.
- Lightweight and efficient, it only runs as needed, keeping performance smooth.

## Technologies Used

- **HTML5**: Provides the structure for the game interface.
- **CSS3**: Styles the UI elements and implements animations, including the `flash-red` effect.
- **JavaScript**: Handles game logic, scoring, and triggers animations like confetti.
- **Font Awesome**: Supplies icons for intuitive and recognizable player choices (rock, paper, scissors).
- **Confetti.js**: A custom script that generates confetti particles for celebration effects, enhancing user engagement.
