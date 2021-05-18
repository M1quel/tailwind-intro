import { useState } from "react";

function App() {
  var [open, setOpen] = useState(false);
  return (
    <>
    <nav className="bg-red-600 h-14 md:container mx-auto flex justify-between md:px-10 px-5 items-center">
      <a href="/">LOGO</a>
      <div className={open ? "bg-white md:bg-transparent absolute md:relative inset-0 bottom-80 opacity-100 transition-opacity duration-300 p-5" : "invisible opacity-0 md:visible"}> 
        <button className="md:hidden block ml-auto text-7xl" onClick={() => setOpen(!open)}>&times;</button>
        <ul className={`flex flex-col md:flex-row items-center gap-2`}>
          <li className="cursor-pointer hover:text-black text-gray-500 text-xl" href="#">Link 1</li>
          <li className="cursor-pointer hover:text-black text-gray-500 text-xl" href="#">Link 2</li>
          <li className="cursor-pointer hover:text-black text-gray-500 text-xl" href="#">Link 3</li>
        </ul>
      </div>
      <button className="md:hidden" onClick={() => setOpen(!open)}>MENU</button>

    </nav>
    <section className="bg-pink-700 h-72 md:container mx-auto justify-center flex flex-col items-center">
      <h1 className="uppercase text-2xl">Want a free thingy!?</h1>
      <a href="/cta" className="mt-4 transition-colors text-md hover:bg-green-900 hover:text-white bg-green-500 py-2 px-4 rounded-md">OMG Click here!!</a>
    </section>

    <section className="md:container mx-auto bg-blue-400 px-5 py-4 md:px-10 flex flex-col md:flex-row gap-5">
      <article className="flex flex-col items-center mx-5">
        <img className="rounded-full" src="https://picsum.photos/200" alt="" />
        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia quidem reiciendis. Culpa voluptate dignissimos non accusamus aspernatur quidem officiis?</p>
      </article>

      <article className="flex flex-col items-center mx-5">
        <img className="rounded-full" src="https://picsum.photos/200" alt="" />
        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia quidem reiciendis. Culpa voluptate dignissimos non accusamus aspernatur quidem officiis?</p>
      </article>

      <article className="flex flex-col items-center mx-5">
        <img className="rounded-full" src="https://picsum.photos/200" alt="" />
        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia quidem reiciendis. Culpa voluptate dignissimos non accusamus aspernatur quidem officiis?</p>
      </article>
    </section>
    </>
  );
}

export default App;
