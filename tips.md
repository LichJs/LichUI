# 使用的一些vscode插件备注及一些开发规范备注.

## use commitlint 
> 使用commitlint校验git提交信息规范.

`yarn add @commitlint/{cli,config-conventional} -D`

`yarn add husky -D`

## git commit 
### 规范
```
type(scope?): subject
<BLANK LINE>
body?
<BLANK LINE>
footer?
```

`git commit` 说明: 如果git commit中含有body或者footer, 需使用空白行进行隔断.

```
[type]      (必须)  用于说明`commit`的类别 
[scope]     (可选)  于说明`commit`影响的范围
[subject]   (必须)  标题(必须)
[body]      (可选)  详细描述信息, 可分成多行
[footer]    (可选)  只能是不兼容的部分【BREAKING CHANGE】及关闭问题单【Closes】这两种情况.
```

`git commit` 示例:
```
fix(component): 修复Alert组件样式,

因xx属性在xx浏览器中存在兼容性问题,
所以将组件属性 "xxa" 修改为 "xxb".

Closes #198, #199
```

### type 可选范围及说明
```
[ 'build', 'ci', 'chore', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test' ]
(build)     影响构建系统或外部依赖关系的更改 (示例范围：gulp、broccoli、npm)
(ci)        对CI配置文件的更改,
(chore)     构建过程或辅助工具的改动.
(docs)      文档
(feat)      新功能
(fix)       修改bug
(perf)      提高性能的更改
(refactor)  重构 (即不是新增功能，也不是修改bug的代码变动)
(revert)    回滚代码, (当前的commit用于撤销之前的commit)
(style)     不影响代码的更改. (空格, 格式, 缺失分号等.)
(test)      测试
```

### 详情参考 
> 可参考Angular [git commit规范](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)


## vetur
> vue vscode 插件, 提供vue语法高亮等等,

## better comments 
> 较好的注释提示 高亮
<div align="left">
    <img src="https://github.com/aaron-bond/better-comments/raw/master/images/better-comments.PNG" height=400 width="auto"/>
</div>

## tslint
> ts语法校验, 及自动格式化.
```json
{
  "defaultSeverity": "warning",
  "extends": [
    "tslint:recommended"
  ],
  "linterOptions": {
    "exclude": [
      "node_modules/**"
    ]
  },
  "rules": {
    "quotemark": [true, "single"],
    "indent": [true, "spaces", 2],
    "interface-name": false,
    "ordered-imports": false,
    "object-literal-sort-keys": false,
    "no-consecutive-blank-lines": false
  }
}
```
