# SkillSwap – A Local Skill Exchange Platform

SkillSwap is an interactive web platform where individuals can offer, learn, and exchange skills within their local community. Whether it’s guitar lessons, coding help, yoga sessions, or language exchange, SkillSwap connects people based on expertise and interests.

---

## 🌐 Live Demo  
🔗 **[https://skill-swap-nozib.netlify.app/](https://skill-swap-nozib.netlify.app/)**

---

## 🎯 Purpose of the Project
The purpose of SkillSwap is to provide a simple, user-friendly platform where users can:

- Discover skill providers in different categories  
- View detailed skill listings  
- Connect with providers  
- Learn, exchange, or offer skills  
- Manage their own profiles securely  

It promotes community learning and brings local talents together.

---

## ⭐ Key Features

### 🔐 **Authentication**
- Email/Password Login & Signup (Firebase Auth)
- Google Sign-In
- Password Reset
- Protected Routes using PrivateRoute

### 🧑‍💼 **Skill Browsing**
- View all skills
- Skill search & category-based display  
- Detailed skill description pages  
- Dynamic routing: `/skills/:id`

### 👤 **User Profile**
- View logged-in user information  
- Update profile details  
- Logout functionality  

### 🚫 **Access Control**
- Private pages restricted to authenticated users  
- Error page & Not Found page

### 🎨 **UI & Animation**
- Responsive layout using TailwindCSS + DaisyUI  
- Sliders and interactive sections  
- Smooth animations using Animate.css, Swiper, AOS, and Framer Motion  
- Toast notifications using React Toastify

---

## 📦 Technologies & NPM Packages Used

### **Frontend**
- **React 19**  
- **Vite**
- **React Router v7**

### **UI & Styling**
- **Tailwind CSS**  
- **DaisyUI**  
- **Animate.css**  
- **Swiper**  
- **AOS (Animate on Scroll)**  
- **React Icons**

### **State & Utilities**
- **Axios** 
- **React Spinners**

### **Animations**
- **Framer Motion**

### **Notifications**
- **React Toastify**

### **Authentication**
- **Firebase Authentication**

### **Dev Tools**
- ESLint  
- @vitejs/plugin-react  
- TypeScript types (`@types/react`, `@types/react-dom`)

---

## 🚀 How to Run Locally

### 1. Clone the repository:

```bash
git clone https://github.com/nozibuddowla/skill-swap.git
cd skill-swap
````

### 2. Install dependencies:

```bash
npm install
```

### 3. Start development server:

```bash
npm run dev
```

### 4. Build for production:

```bash
npm run build
```

---

## 📄 License

This project is open-source and available under the MIT License.
