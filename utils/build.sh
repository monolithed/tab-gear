export NODE_ENV=production;

npm run webpack -- \
	--display-reasons\
	--optimize-minimize \
	--progress \
	--profile \
	--display-error-details \
	--config ./tasks/webpack.config.js && \
cat cache/stats.json | node_modules/webpack-bundle-size-analyzer/analyzer;