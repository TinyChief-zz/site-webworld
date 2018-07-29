module.exports = function (paths) {
    return {
        module: {
            rules: [{
                test: /\.scss$/,
                include: paths,
                use: [
                    'style-loader',
                    'resolve-url-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            localIdentName: '',
                            // modules: true,
                            importLoaders: 1,
                        },
                    },
                    'sass-loader'
                ]
            }]
        }
    };
};