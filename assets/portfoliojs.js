const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');
const mainbody = document.querySelector(".mainbody")

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    console.log(sidebar.classList)

    if( sidebar.classList.contains('active') ){
        mainbody.classList.add('sidebar-active');
    } else {
        mainbody.classList.remove('sidebar-active');
    }

});

console.log(sidebar)