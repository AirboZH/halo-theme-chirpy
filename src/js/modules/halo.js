export default {
  flipMode: () => {
    if (document.querySelector('#comment div div')) {
      let commentDOMclass = document
        .querySelector('#comment div div')
        .shadowRoot.querySelector('.halo-comment-widget').classList;
      if (commentDOMclass.contains('light'))
        commentDOMclass.replace('light', 'dark');
      else commentDOMclass.replace('dark', 'light');
    }
  }
};
