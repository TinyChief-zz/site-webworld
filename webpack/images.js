module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(woff2?|ttf|otf|eot|svg|png|jpg|jpeg)$/,
                    exclude: /node_modules/,
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                },
            ],
        },
    };
};