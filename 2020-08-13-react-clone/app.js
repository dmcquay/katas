const root = document.getElementById('root')

function Clock() {
    return new Date().toISOString()
}

const tree = e('p', null, [e('p', null, 'hello world'), 'stuff', e(Clock)])

renderToDOM(tree, root)