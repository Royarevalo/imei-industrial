import Image from "next/image";

const clients=[

"/images/clientes/cliente1.png",
"/images/clientes/cliente2.png",
"/images/clientes/cliente3.png",
"/images/clientes/cliente4.png",
"/images/clientes/cliente5.png"

];

export default function Clients(){

return(

<section
className="
bg-white
py-24
px-8
"
>

<div className="max-w-7xl mx-auto">

<div className="text-center mb-16">

<h2
className="
text-5xl
font-bold
text-black
mb-6
"
>

Empresas con las que
hemos trabajado

</h2>

<p
className="
text-gray-500
"
>

Experiencia en distintos sectores industriales

</p>

</div>

<div
className="
grid
grid-cols-2
md:grid-cols-5
gap-10
items-center
"
>

{clients.map((logo,index)=>(

<div
key={index}
className="
flex
justify-center
opacity-60
hover:opacity-100
transition
"
>

<Image
src={logo}
alt=""
width={150}
height={80}
/>

</div>

))}

</div>

</div>

</section>

)

}