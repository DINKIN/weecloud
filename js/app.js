App = new Backbone.Marionette.Application();

App.addRegions({
  nav: '#nav',
  chat: '#chat'
});

socket = io.connect();

socket.on('connected', function() {
  $('#chat').removeClass('hide');
  $('#connect').addClass('hide');
});

$(function() {
  $('.tip').tooltip();
});

var servers = new ServerCollection();
var nav = new Nav({
  collection: servers
});

socket.on('connected', function() {
  servers.fetch();
});
