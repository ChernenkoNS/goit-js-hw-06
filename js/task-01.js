
const category = document.querySelectorAll('.item')
console.log('Number of categories:', category.length)

category.forEach(element => {
    const categoryName = element.firstElementChild.innerHTML;
    const elements = element.lastElementChild
    console.log('Category:', categoryName); 
    console.log('Elements:', elements.children.length);
});
