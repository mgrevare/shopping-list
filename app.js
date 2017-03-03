var state = {
    items: []
};

function addItem(state, item) {
  state.items.push(item);
};

function renderList(state, element) {
  var itemsHTML = state.items.map(function(item){
    return '<li>' +
      '<span class="shopping-item shopping-item__checked">' + item + '</span>' +
      '<div class="shopping-item-controls">' +
        '<button class="shopping-item-toggle">' +
          '<span class="button-label">check</span>' +
        '</button>' +
        '<button class="shopping-item-delete">' +
          '<span class="button-label">delete</span>' +
        '</button>' +
      '</div>' +
    '</li>';
  });
  $('element').html(itemsHTML);
};

$('.js-shopping-list-form').submit(function(event){
  event.preventDefault();
  addItem(state, $('.shopping-list-entry').val());
  renderList(state, $('.shopping-list'));
});
