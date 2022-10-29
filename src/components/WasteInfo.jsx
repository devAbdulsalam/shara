import React from "react";
import "./Despose.css";
const WasteInfo = () => {
  return (
    <div>
      <div className="flex text-[#16a34a] justify-between rounded-b-[1rem] p-4">
        <a href="login.html">
          <div className="flex ">
            <i className="fa fa-arrow-left fa-2x font-light"></i>
          </div>
        </a>
      </div>
      <div className="">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')`,
            }}
          ></div>{" "}
          <div className="w-full p-4 my-5 lg:w-1/2">
            <div className="">
              <h2 className="text-2xl font-semibold text-gray-700 text-center p">
                What is your Waste?
              </h2>
              <p className="text-sm text-gray-600 text-center">
                you can select mutiple options;
              </p>
            </div>
            <div className="py-3">
              <article className="feature1">
                <input type="checkbox" id="feature1" />
                <div className="flex-1 overflow-hidden">
                  <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                    Metal Waste
                  </h5>
                </div>
              </article>

              <article className="feature2">
                <input type="checkbox" id="feature2" />
                <div>
                  <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                    Plastic Waste
                  </h5>
                </div>
              </article>

              <article className="feature3">
                <input type="checkbox" id="feature3" />
                <div>
                  <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                    General Waste
                  </h5>
                </div>
              </article>

              <article className="feature2">
                <input type="checkbox" id="feature2" />
                <div>
                  <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                    Organic Waste
                  </h5>
                </div>
              </article>

              <article className="feature3">
                <input type="checkbox" id="feature3" />
                <div>
                  <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                    Other
                  </h5>
                </div>
              </article>
            </div>
            <div className="pt-5">
              <a href="./reportsent.html">
                <button className="bg-green-700 text-white font-bold py-4 px-4 w-full hover:bg-green-500 rounded-full">
                  Continue
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteInfo;
