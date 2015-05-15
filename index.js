hexo.extend.generator.register('robotstxt', function(locals){
	return {
		path: 'robots.txt',
		data: function(){
			var cfg = hexo.config.robotstxt;
			var body = "User-agent: " + (cfg.useragent ? cfg.useragent : '*' )  + "\n";

			if( cfg.disallow ) {
				cfg.disallow.forEach(function(entry) {
					body += "Disallow: " + entry + "\n";
				});
			}

			if( cfg.allow ) {
				cfg.allow.forEach(function(entry) {
					body += "Allow: " + entry + "\n";
				});
			}

			if( cfg.sitemap ) {
				body += "Sitemap: " + cfg.sitemap + "\n";
			}

			return body;
		}
	};
});