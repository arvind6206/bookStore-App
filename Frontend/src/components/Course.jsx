import React, { useEffect, useState } from "react";
import Cards from "./Cards";
// import list from "../../public/list.json";
import {Link} from "react-router-dom"
import axios from "axios"
function Course() {
  const [book,setBook] = useState([])
  useEffect(()=>{
    const getBook = async()=>{
      try{
        const res = await axios.get("http://localhost:3000/book")
        console.log(res.data)
        setBook(res.data)
      }catch(error){
        console.log(error)
      }
    }
    getBook()
  },[])
  return (
    <>
      <div className=" mt-20 pt-17 max-w-screen-2xl text-center container mx-auto md:px-20 px-4">
        <div>
          <h1 className=" text-3xl font-bold  md:text-4xl">
            We are delighted to have you
            <span className="text-pink-500"> here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit debitis similique mollitia error culpa porro dolore
            quasi libero perferendis, voluptates ut sint soluta amet iure
            voluptatem ratione ipsam quidem reiciendis. Et ducimus dolor officia
            perspiciatis eos beatae, obcaecati ea incidunt consequatur natus?
            Neque doloribus cum, animi veritatis quasi adipisci corporis sequi
            velit iure delectus totam exercitationem fugit consequatur dolorum
            laboriosam.
          </p>
          <Link to="/"> 
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
