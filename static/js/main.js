

// static/js/main.js
document.addEventListener('DOMContentLoaded', function() {  // Run this code when the page is fully loaded
    const commentForm = document.querySelector('.comment-form');  // Get the comment form from the page

    if (commentForm) {  // If the comment form exists
        commentForm.addEventListener('submit', function(e) {  // Listen for form submission
            e.preventDefault();  // Prevent the page from reloading
            const commentInput = this.querySelector('.comment-input');  // Get the comment input field
            const commentText = commentInput.value.trim();  // Get the text and remove whitespace

            if (commentText) {  // If the input is not empty
                addComment(commentText);  // Add the comment to the page
                commentInput.value = '';  // Clear the input field
            }
        });
    }

    const imageInput = document.getElementById('image');  // Get the file input for images
    if (imageInput) {  // If the file input exists
        imageInput.addEventListener('change', function() {  // When a file is selected
            const file = this.files[0];  // Get the first selected file
            if (file) {  // If a file is selected
                console.log('Selected file:', file.name);  // Log the file name (you could show a preview here)
            }
        });
    }
});

function addComment(text) {  // Function to add a new comment to the page
    console.log('Adding comment:', text);  // Log the comment being added
    const commentList = document.querySelector('.comment-list');  // Get the container where comments are shown

    if (commentList) {  // If the comment container exists
        const commentDiv = document.createElement('div');  // Create a new div for the comment
        commentDiv.className = 'comment';  // Assign the 'comment' class for styling
        commentDiv.innerHTML = `          // Set the inner HTML for the comment content
            <p class="comment-text">${text}</p>  <!-- Display the comment text -->
            <div class="comment-meta">
                <span class="comment-author">You</span>  <!-- Show the author name -->
                <span class="comment-date">Just now</span>  <!-- Show the comment date -->
            </div>
        `;

        commentList.prepend(commentDiv);  // Add the new comment to the top of the list
    }
}