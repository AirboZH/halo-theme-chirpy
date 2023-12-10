import 'jquery';
import 'bootstrap';
import 'magnific-popup';
import 'tocbot';

import './css/style.scss';

import {basic} from "./js/modules/layouts/basic";
import {initSidebar} from "./js/modules/layouts/sidebar";
import {initTopbar} from "./js/modules/layouts/topbar";
import {categoryCollapse} from "./js/modules/components/category-collapse";
import {imgLazy} from "./js/modules/components/img-lazyload";
import {toc} from "./js/modules/components/toc";
import {initClipboard} from "./js/modules/plugins";
import {activeSidebar} from "./js/patch/sidebar";

basic();
initSidebar();
activeSidebar();
initTopbar();
categoryCollapse();
imgLazy();
// imgPopup();
initClipboard();
toc();
