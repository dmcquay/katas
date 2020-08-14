const root = document.getElementById('root')

function e(name, props, children) {
    return {name, props, children}
}

const tree = e('p', null, [e('p', null, 'hello world'), 'stuff'])

function renderToDOM(vNode, domNode) {
    const e = document.createElement(vNode.name)
    const children = vNode.children instanceof Array ? vNode.children : [vNode.children]
    for (const child of children) {
        if (typeof child === 'string')
            e.append(document.createTextNode(child))
        else
            renderToDOM(child, e)
    }
    domNode.append(e)
}

renderToDOM(tree, root)