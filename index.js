hexo.extend.generator.register('robotstxt', function(locals){
	return {
		path: 'robots.txt',
		data: function(){
			var cfg = hexo.config.robotstxt;
			var body = "User-agent: " + cfg.useragent + "\n";
			cfg.disallow.forEach(function(entry) {
				body += "Disallow: " + entry + "\n";
			});
			return body;
		}
	};
});