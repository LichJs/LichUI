# lichui

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 布局采用REM+VW 布局
[Github介绍](https://github.com/LichJs/rem-vw-layout) 
[详细介绍](https://www.cnblogs.com/imwtr/p/9648233.html)

### Vue项目页面过渡.

```css

/* 公共样式 */
html,
body,
.app {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #000;
  perspective: 1200px;
}

.app .app-router-view {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
  visibility: visible;
}

/* 过渡效果 */

/* move-left-to-right */
.move-left-to-right-enter-active {
  animation: moveFromLeft 0.6s ease both;
}
.move-left-to-right-leave-active {
  animation: moveToRight 0.6s ease both;
}
@keyframes moveFromLeft {
  from {
    transform: translateX(-100%);
  }
}
@keyframes moveToRight {
  to {
    transform: translateX(100%);
  }
}

/* move-right-to-left */
.move-right-to-left-enter-active {
  animation: moveFromRight 0.6s ease both;
}
.move-right-to-left-leave-active {
  animation: moveToLeft 0.6s ease both;
}
@keyframes moveFromRight {
  from {
    transform: translateX(100%);
  }
}
@keyframes moveToLeft {
  to {
    transform: translateX(-100%);
  }
}
```