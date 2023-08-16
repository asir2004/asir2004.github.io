export const data = JSON.parse("{\"key\":\"v-4a3c01f6\",\"path\":\"/Hello/\",\"title\":\"Hello VuePress\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Hello World!\",\"slug\":\"hello-world\",\"link\":\"#hello-world\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"Hello/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
