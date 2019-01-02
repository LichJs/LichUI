<template>
  <div>
    <!-- 此处为固定宽高比的例子 -->
    <header class="header">
      <div class="header-content">375 * 200</div>
    </header>
    <nav>
      <ul>
        <li>
          <span class="icon">60 * 60</span>
          <span>导航入口</span>
        </li>
        <li>
          <span class="icon">60 * 60</span>
          <span>导航入口</span>
        </li>
        <li>
          <span class="icon f-border-radius">圆角</span>
          <span class="f-border">导航入口</span>
        </li>
      </ul>
    </nav>
    <main>
      <h3>填写信息</h3>
      <div class="info-items">
        <p class="info-item">
          <span>姓名</span>
          <input type="text" class="info-item__name" placeholder="请填写姓名">
        </p>
        <p class="info-item info-item__tel">
          <span>手机</span>
          <input type="number" class="info-item__tel" placeholder="请填写手机号">
        </p>
      </div>
      <h3>个人介绍</h3>
      <div class="info-items">
        <p class="info-item f-p-0">
          <textarea class="info-item__intro" placeholder="请填写一段简要的自我介绍"></textarea>
        </p>
      </div>
      <div class="info-confirm">
        <a href="javascript:;" class="info-confirm__btn">确认</a>
      </div>
    </main>
    <footer>375 * 75</footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss" scoped>
@import "@/style/_border.scss";
@import "@/style/_util.scss";

header {
  height: px2rem(400);
  line-height: px2rem(400);
  text-align: center;
  background-color: #f2f2f2;
}

/* 容器宽高比 */
// .header {
//     @include aspect-ratio(
//         // $width: px2rem(600),
//         // $sub: ".header-content",
//         $aspectX: 375,
//         $aspectY: 150
//     )
// }

nav ul {
  display: flex;
  justify-content: space-around;
  padding: 0;

  li {
    display: flex;
    flex-wrap: wrap;
    width: px2rem(200);
    justify-content: center;
  }

  .icon {
    margin-bottom: px2rem(20);
    width: px2rem(120);
    height: px2rem(120);
    line-height: px2rem(120);
    text-align: center;
    background-color: #f2f2f2;
  }
}

main {
  padding: px2rem(20);

  h3 {
    position: relative;
    margin-top: px2rem(50);
    margin-left: px2rem(26);
    font-size: px2rem(30);

    /* 字体也可以选择不使用rem
          @include font-size(30px);
      */

    &:before {
      content: "";
      position: absolute;
      left: px2rem(-20);
      width: px2rem(12);
      height: 100%;
      background-color: #fc8200;
    }
  }
}

.info-items {
  margin-top: px2rem(20);
  margin-bottom: px2rem(20);
}

.info-item {
  margin-top: px2rem(20);
  padding: px2rem(30);
  padding-left: 0;

  /* 多个边框调用 */
  &:not(.info-item__tel) {
    @include border(
      $direction: all,
      $size: 1px,
      $color: #ddd,
      $style: solid,
      $radius: 50px
    );
  }

  &.info-item__tel {
    @include border(
      $direction: bottom,
      $size: 1px,
      $color: #ddd,
      $style: solid
    );
  }

  &:only-of-type {
    @include border($direction: all, $size: 1px, $color: #ddd, $style: solid);
  }

  /* 多个边框的动态更新 */
  &.hover {
    @include border(
      $direction: (
        top,
        right,
        bottom,
        left
      ),
      $size: (
        3px,
        2px,
        1px
      ),
      $color: (
        #0f0,
        #ddd
      ),
      $style: dotted
    );
  }

  display: flex;

  span {
    min-width: px2rem(120);
    text-align: center;

    /* 单个边框调用 */
    @include border($direction: right);

    /* 单个边框的动态更新 */
    &.hover {
      @include border($direction: right, $size: 5px, $color: #0f0);
    }
  }

  input {
    width: 100%;
    border: none;
    font-size: px2rem(28);
    caret-color: #fc8200;
    outline: none;
  }

  textarea {
    padding: px2rem(20);
    width: 100%;
    border: none;
    height: px2rem(250);
    font-size: px2rem(28);
    font-family: "Microsoft YaHei";
    caret-color: #fc8200;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }
}

.info-confirm {
  margin-bottom: px2rem(40);
  text-align: center;

  &__btn {
    display: inline-block;
    margin-top: px2rem(80);
    width: px2rem(200);
    height: px2rem(80);
    line-height: px2rem(80);
    text-align: center;
    background-color: #fc8200;
    text-decoration: none !important;
    color: #fff !important;
  }
}

.f-p-0 {
  padding: 0 !important;
}

.f-border {
  @include border($direction: all, $size: 1px, $color: #ddd, $style: solid);
}

.f-border-bottom {
  @include border($direction: bottom, $size: 1px, $color: #ddd, $style: solid);
}

/* 圆角边框自定义多个角，顺序 */
.f-border-radius {
  @include border(
    $radius: (
      10px,
      20px,
      30px,
      40px
    )
  );
}

footer {
  height: px2rem(150);
  line-height: px2rem(150);
  text-align: center;
  background-color: #f2f2f2;
}
</style>
