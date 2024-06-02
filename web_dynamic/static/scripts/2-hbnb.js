$('document').ready(function () {
    const url = 'http://' + window.location.hostname + ':5001/api/v1/status/';
    $.get(url, function (response) {
      if (response.status === 'OK') {
        $('DIV#api_status').addClass('available');
      } else {
        $('DIV#api_status').removeClass('available');
      }
    });
  
    let ament = {};
    $('INPUT[type="checkbox"]').change(function () {
      if ($(this).is(':checked')) {
        ament[$(this).attr('data-id')] = $(this).attr('data-name');
      } else {
        delete ament[$(this).attr('data-id')];
      }
      if (Object.values(ament).length === 0) {
        $('.ament H4').html('&nbsp;');
      } else {
        $('.ament H4').text(Object.values(ament).join(', '));
      }
    });
  });