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

$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/status/',
  type: 'GET',
  dataType: 'json',
  success: function (json) {
    $('#api_status').addClass('available');
  },

  error: function (xhr, status) {
    console.log('error ' + status);
  }

});
