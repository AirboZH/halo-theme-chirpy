import { back2top } from '../components/back-to-top';
import { loadTooptip } from '../components/tooltip-loader';
import { codeClass } from '../../patch';

export function basic() {
  back2top();
  loadTooptip();
  codeClass();
}
