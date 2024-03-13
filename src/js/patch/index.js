import {codeClass, codeBlock} from './codeClass';
import {addClassToTable} from "./table";
import {activeSidebar} from "./sidebar";
import {preImg} from "./pre-img";

export const patch = {
  codeClass: codeClass,
  codeBlock: codeBlock,
  addTableClass: addClassToTable,
  activeSidebar: activeSidebar,
  preImg: preImg,
};
