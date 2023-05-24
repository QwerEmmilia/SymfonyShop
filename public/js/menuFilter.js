var toggleButton = document.getElementById('toggle-filters');
var sidebar = document.getElementById('sidebar');
var content = document.getElementById('content');
var body = document.body;

var sidebarWidth = sidebar.offsetWidth;

toggleButton.addEventListener('click', function() {
    sidebar.classList.toggle('show');
    content.classList.toggle('slide');
    body.classList.toggle('sidebar-open');

    if (sidebar.classList.contains('show')) {
        toggleButton.style.transform = 'translateX(' + sidebarWidth + 'px)';
        body.classList.add('no-scroll');
    } else {
        toggleButton.style.transform = 'translateX(0)';
        body.classList.remove('no-scroll');
    }
});