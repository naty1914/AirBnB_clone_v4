$(document).ready(function () {
  $('input[type=checkbox]').click(function () {
    const listName = [];
    const dataId = [];
    $('input[type=checkbox]:checked').each(function () {
      listName.push($(this).attr('data-name'));
      dataId.push($(this).attr('data-id'));
    });
    if (listName.length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(listName.join(', '));
    }
    console.log(dataId);
  });
});
