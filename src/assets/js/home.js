import '../css/home.css';

const homeHeading = document.createElement('h1');
homeHeading.className = 'pageHeading';
homeHeading.textContent = "YueMoon's Breakfast Bar";

const homeDescWrapper = document.createElement('div');
homeDescWrapper.className = 'homeWrapper';
const descText = document.createElement('p');
descText.className = 'homeContent descText';
descText.textContent =
    "Start your day right at YueMoon, where breakfast is more than just a meal—it’s a moment to savor. From fluffy pancakes and perfectly brewed coffee to hearty omelets and fresh, locally sourced ingredients, we serve comfort and flavor in every bite. Whether you're grabbing a quick bite or enjoying a leisurely morning, our cozy atmosphere and friendly service make every visit feel like home.";
const descAuth = document.createElement('h2');
descAuth.className = 'homeTitle descAuth';
descAuth.textContent = 'Moonie';

const hoursWrapper = document.createElement('div');
hoursWrapper.className = 'homeWrapper';
const hoursTitle = document.createElement('h2');
hoursTitle.className = 'homeTitle';
hoursTitle.textContent = 'Hours';
const hoursContent = document.createElement('span');
hoursContent.className = 'homeContent';
hoursContent.setAttribute('style', 'white-space: pre;');
hoursContent.textContent = 'Weekdays: 7:30am - 10pm\r\n';
hoursContent.textContent += 'Weekend: 8am - 11:30pm';

const locationWrapper = document.createElement('div');
locationWrapper.className = 'homeWrapper';
const locationTitle = document.createElement('h2');
locationTitle.className = 'homeTitle';
locationTitle.textContent = 'Location';
const locationContent = document.createElement('span');
locationContent.className = 'homeContent';
locationContent.textContent = '123 Dreamer Valley, Cloud city.';

const homePageContent = (parentElement) => {
    homeDescWrapper.appendChild(descText);
    homeDescWrapper.appendChild(descAuth);

    hoursWrapper.appendChild(hoursTitle);
    hoursWrapper.appendChild(hoursContent);

    locationWrapper.appendChild(locationTitle);
    locationWrapper.appendChild(locationContent);

    parentElement.appendChild(homeHeading);
    parentElement.appendChild(homeDescWrapper);
    parentElement.appendChild(hoursWrapper);
    parentElement.appendChild(locationWrapper);
};
export default homePageContent;
