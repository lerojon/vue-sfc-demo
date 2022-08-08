<template>
  <div>
    <div class="cont-box">
      <p class="title">vue-cli3项目配置eslint代码规范</p>
      <div class="subhead">
        <p class="subTitle">前言</p>
        <p class="context">
          安装依赖有两种方法:
          <br />1.在cmd中打上把相应的依赖加到devDependencies下，再npm install对应依赖。
          <br />2.在package.json文件加上相应依赖：
        </p>
        <p class="code">
          "eslint-plugin-html": "^6.0.3",
          <br />"@vue/cli-plugin-eslint": "^3.3.0",
          <br />"@vue/eslint-config-standard": "^4.0.0","eslint": "5.0.0",
          <br />"slint-friendly-formatter": "4.0.1",
          <br />"eslint-loader": "2.0.0",
          <br />"eslint-plugin-import": "^2.20.2",
          <br />"eslint-plugin-vue": "4.7.1",
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: [
        {
          title: 'vue-cli3项目配置eslint代码规范',
          subhead: [
            {
              subTitle: '前言',
              context:
                '安装依赖有两种方法:<br>1.在cmd中打上把相应的依赖加到devDependencies下，再npm install对应依赖。<br>2.在package.json文件加上相应依赖：',
              code: '"eslint-plugin-html": "^6.0.3",<br>"@vue/cli-plugin-eslint": "^3.3.0",<br>"@vue/eslint-config-standard": "^4.0.0","eslint": "5.0.0",<br>"slint-friendly-formatter": "4.0.1",<br>"eslint-loader": "2.0.0",<br>"eslint-plugin-import": "^2.20.2",<br>"eslint-plugin-vue": "4.7.1",'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.cont-box {
  .title {
    border-bottom: 1px solid #000;
    padding: 20px;
    font-size: 23px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .subhead {
    .subTitle {
      background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);
      position: relative;
      padding: 10px;
      border-left: 10px solid rgb(51, 51, 51);
      border-radius: 10px;
      color: white;
      font-size: 20px;
      font-weight: 600;
      text-shadow: rgb(102, 102, 102) 1px 1px 1px;
      box-shadow: rgb(102, 102, 102) 1px 1px 2px;
      //   &::before {
      //     content: '';
      //     // position: absolute;
      //     // left: 0;
      //     // top: 0;
      //     display: inline-block;
      //     width: 3px;
      //     height: inherit;
      //     background: skyblue;
      //   }
    }
    .context {
      color: #000;
      font-size: 17px;
    }
    .code {
      background-color: #f5f5f5;
      font-family: Courier New !important;
      font-size: 15px !important;
      border: 1px solid #ccc;
      padding: 5px;
      overflow: auto;
      margin: 5px 0;
      color: #000;
    }
  }
}
</style>