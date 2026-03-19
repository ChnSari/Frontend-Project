/* Menü */
const menu = [
    {
        id: 1,
        title:"Sushi Roll",
        category:"Sushi",
        price: 12.90,
        img:"https://th.bing.com/th/id/R.914b53ce9193319431084cafd9bad0e3?rik=CS14qYH0y%2bmBEQ&pid=ImgRaw&r=0",
        desc: "Taze somon ve avokado ile hazırlanmış nefis sushi roll."
    },
    {
        id: 2,
        title:"Pad Thai",
        category: "Noodle",
        price:10.50,
        img: "https://www.recipetineats.com/tachyon/2023/05/Spicy-Korean-noodle-soup_4.jpg",
        desc: "Klasik Tayland noodle, karides ve taze sebzelerle."

    },
    {
        id: 3,
        title: "Spring Rolls",
        category: "Appetizer",
        price: 5.25,
        img: "https://foodess.com/wp-content/uploads/2023/12/Brie-Appetizer.jpg",
        desc: "Sebzeli ve çıtır baharatlı spring roll."
    },
    {
        id: 5,
        title: "Teriyaki Chicken",
        category: "Doroyaki ",
        price: 14.00,
        img: "https://foodess.com/wp-content/uploads/2023/12/Brie-Appetizer.jpg",
        desc: "Tavuk ve teriyaki sosuyla servis edilen ana yemek."
  }
];

/* Sayfa elementlerini seç */
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

/*  Menü öğelerini ekrana basma fonksiyonu */
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(item => {
    return `<article class="menu-item">
      <img src=${item.img} alt=${item.title} class="photo">
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">${item.desc}</p>
      </div>
    </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

/* Kategori butonlarını oluşturma */
function displayMenuButtons() {
  /* Önce unique kategorileri bul */
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  
  const categoryBtns = categories
    .map(category => {
      return `<button class="filter-btn" type="button" data-id=${category}>
        ${category}
      </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  /* Butonlara tıklama eventi ekle */
  filterBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(menuItem => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

/* Sayfa yüklendiğinde çalışacaklar */
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayMenuButtons();
});



