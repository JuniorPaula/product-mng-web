import { store } from "../store";
import router from "../routes";

export let Security = {
  requireToken: function() {
    if (store.token === "") {
      router.push("/login");
      return false;
    }
  },

  requestOptions: function(payload, method = "GET") {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${store.token}`);

    return {
      method: method,
      headers: headers,
      body: JSON.stringify(payload),
    };
  }
}