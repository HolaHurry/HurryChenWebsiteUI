import { proxy } from "ajax-hook";

export default proxy({
  onRequest: (config, handler) => {
    if (config.url.indexOf("HPImageArchive") > -1) {
      // config.headers.set(
      //   "Access-Control-Allow-Headers",
      //   "Access-Control-Allow-Origin"
      // );
      // handler.setRequestHeader("Access-Control-Allow-Origin", "*");
      console.log(handler);
      handler.next();
    }
  },
});
