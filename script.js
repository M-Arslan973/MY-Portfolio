:root {
  --bg-color: #fcfcfc;
  --text-color: #111111;
  --accent-color: #ffc107; /* Yellow Accent */
  --btn-text: #111111;
}

body.dark-mode {
  --bg-color: #121212;
  --text-color: #ffffff;
  --accent-color: #ffc107;
  --btn-text: #111111;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  height: 100vh;
  display: flex;
  align-items: center;
  padding-left: 10%;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease, color 0.3s ease;
}

/* Faint Background Code Text */
.code-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #ffc107;
  opacity: 0.15;
  font-family: monospace;
  font-size: 1.2rem;
  z-index: 0;
  pointer-events: none;
  padding: 50px;
}

.container {
  position: relative;
  z-index: 1;
  max-width: 500px;
}

.name {
  font-size: 3.5rem;
  font-weight: 900;
  color: var(--accent-color);
  letter-spacing: 2px;
}

.sub-title {
  font-size: 1.8rem;
  margin-bottom: 25px;
  font-weight: 500;
}

#typed {
  border-bottom: 2px solid var(--accent-color);
}

/* Social Icons Grid */
.social-icons {
  display: flex;
  gap: 15px;
  font-size: 1.5rem;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.social-icons a {
  color: var(--text-color);
  transition: transform 0.2s ease, color 0.2s ease;
}

.social-icons a:hover {
  color: var(--accent-color);
  transform: translateY(-3px);
}

/* Action Buttons */
.btn-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 220px;
}

.btn {
  background-color: var(--accent-color);
  color: var(--btn-text);
  padding: 14px 24px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
  transition: transform 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

/* Light/Dark Toggle Switch */
.theme-toggle {
  position: fixed;
  bottom: 30px;
  left: 30px;
  width: 60px;
  height: 30px;
  background-color: #ccc;
  border-radius: 15px;
  cursor: pointer;
  padding: 3px;
  display: flex;
  align-items: center;
}

.toggle-circle {
  width: 24px;
  height: 24px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  transition: transform 0.3s ease;
}

body.dark-mode .theme-toggle {
  background-color: #444;
}

body.dark-mode .toggle-circle {
  transform: translateX(30px);
}