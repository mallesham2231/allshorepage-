var titles = document.querySelectorAll('.Service .service_Title');
var service_descriptions = document.querySelectorAll('.Service .service_description');
var icons = document.querySelectorAll('.ri-add-fill');
var Headings = document.querySelectorAll('.Service .service_Title h2');
console.log(titles)
console.log(Headings)
titles.forEach((title, index) => {
    title.addEventListener('click', () => {
        console.log(title)
        var isActive = service_descriptions[index].classList.contains('ActiveDesc');
        service_descriptions.forEach((desc) => {
            desc.classList.remove('ActiveDesc')
        });
        icons.forEach((icon) => {
            icon.classList.remove('ri-subtract-line');
        });
        Headings.forEach((Heading) => {
            Heading.classList.remove('ActiveHeading');
        });
        if (!isActive) {
            service_descriptions[index].classList.add('ActiveDesc');
            icons[index].classList.toggle('ri-subtract-line');
            Headings[index].classList.toggle('ActiveHeading');
        }
    });
});

