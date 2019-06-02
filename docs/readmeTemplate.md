<h1 style="text-align:center">ComicHub</h1>

> 下载漫画，生成 PDF

[![build status](https://img.shields.io/travis/nusr/ComicHub/master.svg?style=flat-square)](https://travis-ci.org/nusr/ComicHub)
[![Test coverage](https://img.shields.io/codecov/c/github/nusr/ComicHub.svg?style=flat-square)](https://codecov.io/github/nusr/ComicHub?branch=master)

## 介绍

ComicHub 是一款漫画下载器。爬取漫画网站的图片，生成 PDF 和 EPUB 文件。

Koa + MySQL + Umi + Electron + React + Typescript 打造 。

## 装包

前端装包

```bash
$ npm install
```

安装 cnpm , 服务端装包要用

```bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

服务端装包

```bash
# 使用 yarn 或 npm  安装 puppeteer 会报错
$ cd server
$ cnpm install
```

### 运行

启动前端页面

```bash
$ npm run start
```

启动服务端

```bash
$ npm run start:server
```

## 功能

1. [x] 下载一集漫画
2. [x] MySQL 存储爬取链接
3. [x] 前端交互页面
4. [x] 生成 PDF 文件
5. [x] 生成 EPUB 文件
6. [ ] 下载整部漫画
7. [ ] 打包成桌面应用

## 支持的漫画网站

更多站点，敬请期待！

{{#siteList}}

1. [{{ name }}]({{ &base }})
   {{/siteList}}

## 新增漫画网站

1. 查看 [/docs/joinUs.md](https://github.com/nusr/ComicHub/blob/master/docs/joinUs.md) 开发说明。
1. 在 [/server/router/index.ts](https://github.com/nusr/ComicHub/blob/master/server/router/index.ts) 里添加路由。
1. 在 [/server/routes/](https://github.com/nusr/ComicHub/tree/master/server/routes) 中新增脚本。

## 参与我们

欢迎提交 [issue](https://github.com/nusr/ComicHub/issues) 以及 Pull Requests 。

为了避免版权纠纷，只抓取免费漫画。

## 支持更多电子书格式

目前只支持 PDF、EPUB。更多格式请使用下列工具转换。

1. GUI 转换工具 [https://calibre-ebook.com/](https://calibre-ebook.com/)
1. 命令行转换工具 [https://pandoc.org/index.html](https://pandoc.org/index.html)

## 类似项目

1. [work_crawler](https://github.com/kanasimi/work_crawler)，看不懂这个仓库的代码

## LICENSE

[MIT](LICENSE)