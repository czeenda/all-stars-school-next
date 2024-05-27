'use client'
//import React from 'react'

//import Image from "next/image";

//import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function Home() {
  return (
    <>
    <section id="homepage">
        
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="container-xl h-100 position-absolute arrows">
            <div className="container-sm h-100 w-75 position-relative">
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="fff" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                      </svg>
                    </span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="fff" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                      </svg>
                    </span>
                    <span className="visually-hidden">Next</span>
                  </button>
            </div>
        </div>
        <div className="carousel-indicators d-none">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="carousel-caption">
              <h1 className="text-shadow">Jedinečnost</h1>
              <p className="text-shadow">Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <div className="carousel-caption">
              <h1 className="text-shadow">Jedinečnost</h1>
              <p className="text-shadow">Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <div className="carousel-caption">
              <h1 className="text-shadow">Jedinečnost</h1>
              <p className="text-shadow">Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className='arrow-down position-absolute d-flex justify-content-center align-items-center' /* onClick={scrollDown} */>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
              </svg>
            </div>
          </div>
        </div>
        
      </div>

  </section>
  <section>
    <div className="w-50">ok</div>
  </section>
  </>
  );
}
