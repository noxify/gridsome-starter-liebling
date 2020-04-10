---
title: Styles
tags: tag1, tag2
category: Design
excerpt: Anxius nec ibimus utque illa circa video est fuit labores alas. Vincere ferociaarva.
created: 2019-12-24
image: ./images/steven-wong-LcemoNqHIxY-unsplash.jpg
image_caption: Photo by Steven Wong on Unsplash
author: author3
---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

## Normal Text

Lorem markdownum artesque tu quidem lanigeris! Amari aliquis Ismarios,
hospitiique nullum ab enim Pagasaea probabant armis iniuria inponi. Primus
Aonius graves at inductas nec motu, qui pinetis. Anxius nec ibimus utque illa
circa video est fuit labores alas. Huic per quantum undis, Themis et quamvis
gramine missisque leonibus.

## Blockquotes

> Meo locum plurimus laudatos exstantibus fistula nocte Ancaeo denique montanum.
> Dissipat nullique tenax; aut una lacessit purpureus sumptis inlaesos,
> Polypemonis quisque blanditus. Obscenas rumpitque numerum effluxere,
> pronusque: Mygdonidesque precantia erat potes undis. Resurgere conplet velut
> freta miram enim, maiorque nec nec inaniter mensura et ipse artus flebam
> gentisque solus.

## Ordered List

1. Quotiens urbis Charaxi referre
2. Terris acti iussit extrema
3. Vel totis Iove locum forma
4. Esse neve illi crimen ripis et crimina

## Unordered List

- Quotiens urbis Charaxi referre
  - freta miram enim
  - freta miram enim
    - maiorque nec nec
    - maiorque nec nec
    - maiorque nec nec
- Terris acti iussit extrema
- Vel totis Iove locum forma
- Esse neve illi crimen ripis et crimina

## Table

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

## Codeblock

Here a sample text which contains `<?php echo 'inline code'; ?>` and also code blocks.

```js
function visitor(node) {

  try {
    const alignment = node.align;

    visit(node, 'tableRow', (rowNode) => {
      rowNode.children.forEach(function (cellNode, index) {
        cellNode.align = alignment[index]
      });
    });

    node.align = node.align.map(function(value) {
      return null;
    });
    
  } catch (e) {
  }
}
```

## Images

![Photo by Ingmar Hoogerhoud on Unsplash](./images/ingmar-hoogerhoud-lm91dJNPRS4-unsplash.jpg)