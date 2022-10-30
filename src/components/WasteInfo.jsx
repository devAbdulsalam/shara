import React from 'react'
import Navbar from './Navbar'


const WasteInfo = () => {
  return (
    <div>
        <Navbar />
        <div className="mt-3">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div className="hidden lg:block lg:w-1/2 bg-cover" style={{backgroundImage: `url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')`}}></div>              <div className="w-full p-4 my-5 lg:w-1/2">
                    <div className="">
                        <h2 className="text-2xl font-semibold text-gray-700 text-center p">Know your Waste?</h2>
                        <p className="text-sm text-gray-600 text-center">Check and Know your treasured trash</p> 
                    </div>
                    <div className="py-3">
                    
                            <article className="w-full p-1 cursor-pointer border-gray-500 group hover:bg-gray-700 my-2 border-2 rounded-2xl">
                                <div className="flex justify-center duration-500 w-full">
                                    <h5 className="text-xl m-3 font-semibold text-gray-600 group-hover:text-white dark:text-light">
                                        Metal Waste
                                    </h5>
                                </div>
                            </article>
                            <div
                                class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                                id="Modal2"
                                tabindex="-1"
                                aria-labelledby="exampleModalCenterTitle"
                                aria-modal="true"
                                role="dialog"
                            >
                                <div
                                    class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none"
                                >
                                    <div
                                        class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
                                    >
                                        <div
                                            class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
                                        >
                                            <h5
                                                class="text-xl font-medium leading-normal text-gray-800"
                                                id="exampleModalScrollableLabel"
                                            >
                                                LearnChar Dictionary
                                            </h5>
                                            <button
                                                type="button"
                                                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div id="modal-body" class="modal-body relative">
                                            <p class="p-2">Enter word</p>
                                            <input
                                                id="modal-input"
                                                type="text"
                                                maxlength="10"
                                                class="border-y-2 border-gray-100 border-solid shadow-inner text-xl text-center w-full p-2 focus:ring-1 focus:ring-sky-500 focus:outline-none"
                                                placeholder=""
                                            />
                                        </div>
                                        <div
                                            class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
                                        >
                                            <button
                                                type="button"
                                                class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                                data-bs-dismiss="modal"
                                            >
                                                Cancle
                                            </button>
                                            <button
                                                type="button"
                                                data-bs-toggle="modal"
                                                data-bs-target="#Modal3"
                                                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                            >
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <article className="w-full p-1 cursor-pointer border-blue-500 group hover:bg-blue-700 my-2 border rounded-2xl">
                                <div className="flex justify-center duration-500 w-full">
                                    <h5 className="text-xl m-3 font-semibold text-blue-600 group-hover:text-white dark:text-light">
                                    Plastic Waste
                                </h5>
                            </div>
                            </article>

                            <article className="w-full p-1 cursor-pointer border-green-500 group hover:bg-green-700 my-2 border rounded-2xl">
                                <div className="flex justify-center duration-500 w-full">
                                    <h5 className="text-xl m-3 font-semibold text-green-600 group-hover:text-white dark:text-light">
                                        Organic Waste
                                    </h5>
                                </div>
                            </article>
                            
                           <article className="w-full p-1 cursor-pointer border-yellow-500 group hover:bg-yellow-700 my-2 border rounded-2xl">
                                <div className="flex justify-center duration-500 w-full">
                                    <h5 className="text-xl m-3 font-semibold text-yellow-600 group-hover:text-white dark:text-light">
                                        General Waste
                                    </h5>
                                </div>
                            </article>
                                                          
                            <article className="w-full p-1 cursor-pointer border-red-500 group hover:bg-red-700 my-2 border rounded-2xl">
                                <div className="flex justify-center duration-500 w-full">
                                    <h5 className="text-xl m-3 font-semibold text-red-600 group-hover:text-white dark:text-light">                            
                                        Non Recyclable Waste
                                    </h5>
                                </div>
                            </article>
                    </div>
                    <div className="pt-5">
                        <a href="./depose">
                            <button className="bg-blue-700 text-white font-bold py-4 px-4 w-full hover:bg-blue-500 rounded-2xl">Continue</button>
                        </a>
                    </div>                
                </div>
            </div>
        </div>
    </div>
  )
}

export default WasteInfo