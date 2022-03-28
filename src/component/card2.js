import React from "react";
import { useState } from 'react';
import '../scss/_card2.scss';

export const Card2 = () => {

    return(
        <div class="card w-25 rounded-2">
            <img src="https://images.unsplash.com/photo-1609670289875-590e8ec05c88?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYXl1biUyMHRvbWJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" class="card-img-top" alt="..."/>
            <div class="card-body p-0">
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="text-center" id="flush-headingOne">
                        <button class="accordion-button collapsed bg-success-blur"  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <h4 class="card-title mb-2">Delhi Events 2022</h4>
                        </button>
                    </div>
                    <div id="flush-collapseOne" class="accordion-collapse collapse py-2 bg-primary-blur" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                    </div>
                </div>
            </div>
            <div class="card-footer bg-success-blur d-flex justify-content-between">
              <span className="badge rounded-pill bg-success-light text-light p-2 px-3 bg-opacity-75">
                Open
              </span>
              <span className="badge rounded-pill bg-success-light text-light p-2 px-3 bg-opacity-75">
                Go somewhere
              </span>
            </div>
        </div>
    )
}