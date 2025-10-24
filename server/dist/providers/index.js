import { ShotstackAdapter } from './shotstack.js';
import { CreatomateAdapter } from './creatomate.js';
import { PlainlyAdapter } from './plainly.js';
import { TavusAdapter } from './tavus.js';
import { PromptClipAdapter } from './promptclip.js';
import { LucyEditAdapter } from './lucyedit.js';
import { LTXVideoAdapter } from './ltxvideo.js';
import { Wan21Adapter } from './wan21.js';
const registry = {
    shotstack: new ShotstackAdapter(),
    creatomate: new CreatomateAdapter(),
    plainly: new PlainlyAdapter(),
    tavus: new TavusAdapter(),
    promptclip: new PromptClipAdapter(),
    lucyedit: new LucyEditAdapter(),
    ltxvideo: new LTXVideoAdapter(),
    wan21: new Wan21Adapter(),
};
export function getAdapter(provider) {
    return registry[provider];
}
//# sourceMappingURL=index.js.map