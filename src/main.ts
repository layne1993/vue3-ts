import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ElButton, ElSelect } from "element-plus";

// 方法一 创建实例变成了链式，直接写下去感觉语义与结构有点模糊，但我们要理解vue的良苦用心，前端趋近于函数化
// createApp(App).use(store).use(router).mount("#app");

// 方法二
const app = createApp(App);
app.component(ElButton.name, ElButton);
app.component(ElSelect.name, ElSelect);
/* or
 * app.use(ElButton)
 * app.use(ElSelect)
 */
app.use(store);
app.use(router);
app.mount("#app");
