const reactElement = {
    type:'a' , 
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'visit to google'
}
const root = document.getElementById('root');
function reactRender(reactElement , root){
    // const createElement = document.createElement(reactElement.type)
    // createElement.innerHTML = reactElement.children
    // createElement.setAttribute('href' , reactElement.props.href)
    // createElement.setAttribute('target' , reactElement.props.target)
    // root.appendChild(createElement)


    const createElement = document.createElement(reactElement.type)
    createElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
            // console.log(reactElement==='children');
            createElement.setAttribute(prop , reactElement.props[prop])
            console.log(prop , reactElement.props[prop]);
        }
        root.appendChild(createElement)
    }






reactRender(reactElement  , root)

