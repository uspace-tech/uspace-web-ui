# USPACE WEB UI

此專案的 UI 旨在減少重工，建立統一且可維護的 UI 元件。

## Prerequisites

```
npm i @chakra-ui/react @emotion/react react-icons
```

## install

```
npm i @uspace-tech/web-ui
```

## Publish

```
npm run build

commit 所有內容

npm run release
```

## Usage

務必先引入 <Provider> 元件，並將 <Provider> 元件包在所有元件的外層。

```
import { Provider } from "@uspace-tech/web-ui"

<Provider>
  <App />
</Provider>
```

???
