# movo

QQ Android protocal based on Node.js, modified from [oicq](https://github.com/takayama-lily/oicq), docs is [here](https://movo.viki.moe).

**Changes in this fork**

- fix sent message count bug.
- fix device params (`subid` and etc.) to improve login success rate.
- update dependencies to newer version (such as `axios`).
- add `brief` params in image, record and video element.
- support big emotion (lottie emotion or super emotion).
- add `title` & `desc` params to DIY forward msg.
- add **kick reason** when kicking member.
- add cqcode util functions support in `segment`.
- add `tenpay.com` to cookie domain.
- add `pt4token` as `pt4` attribute of client.
- add `group sign` api & `notice.group.sign` event.
- generate type docs automatically via `type-doc`.
- support `origin` audio file (may cause bug on pcqq).
- remove **oicq http** (onebot) and some extras dirs.
- extract `protobuf` module to [`ptb`](https://npm.im/ptb) npm package.
- export `axios`, `log4js`, `pngjs` and `ptb` package.
- optimize `TypeScript` compile configs.
- use `pnpm` to manage node modules.

...
