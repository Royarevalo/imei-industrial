"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/proyectos/imagen_18.jpeg",
  "/images/proyectos/imagen_19.jpeg",
  "/images/proyectos/imagen_20.jpeg",
  "/images/proyectos/imagen_21.jpeg",
  "/images/proyectos/imagen_22.jpeg",
];

export default function HeroCarousel() {

const [current,setCurrent]=useState(0);

useEffect(()=>{

const interval=setInterval(()=>{

setCurrent((prev)=>
prev===images.length-1
?0
:prev+1
);

},5000);

return ()=>clearInterval(interval);

},[]);

return(

<section
className="
relative
h-screen
overflow-hidden
"
>

{images.map((image,index)=>(

<div
key={index}
className={`
absolute
inset-0
bg-cover
bg-center
transition-opacity
duration-[2000ms]

${current===index
? "opacity-100"
: "opacity-0"}
`}
style={{
backgroundImage:`url(${image})`
}}
/>

))}

<div
className="
absolute
inset-0
bg-black/60
"
/>

<div
className="
relative
z-10
h-full
flex
items-center
max-w-7xl
mx-auto
px-8
"
>

<div className="max-w-3xl">

<p
className="
text-blue-500
uppercase
tracking-[5px]
mb-4
"
>

IMEI

</p>

<h1
className="
text-6xl
md:text-8xl
font-bold
mb-8
leading-tight
"
>

Soluciones Industriales
y Obra Civil

</h1>

<p
className="
text-gray-300
text-xl
mb-10
"
>

Especialistas en obra civil,
estructuras metálicas e
instalaciones industriales.

</p>

<div
className="
flex
flex-wrap
gap-4
"
>

<div className="bg-black/30 px-6 py-3 rounded-xl">
🏗️ Obra Civil
</div>

<div className="bg-black/30 px-6 py-3 rounded-xl">
🏭 Estructuras
</div>

<div className="bg-black/30 px-6 py-3 rounded-xl">
⚡ Instalaciones
</div>

</div>

</div>

</div>

</section>

)

}