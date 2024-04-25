# rn-micro-frontend-boilerplate
React Native (Super App) boilerplate for Micro Front Ends

## Usage

Clone project with sub modules:
```bash
git clone https://github.com/asadpstu/superapp.git
```

Node version : 18


Install dependencies:

```bash
yarn bootstrap
```

Pod install iOS *(Only for iOS)*

```bash
yarn pod-instal
```


Start development servers separately:

```bash
# todo:: configure with yarn workspace
yarn start:app1
yarn start:app2
yarn start:host
```

Run Host app:

```bash
yarn run:host:ios
yarn run:host:android
```

Run Standalone:
```bash
# App One
yarn run:app1:ios
yarn run:app1:android

# App Two
yarn run:app2:ios
yarn run:app2:android
```

