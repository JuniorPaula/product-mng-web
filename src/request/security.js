import { store } from "../store";
import { configs } from "../configs";
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

    if (method === "POST") {
      return {
        method: method,
        headers: headers,
        body: JSON.stringify(payload),
      };
    }

    return { method: method, headers: headers };
  },

  checkToken: async  function() {
    if (store.token !== "") {
      const payload = { token: store.token};
      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      let options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
      };

      const response = await fetch(`${configs.API_URL}/verify-token`, options);
      const data = await response.json();
      if (data.error) {
        store.token = "";
        store.user = {};
        store.isLogged = false;

        // delete cookie
        document.cookie = "_site=; path=/; "
        + "SameSite=Srict; Secure; expires=Thu, 01 Jan 1970 00:00:00 GTM;"
        
        return false;
      } else {
        return true;
      }
    }
  }
}