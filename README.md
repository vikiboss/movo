# movo

QQ Android protocal based on Node.js, modified from [oicq](https://github.com/takayama-lily/oicq), docs is [here](https://movo.viki.moe).

**Modifications in this fork**

- fix device params (subid), improve login success rate.
- generate type docs automatically via `type-doc`.
- support origin audio file (may cause bug on pcqq).
- fix sent message count.
- remove **oicq http** (onebot) and some extras dirs.
- package protobuf to `ptb` npm package.
- optimize TypeScript compile configs.
- use `pnpm` to manage node modules.

...
