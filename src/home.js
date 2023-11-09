export function makeHome(){
    const contentDiv = document.getElementById("content");

    const nav = document.createElement('nav');
    const navContent = document.createElement('div');
    const navImg = document.createElement('img');
    const navSpan = document.createElement('span');

    const restaurantHero = document.createElement('div');
    const restaurantTitle = document.createElement('h1');
    const restaurantDesc = document.createElement('p');

    navImg.src = "https://i.etsystatic.com/11979725/r/il/425b9a/1431687786/il_fullxfull.1431687786_w5a8.jpg";
    navSpan.textContent = "RESTAURANTS INC";

    restaurantTitle.textContent = "Our Wonderful Restaurant";
    restaurantDesc.textContent = "Welcome to our restaurant! We offer delicious food and a warm atmosphere.";

    restaurantHero.appendChild(restaurantTitle);
    restaurantHero.appendChild(restaurantDesc);
    restaurantHero.setAttribute('id', 'restaurant-hero');

    navContent.appendChild(navImg);
    navContent.appendChild(navSpan);
    navContent.setAttribute('id', 'nav-content');
    nav.appendChild(navContent);

    contentDiv.appendChild(nav);
    contentDiv.appendChild(restaurantHero);
}