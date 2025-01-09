# Anniv Letter Web App

A heartfelt and interactive web application to celebrate anniversaries with a beautifully animated envelope and a personalized countdown page.

## Features
- **Interactive Envelope Animation**: Click the envelope to reveal a surprise message and countdown.
- **Personalized Countdown Timer**: Displays the time elapsed since your special day.
- **Customizable Details**: Easily update recipient name, date, and messages through an external `info.txt` file.
- **Return Button**: Switch back to the envelope page anytime.
- **Romantic Aesthetic**: Designed with soft colors and animations to evoke love and warmth.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/anniv-letter-web-app.git 

2. **Navigate to the Project Directory**
    ``` bash 
    cd anniv-letter-web-app 

3. Create a **info.txt** File with the following details:
    ```json
    {
        "anniversaryDate": "2024-01-09T00:00:00", // Change this to your anniversary date
        "name": "Partner's Name",
        "message": "Here's to every second spent with you. I cherish each moment and look forward to forever. I love you!",
        "personalMessage": "Custom Message Here",
        "signature": "Your Name"
    }

4. **Run the App**

    Open the **index.html** file using a browser

## File Structure

        index.html: The main page with the envelope animation.
        letter.html: The countdown and message page.
        style.css: Styling for the app.
        script.js: JavaScript logic for animations and countdown functionality.
        info.txt: Contains your personalized details (ignored in Git by .gitignore).

        
## Deployment
        Push your project to a GitHub repository.
        Enable GitHub Pages in your repository settings.
        Access the deployed app via your GitHub Pages URL.