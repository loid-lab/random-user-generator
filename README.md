# 🧩 Random User Generator
A simple and modern React + TypeScript application that fetches a random user from the [API Ninjas](https://api-ninjas.com/api/randomuser) API and displays it with a clean UI.
Built with:
- React + Vite
- TypeScript
- API Ninjas (Random User API)
- CSS Flexbox + modern UI animations
---
## 🚀 Features
- Fetches a random user profile on page load
- Fade-in animation when new data is loaded
- Responsive design (works well on mobile and desktop)
- Nice button to generate a new random user
- Fullscreen centered layout
- Error and loading handling
---
## 🛠️ Installation
### 1. Clone the repo:
```bash
git clone https://github.com/loid-lab/random-user-app.git
cd random-user-generator
```

### 2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Add API Key
Create a `.env` file in the root directory:
```
VITE_API_KEY=your_api_key_here
```

To get an API key, register at [API Ninjas](https://api-ninjas.com/register).

### 4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## 🔧 Configuration
You can modify the API endpoint or other settings in the API fetch function within your main component.

## 📁 Project Structure
```
random-user-generator/
├── public/
├── src/
│   ├── components/
│   │   └── RandomUserCard.tsx
│   ├── App.tsx
│   └── main.tsx
├── .env
├── package.json
└── README.md
```

## 📝 License
MIT