// Define an array of image sets (main image and 2 sketch images)
const imageSets = [
    {
        mainImage: 'images/firstshow.png',
        sketchImage1: 'images/sketch11.png',
        sketchImage2: 'images/sketch12.png',
    },
    {
        mainImage: 'images/sho1.png',
        sketchImage1: 'images/sketch21.png',
        sketchImage2: 'images/sketch22.png',
    },
    {
        mainImage: 'images/sho2.png',
        sketchImage1: 'images/sketch31.png',
        sketchImage2: 'images/sketch32.png',
    },
    {
        mainImage: 'images/sho3.png',
        sketchImage1: 'images/sketch41.png',
        sketchImage2: 'images/sketch42.png',
    },
    {
        mainImage: 'images/sho4.png',
        sketchImage1: 'images/sketch51.png',
        sketchImage2: 'images/sketch52.png',
    },
    {
        mainImage: 'images/sho5.png',
        sketchImage1: 'images/sketch61.png',
        sketchImage2: 'images/sketch62.png',
    },
    {
        mainImage: 'images/sho6.png',
        sketchImage1: 'images/sketch71.png',
        sketchImage2: 'images/sketch72.png',
    },
    {
        mainImage: 'images/sho7.png',
        sketchImage1: 'images/sketch81.png',
        sketchImage2: 'images/sketch82.png',
    },
    {
        mainImage: 'images/sho8.png',
        sketchImage1: 'images/sketch91.png',
        sketchImage2: 'images/sketch92.png',
    },
    {
        mainImage: 'images/sho9.png',
        sketchImage1: 'images/sketch101.png',
        sketchImage2: 'images/sketch102.png',
    },
    {
        mainImage: 'images/sho10.png',
        sketchImage1: 'images/sketch11.png',
        sketchImage2: 'images/sketch12.png',
    },
];

let currentSetIndex = 0;
let isLoading = false;

// Get HTML elements
const mainImageElement = document.getElementById('mainImage');
const sketchImage1Element = document.getElementById('sketchImage1');
const sketchImage2Element = document.getElementById('sketchImage2');
const nextButton = document.querySelector('.button');
const modal = document.querySelector('.modal');

// Function to hide the modal
function hideModal() {
    modal.style.display = 'none';
}

// Function to show the modal with the specified position
function showModal(leftPosition, topPosition) { 
    modal.style.display = 'block';
    modal.style.left = leftPosition;
    modal.style.top = topPosition;
}

// Function to update images based on the currentSetIndex
function updateImages() {
    const currentSet = imageSets[currentSetIndex];
    mainImageElement.src = currentSet.mainImage;
    sketchImage1Element.src = currentSet.sketchImage1;
    sketchImage2Element.src = currentSet.sketchImage2;
}

// Function to show loading animation for 7 seconds
function showLoadingAnimation() {
    isLoading = true;
    hideModal(); // Hide the modal

    // Store the button's initial position
    const initialLeft = nextButton.style.left;
    const initialTop = nextButton.style.top;

    // Change the button's position to center it in the container
    nextButton.style.left = '300px';
    nextButton.style.top = '265px';
    nextButton.style.transform = 'translate(-50%, -50%)';

    mainImageElement.style.display = 'none'; // Hide the main image
    sketchImage1Element.style.display = 'none'; // Hide the sketch images
    sketchImage2Element.style.display = 'none';

    // Disable the button and change its appearance
    nextButton.disabled = true;
    nextButton.classList.add('disabled-button');

    const loadingAnimation = document.getElementById('loadingAnimation');
    loadingAnimation.style.display = 'block';


    // Append the loading animation to the container
    mainImageElement.parentElement.appendChild(loadingAnimation);

    setTimeout(() => {
        isLoading = false;

        // Restore the button's initial position
        nextButton.style.left = initialLeft;
        nextButton.style.top = initialTop;
        nextButton.style.transform = 'none';
        loadingAnimation.style.display = 'none';
        mainImageElement.style.display = 'block'; // Show the main image
        sketchImage1Element.style.display = 'block'; // Show the sketch images
        sketchImage2Element.style.display = 'block';
        //oadingAnimation.remove(); // Remove the loading animation HTML

        // Re-enable the button and restore its appearance
        nextButton.disabled = false;
        nextButton.classList.remove('disabled-button');

        // Set the modal's position
        showModal('300px', '-45px');

        updateImages();
    }, 7000); // 7 seconds
}

  

// Initial setup
updateImages();

// Event listener for the "Next" button
nextButton.addEventListener('click', function () {
    if (!isLoading) {
        currentSetIndex = (currentSetIndex + 1) % imageSets.length;
        showLoadingAnimation();
    }
});
