import { modeWatcher } from '../components/mode-watcher';
import { sidebarExpand } from '../components/sidebar';
import halo from '../halo';

export function initSidebar() {
  modeWatcher();
  sidebarExpand();
  window.halo = halo;
}
