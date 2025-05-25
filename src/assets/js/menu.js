import '../css/menu.css';

import pancakesImg from '../img/pancakes.jpg';
import eggsToastImg from '../img/eggs_toast.jpg';
import frenchToastImg from '../img/french_toast.jpg';
import breakfastPotatoesImg from '../img/breakfast_potatoes.jpg';

const menuHeading = document.createElement('h1');
menuHeading.className = 'pageHeading';
menuHeading.textContent = 'Menu';

const menuPageContent = (parentElelment) => {
    parentElelment.appendChild(menuHeading);

    for (let i = 0; i < 4; i++) {
        const menuWrapper = document.createElement('div');
        menuWrapper.className = 'menuWrapper';
        const menuLeftSide = document.createElement('div');
        menuLeftSide.className = 'menuLeftSide';
        const menuRightSide = document.createElement('div');
        menuRightSide.className = 'menuRightSide';
        const menuTitle = document.createElement('h2');
        menuTitle.className = 'menuTitle';
        const menuContent = document.createElement('p');
        menuContent.className = 'menuContent';
        const menuPrice = document.createElement('span');
        menuPrice.className = 'menuPrice';
        const menuImg = document.createElement('img');
        menuImg.className = 'menuImg';

        switch (i) {
            case 0:
                menuTitle.textContent = 'Classic Pancakes';
                menuContent.textContent =
                    'Fluffy, golden pancakes served with butter and maple syrup. Add fresh berries or whipped cream for a sweet twist.';
                menuPrice.innerText = '$1';
                menuImg.src = pancakesImg;

                menuLeftSide.appendChild(menuTitle);
                menuLeftSide.appendChild(menuContent);
                menuLeftSide.appendChild(menuPrice);
                menuRightSide.appendChild(menuImg);
                break;
            case 1:
                menuTitle.textContent = 'Two-Egg Breakfast';
                menuContent.textContent =
                    'Two eggs any style, served with toast and your choice of bacon or sausage. A timeless, satisfying start to your morning.';
                menuPrice.innerText = '$3.5';
                menuImg.src = eggsToastImg;

                menuLeftSide.appendChild(menuImg);
                menuRightSide.classList.add('content');
                menuRightSide.appendChild(menuTitle);
                menuRightSide.appendChild(menuContent);
                menuRightSide.appendChild(menuPrice);
                break;
            case 2:
                menuTitle.textContent = 'French Toast';
                menuContent.textContent =
                    'Thick slices of bread soaked in cinnamon-vanilla batter, grilled to golden perfection and dusted with powdered sugar.';
                menuPrice.innerText = '$1.5';
                menuImg.src = frenchToastImg;

                menuLeftSide.appendChild(menuTitle);
                menuLeftSide.appendChild(menuContent);
                menuLeftSide.appendChild(menuPrice);
                menuRightSide.appendChild(menuImg);
                break;
            case 3:
                menuTitle.textContent = 'Breakfast Potatoes';
                menuContent.textContent =
                    'Crispy diced potatoes seasoned and sautéed with onions and peppers. A great side for any dish or enjoyed on their own.';
                menuPrice.innerText = '$2';
                menuImg.src = breakfastPotatoesImg;

                menuLeftSide.appendChild(menuImg);
                menuRightSide.classList.add('content');
                menuRightSide.appendChild(menuTitle);
                menuRightSide.appendChild(menuContent);
                menuRightSide.appendChild(menuPrice);
                break;
            default:
                break;
        }
        menuWrapper.appendChild(menuLeftSide);
        menuWrapper.appendChild(menuRightSide);
        parentElelment.appendChild(menuWrapper);
    }
};

export default menuPageContent;
