/* https://api.thedogapi.com/v1/breeds
https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=1 */

export function fetchAllData() {
    return fetch('https://api.thedogapi.com/v1/breeds').then(res => {
        return res.json();
    });
}

export function fetchImageData(id) {
    return fetch('https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=' + id);
}

export const pets = [
    {title: 'Cat', imgUrl: '../assets/cuteCat.jpg', alt: 'cat img', description: 'Cat Description => fsdkjlfhsd flhsdlkfhdghqf fgqdfhqskdjfh slqdfh sdiulfhslk dfhleuzfhklj sdfhldkqjd fhlskdfhsdlf klqsdfh kjldsqsdhflkjsdsdh lkj'},
    {title: 'Dog', imgUrl: '../assets/cuteDog.jpg', alt: 'dog img', description: 'Dog Description => fsdkjlfhsd flhsdlkfhdghqf fgqdfhqskdjfh slqdfh sdiulfhslk dfhleuzfhklj sdfhldkqjd fhlskdfhsdlf klqsdfh kjldsqsdhflkjsdsdh lkj'},
    {title: 'Hamester', imgUrl: '../assets/cuteHamester.jpg', alt: 'hamester img', description: 'Hamester Description => fsdkjlfhsd flhsdlkfhdghqf fgqdfhqskdjfh slqdfh sdiulfhslk dfhleuzfhklj sdfhldkqjd fhlskdfhsdlf klqsdfh kjldsqsdhflkjsdsdh lkj'}
];