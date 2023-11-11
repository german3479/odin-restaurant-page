import HappyHamburger from './happyhamburger.jpg';
import FunFries from './funfries.jpg';
import FullMeal from './fullmeal.jpg';
import FamilyPack from './familypack.jpg';

const menuItems = [
    {
        itemName: "Happy Hamburger",
        img: HappyHamburger,
        price: "8.99",
        desc: "The original Happy Hamburger"
    },
    {
        itemName: "Fun Fries",
        img: FunFries,
        price: "2.99",
        desc: "The funnest fries you've ever had"
    }
]

const combos = [
    {
        itemName: "Full Burger Meal",
        img: FullMeal,
        price: "15.99",
        desc: "Delicious and filling"
    },
    {
        itemName: "Family Pack Meal",
        img: FamilyPack,
        price: "30.99",
        desc: "Da Family Pack",
    }
]

const Menu = () =>{

    const area = document.querySelector("#tabArea");
    
    const menu = document.createElement('div');
    menu.classList.add('tab');
    menu.setAttribute('id', 'menu-tab');

    const title = document.createElement('h2');
    title.textContent = "Menu"

    const singlesElement = document.createElement('div');

    const singlesHeader = document.createElement('h3');
    singlesHeader.textContent = "Singles";

    const singlesItems = document.createElement('div');
    singlesItems.classList.add('itemsGrid');

    menuItems.forEach(item =>{
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('menuItem');

        const itemImg = document.createElement('img');
        itemImg.src = item.img;
        itemImg.alt = item.itemName;

        const textArea = document.createElement('div');

        const itemName = document.createElement('h4');
        itemName.textContent = item.itemName;

        const itemDesc = document.createElement('p');
        itemDesc.textContent = item.desc;

        const itemPrice = document.createElement('p');
        itemPrice.textContent = `$${item.price}`;

        textArea.appendChild(itemName);
        textArea.appendChild(itemDesc);
        textArea.appendChild(itemPrice);

        itemContainer.appendChild(itemImg);
        itemContainer.appendChild(textArea);

        singlesItems.appendChild(itemContainer);
    })

    singlesElement.appendChild(singlesHeader);
    singlesElement.appendChild(singlesItems);

    const combosElement = document.createElement('div');

    const combosHeader = document.createElement('h3');
    combosHeader.textContent = "Combos";

    const combosItems = document.createElement('div');
    combosItems.classList.add('itemsGrid');

    combos.forEach(item =>{
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('menuItem');

        const itemImg = document.createElement('img');
        itemImg.src = item.img;
        itemImg.alt = item.itemName;

        const itemName = document.createElement('h4');
        itemName.textContent = item.itemName;

        const itemDesc = document.createElement('p');
        itemDesc.textContent = item.desc;

        const itemPrice = document.createElement('p');
        itemPrice.textContent = `$${item.price}`;

        itemContainer.appendChild(itemImg);
        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemDesc);
        itemContainer.appendChild(itemPrice);

        combosItems.appendChild(itemContainer);
    })

    combosElement.appendChild(combosHeader);
    combosElement.appendChild(combosItems);

    menu.appendChild(title);
    menu.appendChild(singlesElement);
    menu.appendChild(combosElement);

    area.appendChild(menu);
}

export default Menu;