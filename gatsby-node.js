exports.onCreateWebpackConfig = ({
  stage,
  loaders,
  actions,
}) => {
  if (stage.startsWith('develop')) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
      module: {
        rules: [
          {
            test: /pdfjs-dist/,
            use: loaders.null(),
          },
        ],
      },
    });
  }

  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /pdfjs-dist/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
