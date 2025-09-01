# My Portfolio Website

A simple, minimal, and responsive portfolio website with **dark mode and light mode** support.  
Includes a contact form and a button to **download my resume**.

---

## 🚀 Features
- Minimal design with dark & light mode toggle
- Responsive layout (works on mobile, tablet, desktop)
- Contact form to reach out via email
- Resume download button (`resume.pdf`)

---

## 📂 Project Structure
my_portfolio/
├── public/
│ └── resume.pdf # Resume file for download
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Portfolio pages
│ └── styles/ # CSS / Tailwind styles
├── package.json
└── README.md

yaml
Copy code

---

## 📄 Resume Download
To update your resume:  
1. Replace the `resume.pdf` inside the **public/** folder with your latest resume.  
2. Update the file name in the code if needed.

Example resume button in React:
```jsx
<Button asChild>
  <a href="/resume.pdf" download>
    <FileText className="mr-2 h-4 w-4" />
    Download Resume
  </a>
</Button>
🛠️ Installation & Setup
Clone the repository

bash
Copy code
git clone https://github.com/your-username/my_portfolio.git
cd my_portfolio
Install dependencies

bash
Copy code
npm install
Run the development server

bash
Copy code
npm run dev
Open in your browser:

arduino
Copy code
http://localhost:3000
