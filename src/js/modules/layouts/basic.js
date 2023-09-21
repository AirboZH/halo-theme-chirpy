import { back2top } from '../components/back-to-top';
import { loadTooptip } from '../components/tooltip-loader';
import { patch } from '../../patch';

export function basic() {
  back2top();
  loadTooptip();
  patch.codeClass();
}
