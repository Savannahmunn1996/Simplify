import React from 'react';
import { useState, UseEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";

const Summary = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  })

  const handleSubmit = async (e) => {
    alert("submitted")
  }





  return (
    <section className="mt16 w-full max-w-xl">
      <div className='flex flex-col w-full gap-2'>
        <form className="relative flex justify-center items-center" onSubmit={handleSubmit}>
          <img src={linkIcon} alt='link_icon' className='absolute left-0 y-2 ml-3 w-5 pt-36'></img>
          <input type='url' placeholder='Enter any article url' value={article.url}
            onChange={(e) => {
              setArticle({
                ...article, url: e.target.value
              })
            }} required className='url_input  mt-36 ' ></input>
          <button type="submit" className=" mt-36 bg-blue-400 w-40 h-10 font-chakra rounded-xl text-white right-0 my-1.5 mr-1.5 ml-8 flex  items-center justify-center">Summarize</button>
        </form>

      </div>
    </section>
  )
}

export default Summary;