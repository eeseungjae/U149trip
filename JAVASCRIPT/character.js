const character_info = document.querySelector(".character_info");
const icons = document.querySelectorAll('.character_icon ul li img');
icons.forEach(icon => {
        icon.addEventListener('click', function() {
            const imagePath = icon.getAttribute('src');
            console.log(imagePath);
            const filename = getFilename(imagePath);
            console.log(filename);

            character_info.style.backgroundImage = `url(./IMAGE/member_info/chara_detail_${filename}.jpg)`;
    });

});

function getFilename(imagePath){
    const noExtension = imagePath.substring(imagePath.lastIndexOf('/')+1);
    console.log("noExtension ="+noExtension);
    const numberPart = noExtension.match(/\d+/);
    return numberPart ? numberPart[0] : null;
}