document.getElementById('submit-button').addEventListener('click', function(){
    const commentBox = document.getElementById('new-comment');

    // create comment paragraph
    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;

    // append the comment
    const commentContainer = document.getElementById('comment-container').appendChild(newComment);

    commentBox.value = '';

});