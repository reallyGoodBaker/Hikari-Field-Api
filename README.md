# Hikari-Field-Api

 JS api for Hikari Field



## 快速上手

```cmd
npm i hikari-field-api
```

然后在你需要的地方引入，如

```js
const {version} = require('hikari-field-api')

(async() => {
    const ver = await version()
    console.log(ver)
}()
```

所有 api 返回值均为  `Promise` ， 使用  ` async - await `  处理将会事半功倍
