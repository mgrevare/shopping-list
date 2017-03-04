$(function() {

var state = {
    items: []
};

function addItem(state, item) {
  state.items.push(item);
};

function removeItem(item) {
  // state.items.splice(item, 1);
  var index = state.items.indexOf(item);
  state.items.splice(index, 1);
}

function renderList(state, element) {
  var itemsHTML = state.items.map(function(item){
    return '<li>' +
      '<span class="shopping-item">' + item + '</span>' +
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
  element.html(itemsHTML);
};

function toggleChecked (element) {
  element.parent().parent().toggleClass("shopping-item__checked");
}

$('#js-shopping-list-form').submit(function(event){
  event.preventDefault();
  addItem(state, $('#shopping-list-entry').val());
  renderList(state, $('.shopping-list'));
});

$(document).on('click', '.shopping-item-toggle', function(event){
  toggleChecked($(this));
});

$(document).on('click', '.shopping-item-delete', function(event){
  var itemIndex = $(this).closest('li').children('.shopping-item').text();
  removeItem(itemIndex);
  renderList(state, $('.shopping-list'));
});


});
