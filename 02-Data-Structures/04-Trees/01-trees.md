# Data Strucutres: Trees

---

## Tree

<https://en.wikipedia.org/wiki/Tree_%28data_structure%29>

A data structure that consists of nodes in a parent/child relationship. Nodes  cannot point to siblings like a graph can.

A tree must have a **root node** for it to be considered authentic.

**root**: highest singular node of the tree
**parent**: the converse notion of a child.
**child**: a node directly conneceted to another node when moving away from the root.
**siblings**: nodes who have the same parent.
**leaf**: a node with no children.
**edge**: the connection between one node and another.

Trees are **nonlinear** while linked lists are **linear**.

</br>

```js
/*

key:
◼︎ = node
                                       ◼︎  --> root
                             edge <-- /|\
                                     ◼︎ ◼︎ ◼︎  --> parent
                                    /| | |\
                                   ◼︎ ◼︎ ◼︎ ◼︎ ◼︎  --> child
                                  /|  /|\  |\
                                 ◼︎ ◼︎ ◼︎ ◼︎ ◼︎ ◼︎ ◼︎
*/
```

---

## Tree: Use Cases

Most common example of a tree is **HTML DOM**.

HTML lends itself to a tree-like structure. There are elements and inside of elements you have nested elements that are referred to as children ( parent/child relationship among elements ).

Network Routing is another example of using a tree-like data structure.

Trees are used in Artificial Intelligence and Machine Learning often such as a **Minimax Tree** that would be used in creating something like a Tic-Tac-Toe game.

### HTML DOM

```html
document
<!-- 

HTMLDocument
        URL: "about:blank"
        activeElement: <body>
        alinkColor: ""
        all: HTMLAllCollection { 0: html, 1: head, length: 3, … }
        anchors: HTMLCollection { length: 0 }
        applets: HTMLCollection { length: 0 }
        baseURI: "about:blank"
        bgColor: ""
        body: <body>
        characterSet: "UTF-8"
        charset: "UTF-8"
        childElementCount: 1
        childNodes: NodeList [ html ]
        children: HTMLCollection { 0: html, length: 1 }
        compatMode: "BackCompat"
        contentType: "text/html"
        cookie: ""
        currentScript: null
        defaultView: Window about:blank
        designMode: "off"
        dir: ""
        doctype: null
        documentElement: <html>
        documentURI: "about:blank"
        domain: ""
        embeds: HTMLCollection { length: 0 }
        fgColor: ""
        firstChild: <html>​
        firstElementChild: <html>​
        fonts: FontFaceSet { size: 0, onloading: null, status: "loaded", … }
        forms: HTMLCollection { length: 0 }
        fullscreen: false
        fullscreenElement: null
        fullscreenEnabled: true
        head: <head>
        hidden: false
        images: HTMLCollection { length: 0 }
        implementation: DOMImplementation {  }
        inputEncoding: "UTF-8"
        isConnected: true
        lastChild: <html>​
        lastElementChild: <html>
        lastModified: "08/02/2020 20:02:58"
        lastStyleSheetSet: null
        linkColor: ""
        links: HTMLCollection { length: 0 }
        location: Location about:blank
        mozFullScreen: false
        mozFullScreenElement: null
        mozFullScreenEnabled: true
        nextSibling: null
        nodeName: "#document"
        nodeType: 9
        nodeValue: null
        onabort: null
        onafterscriptexecute: null
        onanimationcancel: null
        onanimationend: null
        onanimationiteration: null
        onanimationstart: null
        onauxclick: null
        onbeforescriptexecute: null
        onblur: null
        oncanplay: null
        oncanplaythrough: null
        onchange: null
        onclick: null
        onclose: null
        oncontextmenu: null
        oncopy: null
        oncuechange: nul​
        oncut: null
        ondblclick: null
        ondrag: nul​
        ondragend: nul​
        ondragenter: nul​
        ondragexit: nul​
        ondragleave: null
        ondragover: null
        ondragstart: null
        ondrop: null
        ondurationchange: null
        onemptied: null
        onended: null
        onerror: null
        onfocus: null
        onformdata: null
        onfullscreenchange: null
        onfullscreenerror: null
        ongotpointercapture: null
        oninput: null
        oninvalid: null
        onkeydown: null
        onkeypress: null
        onkeyup: null
        onload: null
        onloadeddata: null
        onloadedmetadata: null
        onloadend: null
        onloadstart: null
        onlostpointercapture: null
        onmousedown: null
        onmouseenter: null
        onmouseleave: null
        onmousemove: null
        onmouseout: null
        onmouseover: null
        onmouseup: null
        onmozfullscreenchange: null
        onmozfullscreenerror: null
        onpaste: null
        onpause: null
        onplay: null
        onplaying: null
        onpointercancel: null
        onpointerdown: null
        onpointerenter: null
        onpointerleave: null
        onpointerlockchange: null
        onpointerlockerror: null
        onpointermove: null
        onpointerout: null
        onpointerover: null
        onpointerup: nul​
        onprogress: null
        onratechange: null
        onreadystatechange: null
        onreset: null
        onresize: null
        onscroll: null
        onseeked: null
        onseeking: null
        onselect: null
        onselectionchange: null
        onselectstart: null
        onshow: null
        onstalled: null
        onsubmit: null
        onsuspend: null
        ontimeupdate: null
        ontoggle: null
        ontransitioncancel: null
        ontransitionend: null
        ontransitionrun: null
        ontransitionstart: null
        onvisibilitychange: null
        onvolumechange: null
        onwaiting: null
        onwebkitanimationend: null
        onwebkitanimationiteration: null
        onwebkitanimationstart: null
        onwebkittransitionend: null
        onwheel: null
        ownerDocument: null
        parentElement: null
        parentNode: null
        plugins: HTMLCollection { length: 0 }
        pointerLockElement: null
        preferredStyleSheetSet: ""
        previousSibling: null
        readyState: "complete"
        referrer: ""
        rootElement: null
        scripts: HTMLCollection { length: 0 }
        scrollingElement: <body>
        selectedStyleSheetSet: ""
        styleSheetSets: DOMStringList []
        styleSheets: StyleSheetList []
        textContent: null
        timeline: DocumentTimeline { currentTime: 9341.58 }
        title: ""
        visibilityState: "visible"
        vlinkColor: ""
        <get location()>: function location()
        <set location()>: function location()
        <prototype>: HTMLDocumentPrototype { … } 
-->

document.body
<!-- 

<body>...</body>

-->

document.body.children
<!-- 

HTMLCollection
        length: 0
        <prototype>: HTMLCollectionPrototype
        constructor: function ()
        item: function item()
        length: 
        namedItem: function namedItem()
        Symbol(Symbol.iterator): function values()
        Symbol(Symbol.toStringTag): "HTMLCollection"
        <get length()>: function length()
        <prototype>: Object { … }
-->

```

---

## Abstract Syntax Trees ( AST )

<https://en.wikipedia.org/wiki/Abstract_syntax_tree>

A tree representation of the abstract syntactic structure of source code written in a programming language. Each node of the tree denotes a construct occurring in the source code.

Think of a diagram that illustrates the process of a while loop.

---

## Tree: Resources

**Tutorials Point**: Trees
<https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm>

**EDUCBA**: Trees
<https://www.educba.com/types-of-trees-in-data-structure/>

**Wikipedia**: Routing
<https://en.wikipedia.org/wiki/Routing>

**Wikipedia**: Minimax
<https://en.wikipedia.org/wiki/Minimax>
