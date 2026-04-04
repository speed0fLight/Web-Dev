/*
<img onclick="javascript:document.images['thumbnailView'].src = 'images/stamp1.jpg'" src="images/stamp1.jpg" width="100" height="125">
<img onclick="javascript:document.images['thumbnailView'].src = 'images/stamp2.jpg'" src="images/stamp2.jpg" width="100" height="125">
<img onclick="javascript:document.images['thumbnailView'].src = 'images/stamp3.jpg'" src="images/stamp3.jpg" width="100" height="125">
 */
document.addEventListener('DOMContentLoaded', thumbnailListConnect);


function thumbnailListConnect(event) {
    let thumbnailView = document.images['thumbnailView']

    let imageButton1 = document.images['thumbnailImage1'];
    let imageButton2 = document.images['thumbnailImage2'];
    let imageButton3 = document.images['thumbnailImage3'];

    imageButton1.addEventListener('click', (event) => {
        thumbnailView.src = imageButton1.src;
    });

    imageButton2.addEventListener('click', (event) => {
        thumbnailView.src = imageButton2.src;
    });

    imageButton3.addEventListener('click', (event) => {
        thumbnailView.src = imageButton3.src;
    });
}
