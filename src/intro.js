
import Chef from './chef.jpg';

const createIntro = () => {
    const tabArea = document.querySelector("#tabArea");

    const introDiv = document.createElement('div');
    introDiv.classList.add('tab', 'intro-tab');

    const chefImage = document.createElement('img');
    // Use the imported image source
    chefImage.src = Chef;
    chefImage.alt = 'Lead Chef Image';

    const contentSection = document.createElement('div');
    contentSection.classList.add('content-section');

    const header = document.createElement('h2');
    header.textContent = 'Meet Our Lead Chef';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    contentSection.appendChild(header);
    contentSection.appendChild(paragraph);

    introDiv.appendChild(chefImage);
    introDiv.appendChild(contentSection);

    tabArea.appendChild(introDiv);
};

export default createIntro;
