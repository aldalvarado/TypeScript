import "./style.css"
import "./topics/01-basic-types.ts";
import "./topics/02-object-interface.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hola Mundo</h1>
`
console.log("Hola Mundo")
