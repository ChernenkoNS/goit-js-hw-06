const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryRef = document.querySelector('.gallery')

const fun = images.map(({url, alt }) => `<img src="${url}" alt="${alt}" class ="img"> `).join("");
  galleryRef.insertAdjacentHTML("afterbegin", fun )
  
const fun2 = images.map(({url, alt}) => 1).join("-")
console.log(fun2);






// const galleryArr = []

// for (let i = 0; i < images.length; i += 1) {

//   const liRef= document.createElement('li')
//   const imgRef = `<img src="${images[i].url}" alt="${images[i].alt}" class ="img"> ` 
//   liRef.insertAdjacentHTML("afterbegin", imgRef )
//   galleryArr.push(liRef)
// };

// galleryRef.append(...galleryArr);




