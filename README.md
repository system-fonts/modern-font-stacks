<p align="center">
  <a href="https://modernfontstacks.com/">
    <img src="img/modern-font-stacks-logo.svg" width="128" height="128" alt="Modern Font Stacks">
  </a>
</p>

<h1 align="center">Modern Font Stacks</h1>
<h3 align="center">System font stacks for the modern OS, organized by typeface classification</h3>

<p align="center">You may not need Google Fonts or web fonts. No CLS, no jank, no KBs — instant renders.</p>

<p align="center">
  <a href="#system-ui">System UI</a> &nbsp;&middot;&nbsp; 
  <a href="#transitional">Transitional</a> &nbsp;&middot;&nbsp; 
  <a href="#old-style">Old Style</a> &nbsp;&middot;&nbsp; 
  <a href="#humanist">Humanist</a> &nbsp;&middot;&nbsp; 
  <a href="#geometric-humanist">Geometric Humanist</a>
</p>

<br>

## System UI

System UI fonts are those native to the operating system interface. They are highly legible and easy to read at small sizes, contains many font weights, and is ideal for UI elements.

#### CSS Font Stack
```css
font-family: system-ui, sans-serif;
```

<img src="img/system-ui.png" alt="System UI Font Stack"> 

<details>
<summary><strong>🎥 Preview Rendering</strong></summary>
<img src="img/system-ui-preview.gif" alt="System UI Font Rendering">
</details>

<details>
<summary><strong>✅ Font Weights & Notes</strong></summary>

<br>

| Font Weights          | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|:----------------------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| San Francisco         |  ●  |  ●  |  ●  |  ●  |  ●  |  ●  |  ●  |  ●  |  ●  |
| Segoe UI              |  ●  |  ●  |  ●  |  ●  |  ●  |  ●  |  ●  |  ●  |  ●  |
| Roboto                |  ●  |  ●  |  ●  |  ●  |  ●  |  ●  |  ●  |  ●  |  ●  |
| Ubuntu                |  ●  |     |  ●  |  ●  |  ●  |     |  ●  |     |     |
| Cantarell             |  ●  |     |  ●  |  ●  |     |     |  ●  |  ●  |     |
| Noto Sans             |  ●  |  ●  |  ●  |  ●  |  ●  |  ●  |  ●  |  ●  |  ●  |

#### Notes
- System UI is less of a font stack and more of a CSS value, `system-ui`, representing the default user interface font.
- The fonts shown are the default fonts for UI in each modern OS.

</details>


<br>

## Transitional

Transitional typefaces are a mix between Old Style and Modern typefaces that was developed during The Enlightenment. One of the most famous examples of a Transitional typeface is Times New Roman, which was developed for the Times of London newspaper. 

#### CSS Font Stack
```css
font-family: Charter, 'Bitstream Charter', 'Sitka Text', Cambria, serif;
```

<img src="img/transitional.png" alt="Transitional Font Stack"> 

<details>
<summary><strong>🎥 Preview Rendering</strong></summary>
<img src="img/transitional-preview.gif" alt="Transitional Font Rendering">
</details>

<details>
<summary><strong>✅ Font Weights & Notes</strong></summary>

<br>

| Font Weights          | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|:----------------------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Charter               |     |     |     |  ●  |     |     |  ●  |     |  ●  |
| Bitstream Charter     |     |     |     |  ●  |     |     |  ●  |     |     |
| Sitka Text            |     |     |     |  ●  |     |     |  ●  |     |     |
| Cambria               |     |     |     |  ●  |     |     |  ●  |     |     |
| Noto Serif¹           |     |     |     |  ●  |     |     |  ●  |     |     |


#### Notes
- Android uses Noto Serif as its default `serif` font, so no need to specify in the stack.

</details>

<br>

## Old Style

Old Style typefaces are characterized by diagonal stress, low contrast between thick and thin strokes, and rounded serifs, and were developed in the Renaissance period. One of the most famous examples of an Old Style typeface is Garamond.

#### CSS Font Stack
```css
font-family: 'Iowan Old Style', 'Palatino Linotype', 'URW Palladio L', P052, serif;
```

<img src="img/old-style.png" alt="Old Style Font Stack"> 

<details>
<summary><strong>🎥 Preview Rendering</strong></summary>
<img src="img/old-style-preview.gif" alt="Old Style Font Rendering">
</details>

<details>
<summary><strong>✅ Font Weights & Notes</strong></summary>

<br>

| Font Weights          | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|:----------------------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Iowan Old Style       |     |     |     |  ●  |     |     |  ●  |     |  ●  |
| Palatino Linotype     |     |     |     |  ●  |     |     |  ●  |     |     |
| URW Palladio L        |     |     |     |  ●  |     |     |  ●  |     |     |
| P052                  |     |     |     |  ●  |     |     |  ●  |     |     |
| Noto Serif            |     |     |     |  ●  |     |     |  ●  |     |     |


#### Notes
- Android uses Noto Serif as its default `serif` font, so no need to specify in the stack.

</details>

<br>

## Humanist

Humanist typefaces are characterized by their organic, calligraphic forms and low contrast between thick and thin strokes. These typefaces are inspired by the handwriting of the Renaissance period and are often considered to be more legible and easier to read than other sans-serif typefaces.

#### CSS Font Stack
```css
font-family: Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans', source-sans-pro, sans-serif;
```

<img src="img/humanist.png" alt="Humanist Font Stack"> 

<details>
<summary><strong>🎥 Preview Rendering</strong></summary>
<img src="img/humanist-preview.gif" alt="Humanist Font Rendering">
</details>

<details>
<summary><strong>✅ Font Weights & Notes</strong></summary>

<br>

| Font Weights          | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|:----------------------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Seravek               |     |  ●  |  ●  |  ●  |  ●  |     |  ●  |     |     |
| Gill Sans Nova        |     |     |  ●  |  ●  |     |     |  ●  |  ●  |     |
| Ubuntu                |  ●  |     |  ●  |  ●  |  ●  |     |  ●  |     |     |
| Calibri               |     |     |  ●  |  ●  |     |     |  ●  |     |     |
| DejaVu Sans           |     |  ●  |     |  ●  |     |     |  ●  |     |     |
| Source Sans Pro       |     |     |     |  ●  |     |  ●  |  ●  |     |     |

#### Notes
- [Gill Sans Nova](https://apps.microsoft.com/store/detail/gill-sans-nova/9PK93BG0Z1JJ) is available as a supplemental downloadable font.
- Source Sans Pro uses name [source-sans-pro](https://android.googlesource.com/platform/frameworks/base/+/master/data/fonts/fonts.xml#263) under Android, so this font only targets Android devices.

</details>

<br>

## Geometric Humanist

Geometric Humanist typefaces are characterized by their clean, geometric forms and uniform stroke widths. These typefaces are often considered to be modern and sleek in appearance, and are often used for headlines and other display purposes. Futura is a famous example of this classification.


#### CSS Font Stack
```css
font-family: Avenir, 'Avenir Next LT Pro', Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif;
```

<img src="img/geometric-humanist.png" alt="Geometric Humanist Font Stack"> 

<details>
<summary><strong>🎥 Preview Rendering</strong></summary>
<img src="img/geometric-humanist-preview.gif" alt="Geometric Humanist Font Rendering">
</details>

<details>
<summary><strong>✅ Font Weights & Notes</strong></summary>

<br>

| Font Weights          | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|:----------------------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Avenir                |     |     |  ●  |  ●  |  ●  |     |     |  ●  |  ●  |
| Avenir Next LT Pro    |     |     |  ●  |  ●  |     |     |  ●  |     |     |
| Montserrat            |  ●  |  ●  |  ●  |  ●  |  ●  |  ●  |  ●  |  ●  |  ●  |
| Corbel                |     |     |  ●  |  ●  |     |     |  ●  |     |     |
| URW Gothic            |     |     |  ●  |     |     |  ●  |     |     |     |
| Source Sans Pro       |     |     |     |  ●  |     |  ●  |  ●  |     |     |

#### Notes
- Avenir was chosen over Avenir Next for macOS because the weight 300 is much more legible on the web over the 200 weight that Avenir Next has.
- [Avenir Next LT Pro](https://learn.microsoft.com/en-us/typography/font-list/avenirnextltpro) is supplied with Microsoft Office products.
- Source Sans Pro uses name [source-sans-pro](https://android.googlesource.com/platform/frameworks/base/+/master/data/fonts/fonts.xml#263) under Android, so this font only targets Android devices.


</details>

<br>

## Additional Features

#### Emoji Support

Looking to add native emojis to your page? Append these fonts at the end of your font stack:

```css
'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
```

#### Anti-Aliasing

Render your text with anti-aliasing by using these CSS properties:

```css
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

<br>

## Operating System Support
- Windows 7 or newer
- Android 10 or newer
- iOS 9.3 or newer
- macOS 10.9 (Mavericks) or newer
- Linux
