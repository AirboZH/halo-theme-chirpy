import {codeClass, codeBlock} from './codeClass';
import {addClassToTable} from "./table";
import {activeSidebar} from "./sidebar";

export const patch = {
  codeClass: codeClass,
  codeBlock: codeBlock,
  addTableClass: addClassToTable,
  activeSidebar: activeSidebar
};
