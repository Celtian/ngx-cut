<p align="center">
  <a href="https://github.com/Celtian/ngx-cut" target="blank"><img src="assets/logo.svg?sanitize=true" alt="" width="120"></a>
  <h1 align="center">NgxCut</h1>
</p>

[![npm version](https://badge.fury.io/js/ngx-cut.svg)](https://badge.fury.io/js/ngx-cut)
[![Build & Publish](https://github.com/celtian/ngx-cut/workflows/Build%20&%20Publish/badge.svg)](https://github.com/celtian/ngx-cut/actions)
[![volkswagen status](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg?v=1)](https://github.com/auchenberg/volkswagen)

> Angular directive for cutting texts with responsive options

> ✓ _Angular 10, Ivy and SSR compatible_

Here's the [demo](http://celtian.github.io/ngx-cut/)

- Lightweight
- No dependencies!
- Directive way
- Highly customizable [options](#options)...
- Responsivity supported
- Predefined breakpoints (Bootrstrap, CDK, FxLayout)

## Install

1. Use yarn (or npm) to install the package

```terminal
yarn add ngx-cut
```

2. Add NgxCutModule into your module `imports`

```typescript
  import { NgxCutModule } from 'ngx-cut';

  @NgModule({
   // ...
   imports: [
     // ...
     NgxCutModule.forRoot({
       size: 1, // directive without [size] uses this value
       breakpoints: { sm: 300, md: 400, lg: 500, xl: 600 }, // custom breakpoints
       responsiveSizes: { // lines be truncated in responsive mode
         xs: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
         sm: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
         md: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
         lg: { xs: 4, sm: 5, md: 6, lg: 7, xl: 8 },
         xl: { xs: 5, sm: 6, md: 7, lg: 8, xl: 9 }
       }
     })
   ]
  })

  // or

  @NgModule({
   // ...
   imports: [
     // ...
     NgxCutModule.forRoot({
       size: 'sm', // directive without [size] uses responsiveSizes.sm
       breakpoints: 'BOOTSTRAP', // predefined breakpoint ('BOOTSTRAP', 'FX_LAYOUT' or 'CDK')
       responsiveSizes: { // lines be truncated in responsive mode
         xs: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
         sm: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
         md: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
         lg: { xs: 4, sm: 5, md: 6, lg: 7, xl: 8 },
         xl: { xs: 5, sm: 6, md: 7, lg: 8, xl: 9 }
       }
     })
   ]
  })

  // or

  @NgModule({
   // ...
   imports: [
     // ...
     NgxCutModule
   ]
  })
```

## Quick start

### Example code

```html
<p ngxCut>some long text</p>
```

### Result

```code
  some long...
```

## Options

### Root options

| Option              | Type             | Default                  | Description                                            |
| ------------------- | ---------------- | ------------------------ | ------------------------------------------------------ |
| **size**            | string or number | 1                        | Number of truncated lines                              |
| **breakpoints**     | object           | DEFAULT_BREAKPOINTS      | Breakpoints used in responsive mode                    |
| **responsiveSizes** | object           | DEFAULT_RESPONSIVE_SIZES | How many lines should be truncated for each breakpoint |

### Directive

| Option                 | Type         | Default                       | Description                                  |
| ---------------------- | ------------ | ----------------------------- | -------------------------------------------- |
| **[size]**             | object       | value taken from root options | Number of truncated lines or responsive mode |
| **[truncateDisabled]** | boolean      | false                         | Whether truncation is active or not          |
| **(truncateChange)**   | () => object | none                          | Event called when truncation is changed.     |

## Dependencies

_None_

## License

Copyright &copy; 2020 [Dominik Hladik](https://github.com/Celtian)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
