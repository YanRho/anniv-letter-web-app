# 💌 Anniv Letter Web App  

A web-based app to deliver a romantic anniversary letter with animations and a personalized countdown.  

---

## ✨ Features  
- Animated envelope opening.  
- Floating hearts and countdown timer.  
- Easy text customization via `info.txt`.  

---

## 🚀 How to Run  

### **Option 1: Python HTTP Server**  
1. Open a terminal in the project folder.  
2. Run:  
   ```bash
   python -m http.server 800
   ```
3. Open: http://localhost:8000/

### **Option 2: VS Code Live Server**
1. Install **Live Server** Exntesion
2. Right-click index.html -> "Open with Live Server" or Click "Go Live" on the bottom right of VS Code Window. 


## ✏️ Customization
Edit info.txt to personalize the letter:
```json
{
  "name": "Partner's Name",
  "anniversaryDate": "2023-01-09T00:00:00",
  "message": "I cherish every moment with you!",
  "personalMessage": "Custom heartfelt message",
  "signature": "Your Name"
}
```

## ⚠️ Note
Opening index.html directly may not work due to browser restrictions. Use a local server.

## 🤝 Contribute
Fork, improve, and submit pull requests!