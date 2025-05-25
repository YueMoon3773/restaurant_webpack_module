import '../css/contact.css';

const contactHeading = document.createElement('h1');
contactHeading.className = 'pageHeading';
contactHeading.textContent = 'Contact us';

const contactPageContent = (parentElelment) => {
    parentElelment.appendChild(contactHeading);

    for (let i = 0; i < 3; i++) {
        const contactWrapper = document.createElement('div');
        contactWrapper.className = 'contactWrapper';
        const contactTitle = document.createElement('h2');
        contactTitle.className = 'contactTitle';
        const contactContent = document.createElement('span');
        contactContent.className = 'contactContent';
        const contactNumber = document.createElement('span');
        contactNumber.className = 'contactNumber';

        switch (i) {
            case 0:
                contactTitle.textContent = 'The Beez';
                contactContent.textContent = 'Chef';
                contactNumber.innerText = '345 - 435 - 2345';
                break;
            case 1:
                contactTitle.textContent = 'Gummy Polar';
                contactContent.textContent = 'Manager';
                contactNumber.innerText = '465 - 345 - 4356';
                break;
            case 2:
                contactTitle.textContent = 'Bippo Panda';
                contactContent.textContent = 'Waiter';
                contactNumber.innerText = '246 - 574 - 2834';
                break;
            default:
                break;
        }
        contactWrapper.appendChild(contactTitle);
        contactWrapper.appendChild(contactContent);
        contactWrapper.appendChild(contactNumber);
        parentElelment.appendChild(contactWrapper);
    }
};

export default contactPageContent;
