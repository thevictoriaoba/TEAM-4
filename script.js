

  document.getElementById('toggleSidebar').addEventListener ('click', function() {
    var sidebar = document.getElementById ('sidebaar');
    sidebar.classList.toggle ('visible');
});


  document.getElementById('closeSidebar').addEventListener ('click', function() {
    var sidebar = document.getElementById ('sidebaar');
    sidebar.classList.toggle ('close');
});