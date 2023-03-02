# movo

QQ Android protocal based on Node.js, modified from [oicq](https://github.com/takayama-lily/oicq), docs is [here](https://movo.viki.moe).

**Changes in this fork**

- fix sent messages count bug.
- fix device params (`subid` and etc.) to improve login success rate.
- support big emotion (lottie emotion or super emotion).
- support thumb up to strangers (no need to add friend any more).
- support send `origin` audio file (may cause bug on pcqq).
- support `brief` param in image, record and video element.
- support `title` & `desc` params to DIY forward msg.
- support DIY **kick reason** when kicking member.
- support `tenpay.com` to cookie domain.
- support `pt4token` as `pt4` attribute of client.
- support `group sign` api & `notice.group.sign` event.
- add cqcode util functions in `segment`.
- update dependencies to newer version (such as `axios`).
- generate type docs automatically via `type-doc`.
- remove **oicq http** (onebot) and some extras dirs.
- extract `protobuf` module to [`ptb`](https://npm.im/ptb) npm package.
- export `axios`, `log4js`, `pngjs` and `ptb` package.
- optimize `TypeScript` compile configs.
- use `pnpm` to manage node modules.

...
