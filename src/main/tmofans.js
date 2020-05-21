// == TMOFans ==================================================================================
export default {
  name: 'TuMangaOnline',
  url: /https?:\/\/(www.)?(tmofans|lectortmo|followmanga).com\/viewer\/.+\/(paginated|cascade)/,
  homepage: 'https://lectortmo.com/',
  language: ['Spanish'],
  category: 'manga',
  run() {
    const num = $('#viewer-pages-select:first option').get().length;
    return {
      title: $('title').text().trim(),
      series: $('a[title="Volver"]').attr('href'),
      quant: num,
      prev: '#',
      next: '#',
      listPages: [...Array(num)
        .keys()].map((i) => W.location.href.replace(/\/[0-9]+?$/, `/${i + 1}`)),
      img: '.viewer-img',
      lazyAttr: 'data-src'
    };
  },
};
