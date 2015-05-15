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
  allow:
    - /one_file_to_allow.html
    - /2nd_file_to_allow.html
    - /3rd_file_to_allow.html
  sitemap: /sitemap.xml
```

### Settings & their defaults values

| Setting   | Description                                   | Default |
| --------- | --------------------------------------------- | ------- |
| useragent | Set the User-Agent                            | *       |
| disallow  | Disallow files or folders for this User-Agent |         |
| allow     | Allow files or folders for this User-Agent    |         |
| sitemap   | Set the path to your sitemap                  |         |

## License

[MIT License](http://ilee.mit-license.org)