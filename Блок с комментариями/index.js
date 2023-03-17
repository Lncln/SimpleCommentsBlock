const commentForm = document.querySelector('#comment-form');
const commentName = document.querySelector('#comment-name');
const commentText = document.querySelector('#comment-text');
const commentDate = document.querySelector('#comment-date');
const commentList = document.querySelector('#comment-list');

function addComment() {
    event.preventDefault();

    if (!commentName.value || !commentText.value) {
        showError('Заполните обязательные поля');
        return;
    }

    const comment = document.createElement('div');
    comment.classList.add('comment');

    const deleteButton = document.createElement('div');
    deleteButton.classList.add('delete-comment');
    deleteButton.innerHTML  = '&#x1F5D1;';
    deleteButton.addEventListener('click', () => {
        comment.remove();
    });

    const likeButton = document.createElement('div');
    likeButton.classList.add('like-comment');
    likeButton.innerHTML  = '&#x2661;';
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('liked');
    });

    const name = document.createElement('h4');
    name.innerText = commentName.value;

    const text = document.createElement('p');
    text.innerText = commentText.value;

    const date = document.createElement('div');
    date.classList.add('comment-date');
    if (commentDate.value) {
        date.innerText = new Date(commentDate.value).toLocaleDateString();
    } else {
        date.innerText = new Date().toLocaleDateString();
    }

    comment.appendChild(deleteButton);
    comment.appendChild(likeButton);
    comment.appendChild(name);
    comment.appendChild(text);
    comment.appendChild(date);

    commentList.appendChild(comment);

    commentName.value = '';
    commentText.value = '';
    commentDate.value = '';
}

function showError(message) {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('comments-block__form-error-message');
    errorMessage.innerText = message;

    const formField = document.querySelector('.comments-block__form-field');
    formField.appendChild(errorMessage);

    setTimeout(() => {
    errorMessage.remove();
    }, 5000);
}

commentForm.addEventListener('submit', addComment);