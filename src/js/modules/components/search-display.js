/**
 * This script make #search-result-wrapper switch to unloaded or shown automatically.
 */
const $btnSearchTrigger = $('#search-trigger');

export function displaySearch() {
  $btnSearchTrigger.on('click', function () {
    SearchWidget.open();
  });
}
