/**
 * Request an url and return response
 * @param url 
 */
export const requestAPI = async (url: string) => {
    console.log("fetching " + url);
    const opt: RequestInit = { mode: "cors" };
    // fetch URL
    // (async () => {
    try {
      let response = await fetch(url, opt);
      let json = await response.json();
      // console.log(json);
      return json;
    } catch (e) {
      console.log(e)
    }
    // })();
  }

  export const requestText = async (url: string) => {
    console.log("fetching " + url);
    const opt: RequestInit = { mode: "cors" };
    // fetch URL
    // (async () => {
    try {
      let response = await fetch(url, opt);
      let txt = await response.text();
      // console.log(json);
      return txt;
    } catch (e) {
      console.log(e)
    }
    // })();
  }