# movo

QQ Android protocal based on Node.js, modified from [oicq](https://github.com/takayama-lily/oicq), docs is [here](https://movo.viki.moe).

**Modifications in this fork**

- fix device params (subid), improve login success rate.
- add `brief` params in image, record, video element.
- add `title` & `desc` params to DIY forward msg.
- add kick reason when kick member.
- add cqcode function support in `segment`.
- add `tenpay.com` to cookie domain. 
- export `axios`, `log4js`, `pngjs` package.
- generate type docs automatically via `type-doc`.
- support `origin` audio file (may cause bug on pcqq).
- fix sent message count.
- remove **oicq http** (onebot) and some extras dirs.
- package protobuf to `ptb` npm package.
- optimize TypeScript compile configs.
- use `pnpm` to manage node modules.

...
