import { basic, initSidebar, initTopbar } from './modules/layouts';
import {
  imgLazy,
  imgPopup,
  initClipboard,
  initLocaleDatetime,
  toc
} from './modules/plugins';

basic();
initSidebar();
initTopbar();
imgLazy();
imgPopup();
initLocaleDatetime();
initClipboard();
toc();
