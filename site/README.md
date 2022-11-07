# Modern Font Stacks Website

A simple site showcasing all the different font stacks

#### NPM Packages Used
- [HTML Includes](https://github.com/entozoon/html-includes) - HTML compilation with partial includes and minification
- [Servor](https://github.com/lukejacksonn/servor) - A dependency-free dev server for modern web application development


## NPM Scripts

#### Install
```
npm install
```

#### Develop / Serve / Watch
```
npm run serve
```
Open your page on [localhost:8080](http://localhost:8080/).


#### Build / Deploy
```
npm run build
```


## Notes
- `dist` is destroyed and recreated from `src` on each build/serve
- Image and binary files will only be copied from `src` to `dist` on each build/serve (no Watch support)
- Files in `src` starting with an `_` underscore) will not be copied to `dist`
