# hexo-generator-robotstxt

A very simple plugin to generate a robots.txt file automatically for [Hexo 3](https://npmjs.org/package/hexo).

## Usage

### Install

```
npm install hexo-generator-robotstxt --save
```

### Enable

Add `hexo-generator-robotstxt` to `plugins` in `_config.yml`.

``` yaml
plugins:
- hexo-generator-robotstxt
```

Add config for `robots.txt` to `_config.yml`.
``` yaml
robotstxt:
  useragent: "*"
  disallow:
  - /one_file_to_disallow.html
  - /2nd_file_to_disallow.html
  - /3rd_file_to_disallow.html
```

## License

[MIT License](http://ilee.mit-license.org)