'use strict';

// Пользователи
const users = [
    {
        id: 1,
        title: 'Designer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 2,
        title: 'Programmer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 3,
        title: 'Scientist',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
];

// Профили пользователей
const profilePictures = [
    'https://www.shareicon.net/data/512x512/2016/09/01/822726_user_512x512.png',
    'https://image.flaticon.com/icons/png/512/206/206853.png',
    'https://www.shareicon.net/data/512x512/2016/09/01/822712_user_512x512.png'
]

createListElements();

/**
* Метод создает карточку с информациией о пользователе.
*/
function createListElements() {
    const ulElement = document.querySelector('ul');

    for(let i = 0; i < users.length; i++) {
        const liElement = document.createElement('li');
        const h1Element = document.createElement('h1');
        const h2Element = document.createElement('h2');
        const pElement = document.createElement('p');
        const imgElement = document.createElement('img');
        const buttonElement = document.createElement('button');

        ulElement.append(liElement);
            liElement.append(imgElement);
                imgElement.setAttribute('src', profilePictures[i]);

            liElement.append(h1Element);
                h1Element.append(users[i].title);
        
            liElement.append(h2Element);
                h2Element.append(`id: ${users[i].id}`);
            
            liElement.append(pElement);
                pElement.append(users[i].description);

        liElement.onclick = e => {
            const buttonImage = document.createElement('img');

            liElement.style.boxShadow = '0px 0px 5px 1px rgb(0, 162, 255)';
            liElement.append(buttonElement);
                buttonElement.append(buttonImage);
                buttonImage.setAttribute('src', 'https://image.flaticon.com/icons/png/512/60/60994.png');
        }

        buttonElement.onclick = e => {
            buttonElement.parentElement.remove();
        }
    }    
}