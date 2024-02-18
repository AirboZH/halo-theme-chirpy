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
// 因为 patch/index 中有内容且没有引用, 所有没有在 index 中引入
import { patch } from "./js/patch/";

basic();
initSidebar();
initTopbar();
patch.codeClass();
patch.codeBlock();
patch.addTableClass();
patch.activeSidebar();
categoryCollapse();
imgLazy();
// imgPopup();
initClipboard();
toc();
