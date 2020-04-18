function search_art() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('collection_item');
    for (i = 0; i < x.length; i++) {
      const titleEl = x[i].getElementsByClassName('titel')[0];
      if (!titleEl.innerHTML.toLowerCase().includes(input)) {
        x[i].style.display="none";
      } else {
        x[i].style.display="block";
      }
    }
}

var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener( 'click', function( event ) {
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  const filterValue = event.target.getAttribute('data-filter');
  const collectionItems = document.querySelectorAll('.collection_item');

  if(filterValue == '*'){
    for(var i = 0; i < collectionItems.length; i++){
      const item = collectionItems[i];
      item.classList.remove('hide_collection_item');
      item.classList.add('show_collection_item');
    }
    return;
  }

  for(var i = 0; i < collectionItems.length; i++){
    const item = collectionItems[i];
    item.classList.add('hide_collection_item');
    item.classList.remove('show_collection_item');
  }
  const filteredElements = document.querySelectorAll(filterValue);
  for(var i = 0; i < filteredElements.length; i++){
    const item = filteredElements[i];
    item.classList.add('show_collection_item');
    item.classList.remove('hide_collection_item');
  }
});

var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup( buttonGroup );
}

function radioButtonGroup( buttonGroup ) {
  buttonGroup.addEventListener( 'click', function( event ) {
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
    event.target.classList.add('is-checked');
  });
}
