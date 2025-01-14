/* non iterative rendering 
function customRender(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    mainContainer.appendChild(domElement)
}
*/

//for loop based rendering for multiple elements
function customRender(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props ){
        if (prop === 'children') {
            if (prop ==children) continue;
        }
        mainContainer.setAttribute(prop,reactElement.props[prop])
        }
    }



const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
