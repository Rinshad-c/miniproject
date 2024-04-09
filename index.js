var navl=document.getElementById('navlinks');
function showmenu(){
    navl.style.right = '0';
}
function hidemenu(){
    navl.style.right = '-200px'
}




document.querySelectorAll('.images img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-imag').style.display = 'block';
        document.querySelector('.popup-imag img').src = image.getAttribute('src');
    }

    document.querySelector('.popup-imag span').onclick =() =>{
        document.querySelector('.popup-imag').style.display = 'none';
    }
    
});


