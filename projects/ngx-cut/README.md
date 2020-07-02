# NgxCut

[![npm version](https://badge.fury.io/js/ngx-cut.svg)](https://badge.fury.io/js/ngx-cut)
[![Build & Publish](https://github.com/celtian/ngx-cut/workflows/Build%20&%20Publish/badge.svg)](https://github.com/celtian/ngx-cut/actions)
[![volkswagen status](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg?v=1)](https://github.com/auchenberg/volkswagen)

> Angular directives for cutting texts

> ✓ _Angular 10, Ivy and SSR compatible_

Here's the [demo](http://celtian.github.io/ngx-cut/)

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
       lines: 4 // overwrite default value of truncated lines
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

## Usage

### Example code (singleline truncate)

```html
<p ngxCutTruncateText>some long text</p>
```

### Result

```code
  some long...
```

### Example code (multiline truncate)

```html
<p ngxCutTruncateParagraph [lines]="2">
  some very long text on two lines
</p>
```

### Result

```code
  some very long
  text on two...
```

### Example code (returning if truncate was applied - short text)

```html
<p ngxCutTruncateParagraph [lines]="2" (truncated)="onTruncated($event)">
  short text
</p>
```

### Result

```code
  short text
```

### Example code (returning if truncate was applied - long text)

```html
<p ngxCutTruncateParagraph [lines]="2" (truncated)="onTruncated($event)">
  some very long text on two lines
</p>
```

### Result

```code
  some very long
  text on two...
```

### Example code (input as html)

```html
<p
  ngxCutTruncateParagraph
  [lines]="2"
  [innerHTML]="'some very long text on two lines'"
  (truncated)="onTruncated($event)"
></p>
```

### Result

```code
  some very long
  text on two...
```

### Example code (lines is not needed, default value will be applied)

```html
<p ngxCutTruncateParagraph [innerHTML]="textLong"></p>
```

### Result

```code
  some very long
  text on two...
```

### Example code (you can disable truncate)

```html
<p ngxCutTruncateParagraph [innerHTML]="textLong" [truncateDisabled]="true"></p>
```

### Result

```code
  some very long
  text on two lines
```

## Options

### Root options

| Option    | Type   | Default | Description               |
| --------- | ------ | ------- | ------------------------- |
| **lines** | number | 2       | Number of truncated lines |

### Directive ngxCutTruncateParagraph (paragraph truncate)

| Option                 | Type          | Default                            | Description                                               |
| ---------------------- | ------------- | ---------------------------------- | --------------------------------------------------------- |
| **[lines]**            | number        | 2 or value taken from root options | Number of truncated lines                                 |
| **[truncateDisabled]** | boolean       | false                              | Whether truncation is active or not                       |
| **(truncated)**        | () => boolean | none                               | Action called when truncation is activated or deactivated |

### Directive ngxCutTruncateText (single line truncate)

_None_

## Dependencies

_None_

## License

Copyright &copy; 2020 [Dominik Hladik](https://github.com/Celtian)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
