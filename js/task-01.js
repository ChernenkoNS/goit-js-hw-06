
const category = document.querySelectorAll('.item')
console.log('Number of categories:', category.length)

category.forEach(element => {
    const categoryName = element.children[0].innerHTML;
    const elements = element.children[1]
    console.log('Category:', categoryName); 
    console.log('Elements:', elements.children.length);
});
