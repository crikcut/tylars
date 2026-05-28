# Markdown Cheat Sheet

Quick reference for writing notes in this notebook.



## Headings

```
# H1 — page title
## H2 — main section
### H3 — subsection
#### H4 — minor heading
```



## Text Formatting

```
**bold**
*italic*
~~strikethrough~~
`inline code`
```

**bold** · *italic* · ~~strikethrough~~ · `inline code`



## Links & Images

```
[link text](url)
[internal link](gcode/quick-reference)
![alt text](image.png)
```



## Lists

```
- unordered
- list item
  - nested item

1. ordered
2. list item
   1. nested item
```



## Blockquotes

```
> This is a blockquote.
> It can span multiple lines.
```

> This is a blockquote.



## Tables

```
| Column A | Column B | Column C |
|----------|----------|----------|
| value    | value    | value    |
| value    | value    | value    |
```

Alignment:
```
| Left     | Center   | Right    |
|:---------|:--------:|--------:|
```



## Code Blocks

Fenced with triple backticks. Add a language name for syntax highlighting:

````
```gcode
G00 X0 Y0 Z5.
G01 X1.5 F20.
```
````

Supported languages include: `gcode`, `bash`, `python`, `javascript`, `css`, `html`, `json`, `yaml`, `sql`



## Horizontal Rule

```
---
```



## Escape Characters

Prefix with `\` to render a literal markdown character:

```
\* \# \` \_ \[ \]
```



## HTML in Markdown

Docsify passes raw HTML through, so you can mix it in freely:

```html
<br>                        — line break
<kbd>Ctrl+S</kbd>           — keyboard key
<sup>superscript</sup>
<sub>subscript</sub>
```



## Custom Highlight Classes

These are CSS classes defined in `style.css`. To use them, wrap the text you want to color in an HTML `<span>` tag with the class name — you can drop this directly into any `.md` file and Docsify will render it:

```
Here is some normal text with a <span class="hi-red">red highlighted word</span> in the middle.
```

The opening tag is `<span class="class-name">`, your text goes in the middle, and `</span>` closes it. You can wrap a single word or a whole phrase.

### Text color

```html
<span class="hi-red">red text</span>
<span class="hi-blue">blue text</span>
<span class="hi-green">green text</span>
<span class="hi-orange">orange text</span>
```

<span class="hi-red">hi-red</span> · <span class="hi-blue">hi-blue</span> · <span class="hi-green">hi-green</span> · <span class="hi-orange">hi-orange</span>

### Background highlight

```html
<span class="bg-red">red bg</span>
<span class="bg-blue">blue bg</span>
<span class="bg-green">green bg</span>
<span class="bg-yellow">yellow bg</span>
```

<span class="bg-red">bg-red</span> · <span class="bg-blue">bg-blue</span> · <span class="bg-green">bg-green</span> · <span class="bg-yellow">bg-yellow</span>

### Semantic CNC classes

```html
<span class="axis">X Y Z</span>       — axis labels
<span class="gcode">G54 M06</span>    — G/M codes
<span class="param">F20. S3500</span> — parameter values
<span class="caution">watch out</span>
```

<span class="axis">X Y Z</span> · <span class="gcode">G54 M06</span> · <span class="param">F20. S3500</span>

<span class="caution">caution block — use for warnings and gotchas</span>



## Docsify Sidebar Control

### Global setting (`index.html`)

`subMaxLevel` controls how many heading levels auto-expand in the sidebar for the active page:

```js
window.$docsify = {
  subMaxLevel: 0,  // no expansion — sidebar only shows _sidebar.md links
  subMaxLevel: 1,  // show H1s
  subMaxLevel: 2,  // show H1s and H2s (current setting)
};
```

### Per-page — suppress all headings for one page

Place after the H1:

```markdown
# Page Title <!-- {docsify-ignore-all} -->
```

### Per-heading — suppress a single heading

```markdown
## This heading won't appear in the sidebar <!-- {docsify-ignore} -->
```



## Tags / Search

Any `#word` written anywhere in a markdown file is indexed by the search plugin. Type it into the search box to filter:

```
#gcode #cnc #offsets #reference
```

Tags are just plain text — no special syntax required beyond the `#` prefix.



## Adding a New Page

1. Create a `.md` file anywhere in the Notebook folder
2. Add a link to `_sidebar.md` when you want it in the nav:

```markdown
* **Section Name**
  * [Page Title](folder/filename)
```
