import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons.js';

let didInitalize = false;
export default function globalInit() {
    // only initialize once
    if (didInitalize) return;
    didInitalize = true;

    UIkit.use(Icons);
}
