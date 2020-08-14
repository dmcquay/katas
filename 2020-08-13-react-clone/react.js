let React;

(() => {
    let doc = typeof document === 'undefined' ? undefined : document

    function setDocument(_doc) {
        doc = _doc
    }

    function createElement(name, props, children) {
        return {name, props, children}
    }

    function renderToDOM(vNode, domNode) {
        if (typeof vNode === 'string') {
            domNode.append(doc.createTextNode(vNode))
            return
        }

        const e = doc.createElement(vNode.name)

        if (vNode.children !== undefined) {
            const children = vNode.children instanceof Array ? vNode.children : [vNode.children]
            for (const child of children) {
                if (typeof child.name === 'function') {
                    renderToDOM(child.name(child.props), e)
                } else {
                    renderToDOM(child, e)
                }
            }
        }

        domNode.append(e)
    }

    React = {
        setDocument,
        createElement,
        renderToDOM
    }
})()

if (typeof module !== 'undefined') {
    module.exports = React
}