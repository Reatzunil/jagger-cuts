let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    navbar.classList.remove("active");
}

window.onscroll = () =>{
    navcar.classList.toogle('active');
}

document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault(); 
    const targetId = this.getAttribute('href'); 
    const targetSection = document.querySelector(targetId); // Find the target section using the ID
    targetSection.scrollIntoView({ behavior: 'smooth' }); 
});

    const learnMoreBtn = document.getElementById('learn-more-btn');
    const additionalInfo = document.getElementById('additional-info');
    
    learnMoreBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of anchor tag
        additionalInfo.classList.toggle('hidden'); // Toggle the 'hidden' class to reveal or hide the additional information
    }); 

function showPersonDetails(){
    document.getElementById("personModal").style.display = "block";
    
}

function closePersonDetails(){
    document.getElementById("personModal").style.display = "none";
}

function previewImage(event) {
    var input = event.target;
    var reader = new FileReader();

    reader.onload = function() {
        var imgElement = document.createElement('img');
        imgElement.src = reader.result;
        imgElement.style.maxWidth = '100%';
        document.getElementById('image-preview').innerHTML = '';
        document.getElementById('image-preview').appendChild(imgElement);
    }
    reader.readAsDataURL(input.files[0]);
}

function showAdminLogin() {
    document.getElementById("adminModal").style.display = "block";
}

function closeAdminLogin() {
    document.getElementById("adminModal").style.display = "none";
}
