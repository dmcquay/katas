const { expect } = require('chai')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const React = require('./react')
const e = React.createElement

describe('React', () => {
    describe('#createElement', () => {
        it('returns an object with the provided name, props and children', () => {
            const name = 'test-name'
            const props = {foo: 'bar'}
            const children = ['one', 'two']
            const element = React.createElement(name, props, children)
            expect(element).to.eql({name, props, children})
        })
    })

    describe('#renderToDOM', () => {
        context('when rendering an empty p tag', () => {
            const vDom = e('p')
            const dom = new JSDOM(`<!DOCTYPE html><div id="root"></div>`)
            const rootDomElement = dom.window.document.querySelector("#root")
            React.setDocument(dom.window.document)
            React.renderToDOM(vDom, rootDomElement)
            const pEl = rootDomElement.children[0]

            it('should have just one element under root', () => {
                expect(rootDomElement.children.length).to.equal(1)
            })

            it('should be a p element', () => {
                expect(pEl.nodeName).to.equal('P')
            })

            it('should have no children', () => {
                expect(pEl.children.length).to.equal(0)
            })
            
            it('should have no text inside', () => {
                expect(pEl.textContent).to.equal('')
            })
        })

        context('when rendering a p tag with a child p tag that has text', () => {
            const vDom = e('p', null, e('p', null, 'hello world'))
            const dom = new JSDOM(`<!DOCTYPE html><div id="root"></div>`)
            const rootDomElement = dom.window.document.querySelector("#root")
            React.setDocument(dom.window.document)
            React.renderToDOM(vDom, rootDomElement)
            const pEl = rootDomElement.children[0]

            it('should have just one element under root', () => {
                expect(rootDomElement.children.length).to.equal(1)
            })

            it('should be a p element', () => {
                expect(pEl.nodeName).to.equal('P')
            })

            it('should have one child', () => {
                expect(pEl.children.length).to.equal(1)
            })
            
            it('that child should have hello world text content', () => {
                expect(pEl.children[0].textContent).to.equal('hello world')
            })

            it('that child should have no children', () => {
                expect(pEl.children[0].children.length).to.equal(0)
            })
        })
    })
})