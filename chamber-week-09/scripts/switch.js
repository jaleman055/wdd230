// switch button to change list view of directory

document.getElementById('switchViewBtn').addEventListener('click', function() {
  var directory = document.getElementById('directory');
  
  if (directory.classList.contains('grid')) {
      directory.classList.remove('grid');
      directory.classList.add('list');
      this.innerText = 'Switch to Grid View';
  } else {
      directory.classList.remove('list');
      directory.classList.add('grid');
      this.innerText = 'Switch to List View';
  }
});
