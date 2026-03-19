#  Javascript Clock & Countdown Application

##  About the Project

This project is an assignment created as part of the **Kodluyoruz Frontend Javascript training**.

The application welcomes the user by name and includes the following features on the page:

*  Digital clock
*  Random countdown timer

---

##  Features

✔ Welcome the user by name  
✔ Live clock display using JavaScript  
✔ Random countdown between **30–120 seconds**  
✔ Responsive design  
✔ Modern user interface  

---

##  How It Works

On the Javascript side:

* When the page loads, a **random duration between 30 and 120 seconds** is generated.
* A countdown runs every second using `setInterval()`.
* The remaining time is displayed in **MM:SS format**.
* For the hourglass animation, the top sand decreases while the bottom sand increases.

```javascript
let percent = totalSeconds / startingSeconds

document.querySelector(".sand.top").style.height = 
(50 * percent) + "%"

document.querySelector(".sand.bottom").style.height =
(50 * (1 - percent)) + "%"

```
---


##  Project Structure

```
kum-saati/
├── index.html
├── README.md

```

---

##  Technologies I Use

<img src="https://skillicons.dev/icons?i=html,css,js,php,bootstrap,tailwind,figma,photoshop" height="40" />

---

---

##  Installation & Usage

Clone the repository:

```bash
git clone https://github.com/ChnSari/melody-market.git
```

Open the project:

```
Open index.html in your browser.
```

No installation or dependencies required.

---


##  Developer

**Cihan Sarı**

* GitHub: https://github.com/ChnSari
* LinkedIn: https://linkedin.com/in/cihansri
* Email: [cihannsri@gmail.com](mailto:cihannsri@gmail.com)

---

##  License

[MIT](https://choosealicense.com/licenses/mit/)
