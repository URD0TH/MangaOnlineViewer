// ==UserScript==
// @name Manga OnlineViewer
// @author Tago
// @updateURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.meta.js
// @downloadURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.user.js
// @namespace https://github.com/TagoDR
// @description Shows all pages at once in online view for these sites: ComiCastle, DisasterScans, FoOlSlide, Funmanga, JaiminisBox, KissManga, Leitor, LHTranslation, MangaDex, MangaDoom, MangaFox, MangaHere, MangaInn, MangaKakalot,MangaNelo, MangaLyght, MangaPark, MangaReader,MangaPanda, MangaSee, MangaTown, ReadComicsOnline, ReadManga Today, SenManga(Raw), Batoto
// @version 16.22.0
// @license MIT
// @date 2020-05-14
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_listValues
// @grant GM_deleteValue
// @grant GM_xmlhttpRequest
// @connect *
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jszip/3.2.2/jszip.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require https://cdn.jsdelivr.net/npm/sweetalert2@8.18.0/dist/sweetalert2.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jscolor/2.0.4/jscolor.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.1/color-scheme.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/ramda/0.26.1/ramda.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/unveil2/2.0.8/jquery.unveil2.min.js
// @include /https?:\/\/(www.)?comicastle.org\/comic\/.+\/[0-9]+.*/
// @include /https?:\/\/(www.)?disasterscans.com\/manga\/.+\/chapter-.+/
// @include /^(?!.*jaiminisbox).*\/read\/.+/
// @include /https?:\/\/(www.)?funmanga.com\/.+\/[0-9]+/
// @include /https?:\/\/(www.)?jaiminisbox.com\/reader\/read\/.+/
// @include /https?:\/\/(www.)?kissmanga.com\/Manga\/.+\/.+?id=[0-9]+/
// @include /https?:\/\/(www.)?leitor.net\/manga\/.+\/.+\/.+/
// @include /https?:\/\/(www.)?lhtranslation.net\/read.+/
// @include /https?:\/\/(www.)?mangadex.org\/chapter\/.+(\/.+)?/
// @include /https?:\/\/(www.)?mngdoom.com\/.+\/[0-9]+/
// @include /https?:\/\/(www.)?fanfox.net\/manga\/.+\/.+\//
// @include /https?:\/\/(www.)?mangahere.cc\/manga\/.+\/.+/
// @include /https?:\/\/(www.)?mangainn.net\/.+\/[0-9]+(\/[0-9]*)?/
// @include /https?:\/\/(www.)?(manganelo|mangakakalot).com\/chapter\/.+\/.+/
// @include /https?:\/\/manga.lyght.net\/series\/.+\.html/
// @include /https?:\/\/(www.)?mangapark.(com|me|org|net)\/(manga|chapter)\/.+\/.+/
// @include /https?:\/\/(www.)?(mangareader|mangapanda)(.net|.com)\/.+\/.+/
// @include /https?:\/\/(www.)?mangaseeonline.us\/read-online\/.+/
// @include /https?:\/\/(www.)?mangatown.com\/manga\/.+\/.+/
// @include /https?:\/\/(www.)?readcomicsonline.ru\/comic\/.*\/[0-9]*/
// @include /https?:\/\/(www.)?readmng.com\/.+\/[0-9.]+(\/[0-9]*)?/
// @include /https?:\/\/raw.senmanga.com\/.+\/.+\/?/
// @include /https?:\/\/(www.)?bato.to\/chapter.*/
// @exclude /https?:\/\/(www.)?tsumino.com\/.+/
// @exclude /https?:\/\/(www.)?pururin.io\/.+/
// @exclude /https?:\/\/(www.)?hentainexus.com\/.+/
// @exclude /https?:\/\/hentai.cafe\/.+/
// @exclude /https?:\/\/(www.)?(tmofans|lectortmo|followmanga).com\/.+\/.+\/(paginated|cascade)/
// ==/UserScript==
