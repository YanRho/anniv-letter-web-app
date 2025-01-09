![alt text](images/7205b2ce7d169105ff176139ffe01e1f.gif)

# Anniv Letter Web App 💌❤️

This is a web-based application designed to deliver a romantic anniversary letter with animations and a personalized countdown. The app includes a clickable envelope that opens to reveal the letter and displays a running timer for the total time since the anniversary.

---

## Features

- Animated envelope opening interaction.
- Floating hearts animation for the countdown page.
- Dynamic countdown timer since the start of the anniversary.
- Fully customizable letter text and recipient name via `info.txt`.

---

## Setup Instructions

### Prerequisites

To run this app locally, you need:

- A web browser (Chrome, Edge, or Firefox).
- A local web server. Follow one of the methods below to set it up.

---

### Running the App Locally

#### **Option 1: Using Python HTTP Server**

1. Open a terminal or command prompt in your project folder (`anniv-letter-web-app`).
2. Run the following command:
   ```bash
   python -m http.server 8000
   ```
   - For Python 2:
     ```bash
     python -m SimpleHTTPServer 8000
     ```
3. Open your browser and go to:
   ```
   http://localhost:8000/
   ```

#### **Option 2: Using Node.js HTTP Server**

1. Install the `http-server` package globally:
   ```bash
   npm install -g http-server
   ```
2. Navigate to your project folder in the terminal or command prompt.
3. Start the server:
   ```bash
   http-server
   ```
4. Open the URL shown in the terminal (e.g., `http://127.0.0.1:8080`).

#### **Option 3: Using Visual Studio Code Live Server**

1. Install the **Live Server** extension from the VS Code marketplace.
2. Open your project in VS Code.
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. Your project will open in the browser (e.g., `http://127.0.0.1:5500`).

---

### Customizing the Letter Content

You can update the text in the letter by modifying the `info.txt` file located in the project folder.

#### Format of `info.txt`

```json
{
  "name": "Partner's Name",
  "anniversaryDate": "2023-01-09T00:00:00",
  "message": "Here's to every second spent with you. I cherish each moment and look forward to forever. I love you!",
  "personalMessage": "Custom Hearfelt Message Here",
  "signature": "Your Name"
}
```

- **`anniversaryDate`**: The starting date of the anniversary. This is calculated and displayed as a title
- **`name`**: The name of the recipient.
- **`personalMessage`**: The customized message for your partner.
- **`signature`**: How you'd like to sign off the letter.

---

### Known Issues

If you open the `index.html` file directly in your browser (via `file://`), the `letter.html` page will not display the content due to browser restrictions (CORS policy). Use a local server as described above.

---

### Contributions

Feel free to fork this repository and contribute improvements or new features. Pull requests are welcome!

## Sample

![alt text](/images/2025-01-0819-42-56-ezgif.com-crop.gif)
