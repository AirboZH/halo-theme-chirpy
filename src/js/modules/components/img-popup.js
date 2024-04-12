/**
 * Set up image popup
 *
 * See: https://github.com/dimsemenov/Magnific-Popup
 */
import {preImg} from "../../patch/pre-img";

export function imgPopup() {
  preImg();

  if ($(".popup").length <= 0) {
    return;
  }

  $('.popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    showCloseBtn: false,
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out'
    }
  });
}
