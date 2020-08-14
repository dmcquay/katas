const root = document.getElementById('root')

function Clock() {
    return new Date().toISOString()
}

function e(name, props, children) {
    return {name, props, children}
}

const tree = e('p', null, [e('p', null, 'hello world'), 'stuff', e(Clock)])

function renderToDOM(vNode, domNode) {
    if (typeof vNode === 'string') {
        domNode.append(document.createTextNode(vNode))
        return
    }

    const e = document.createElement(vNode.name)
    const children = vNode.children instanceof Array ? vNode.children : [vNode.children]
    for (const child of children) {
        if(typeof child.name === 'function') {
            renderToDOM(child.name(child.props), e)
        } else {
            renderToDOM(child, e)
        }
    }
    domNode.append(e)
}

renderToDOM(tree, root)