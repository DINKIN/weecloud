var wc = {};

wc.socket = io.connect();
kibo = new Kibo();

wc.socket.on('connect', function() {
    $(function() {
        var guid = $('#guid').val();
        if (!guid) guid = location.hash.slice(1);
        location.hash = guid;

        wc.socket.emit('sync', guid);
    });
});

