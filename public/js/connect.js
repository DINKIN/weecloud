$(function() {
  socket.on('connect', function() {
    var $host = $('#host');
    var $port = $('#port');
    var $password = $('#password');
    var $store = $('#store');
    var $btn = $('#connect .btn');

    $('#connect').show();
    $('#center, #input, #top').hide();

    if (window.localStorage) {
      $host.val(localStorage.host);
      $port.val(localStorage.port);
      $password.val(localStorage.password);
      $store.prop('checked', localStorage.store);
    }

    $btn.click(function() {
      var host = $host.val();
      var port = $port.val();
      var password = $password.val();
      var store = $store.prop('checked');

      $('#error').hide();

      localStorage.host = store ? host : '';
      localStorage.port = store ? port : '';
      localStorage.password = store ? password : '';
      localStorage.store = store;

      socket.emit('connect', {
        host: host,
        port: port,
        password: password
      }, function(data) {
        $('#connect').hide();
        $('#center, #input, #top').show();

        socket.emit('init');
      });
    });

    var kibo = new Kibo();
    kibo.down('enter', function() {
      if ($('#connect').is(':visible')) $btn.click();
    });
  });
});
