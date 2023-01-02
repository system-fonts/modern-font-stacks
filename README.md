<p align="center">
  <a href="https://modernfontstacks.com/">
    <img src="img/modern-font-stacks-logo.svg" width="128" height="128" alt="Modern Font Stacks">
  </a>
</p>

<h1 align="center">Modern Font Stacks</h1>
<h3 align="center">System font stacks for the modern OS, organized by typeface classification</h3>

<p align="center">You may not need Google Fonts or web fonts. No CLS, no jank, no KBs — instant renders.</p>

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

</details>


<br>

## Transitional

Transitional typefaces are a mix between Old Style and Modern typefaces that was developed during The Enlightenment. Times New Roman and Baskerville are common examples of Transitional serifs.

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
- ¹Noto Serif may have all font weights depending on the linux distro.

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
