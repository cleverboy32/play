const webpack = require('webpack')
const merge = require('webpack-merge')

const WebpackConfig = require('./webpack.config.js')

module.exports = merge(WebpackConfig, {
    devServer: {
        proxy: {
            '/api': 'http://localhost:3000'
        },
        before: function(app) {
            let roomkey = 1;
            let server = require('http').createServer(app);
            var io = require('socket.io')(server);

            io.on('connection', function(socket){
                io.of('/').adapter.clients(['room' + roomkey], (err, clients) => {
                    if (clients && clients.length > 1) {
                        roomkey++; 
                        socket.join('room' + roomkey, () => {
                            io.to('room' + roomkey).emit('roomuser', socket.id, clients);
                        });
                    } else {
                        socket.join('room' + roomkey, () => {
                            io.to('room' + roomkey).emit('roomuser', socket.id, clients);
                        });
                    }
                });
                
                socket.on('disconnect', function() {
                });

                socket.on('press', function(position) {
                    io.sockets.emit('chesspress', position);
                });
            });

            server.listen(3000, function(){
                console.log('listening on *:3220');
            });
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("development"),
                BUILD_DEV: JSON.stringify("development")
            },
        })
    ]
});