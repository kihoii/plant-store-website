const feedbacks = [
    {
        text: 'Sed odio donec curabitur auctor amet Sed odio donec curabitur auctor amet amet morbi egestas hendrerit.',
        photo: './assets/customers/customer-1.png',
        name: 'JENNIFER LEWIS',
    },
    {
        text: 'Sed odio donec curabitur auctor amet Sed odio donec curabitur auctor amet amet morbi egestas hendrerit.',
        photo: './assets/customers/customer-2.png',
        name: 'ALICIA HEART',
    },
    {
        text: 'Sed odio donec curabitur auctor amet Sed odio donec curabitur auctor amet amet morbi egestas hendrerit.',
        photo: './assets/customers/customer-3.png',
        name: 'JUAN CARLOS',
    },
];

const divFeedback = document.querySelector(".feedback-cards-group");

feedbacks.forEach(element => {
    divFeedback.innerHTML += `
        <div class="feedback-card">
            <div class="feedback-section-comma">‘‘</div>
            <div class="feedback-text">${element.text}</div>
            <img class="feedback-photo" src="${element.photo}" alt="">
            <div class="feedback-name">${element.name}</div>
        </div>`
});