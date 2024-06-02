$(document).ready(function () {
  $('input[type=checkbox]').click(function () {
    const list_of_name = [];
    const data_id = [];
    $('input[type=checkbox]:checked').each(function () {
      list_of_name.push($(this).attr('data-name'));
      data_id.push($(this).attr('data-id'));
    });
    if (myListName.length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(myListName.join(', '));
    }
    console.log(myId);
  });
});

