var mainImage = document.getElementById('mainimage');
var smallImages = document.getElementsByClassName('small-image');

for (var i = 0; i < smallImages.length; i++) {
    smallImages[i].addEventListener('click', function(event) {
        mainImage.src = event.target.src;
    });
}
const addedtocart=()=>{
    Swal.fire({
        icon: 'success',
        title: 'Successfully added to cart',
        text: 'your product will be delivered soon'
      })
}