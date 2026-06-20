# Quick Calculator

A full-stack calculator application built with Spring Boot (backend) and vanilla JavaScript (frontend).

## 📁 Project Structure

```
quick-calculator/
│
├── backend/
│   ├── pom.xml                                          # Maven configuration
│   └── src/main/java/com/example/calculator/
│       ├── CalculatorApplication.java                  # Spring Boot main app + CORS config
│       └── controller/
│           └── CalculatorController.java               # REST API endpoints
│
└── frontend/
    ├── index.html                                       # Main UI structure
    ├── style.css                                        # Styling & responsive design
    ├── script.js                                        # Calculator logic & API calls
    └── README.md                                        # This file
```

## 🚀 Getting Started

### Backend Setup (Spring Boot)
```bash
cd backend
mvn clean install
mvn spring-boot:run
```
Server will run on: `http://localhost:8080`

### Frontend Setup
1. Open `frontend/index.html` in your browser
2. Or serve it with a local server:
```bash
cd frontend
python -m http.server 8000
# Then visit http://localhost:8000
```

## 📋 Features

✅ **Addition** - Add two numbers  
✅ **Subtraction** - Subtract two numbers  
✅ **Multiplication** - Multiply two numbers  
✅ **Division** - Divide two numbers (with zero check)  
✅ **Error Handling** - Input validation & error messages  
✅ **CORS Support** - Frontend and backend communication  
✅ **Responsive Design** - Works on all devices  

## 🔧 API Endpoints

### POST `/api/calculator/calculate`
**Request:**
```json
{
  "num1": 10,
  "num2": 5,
  "operation": "add"
}
```

**Response:**
```json
{
  "result": 15,
  "message": "Success"
}
```

**Supported Operations:** `add`, `subtract`, `multiply`, `divide`

## 🎨 Frontend Components

- **Input Fields** - For entering two numbers
- **Operation Dropdown** - Select calculation type
- **Calculate Button** - Trigger the calculation
- **Result Display** - Shows the result with success/error styling

## 📝 Files Overview

| File | Purpose |
|------|---------|
| `index.html` | HTML structure & form elements |
| `style.css` | Gradient backgrounds, responsive layout, animations |
| `script.js` | Fetch API calls, validation, DOM manipulation |
| `CalculatorController.java` | REST endpoints & calculation logic |
| `CalculatorApplication.java` | Spring Boot setup & CORS configuration |
| `pom.xml` | Project dependencies (Spring Boot, Web) |

## 🛠️ Technologies

**Backend:**
- Java 17
- Spring Boot 3.1.0
- Maven

**Frontend:**
- HTML5
- CSS3 (Gradients, Flexbox)
- Vanilla JavaScript (Async/Await)

## ⚠️ Troubleshooting

**Frontend can't connect to backend?**
- Make sure backend is running on `http://localhost:8080`
- Check CORS is properly configured in `CalculatorApplication.java`

**Division by zero error?**
- The app validates and returns an error message

## 📞 Contact & Support

For issues or improvements, feel free to modify the code!
