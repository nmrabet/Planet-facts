import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Mercury from "../assets/planet-mercury.svg";
import MiniPlanet from "../assets/geology-mercury.png";
import planetInternal from "../assets/planet-mercury-internal.svg";


export default function Planet({name, content, source}) {
  return (
    <div className="text-white mb-8">
      <Tabs>
        <TabList className=" text-sm uppercase flex justify-between my-4 mx-6">
          <Tab>Overview</Tab>
          <Tab>Structure</Tab>
          <Tab>Surface</Tab>
        </TabList>
        <hr className="opacity-25" />
        <TabPanel className="text-center">
          <img src={Mercury} alt="" className="mx-auto my-28" width="150px" />
          <h2
            className="uppercase text-5xl my-8"
            style={{ fontFamily: "Antonio" }}
          >
            {name}
          </h2>
          <p className="mx-6">
            {content}
          </p>
          <div className="flex justify-center items-center my-10">
            <p>Source: {source}</p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="text-xs text-left mx-6 space-y-3">
            <div className="border p-6 uppercase">
              <h3>Rotation time</h3>
              <span></span>
            </div>
            <div className="border p-6 uppercase">
              <h3>Revolution time</h3>
              <span></span>
            </div>
            <div className="border p-6 uppercase">
              <h3>Radius</h3>
              <span></span>
            </div>
            <div className="border p-6 uppercase">
              <h3>Average temp.</h3>
              <span></span>
            </div>
          </div>
        </TabPanel>
        <TabPanel className="text-center">
          <img src={Mercury} alt="" className="mx-auto my-28" width="150px" />
          <img
            src={MiniPlanet}
            alt=""
            className="mx-auto -mt-36"
            width="100px"
          />
          <h2
            className="uppercase text-5xl my-8"
            style={{ fontFamily: "Antonio" }}
          >
            Mercury
          </h2>
          <p className="mx-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            sequi aliquid in nemo ducimus ullam hic placeat, dignissimos
            suscipit eaque, deleniti dolorum quia. Tempora porro, reiciendis cum
            assumenda rem excepturi?
          </p>
          <div className="flex justify-center items-center my-10">
            <p>Source:</p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="text-xs text-left mx-6 space-y-3">
            <div className="border p-6 uppercase">
              <h3>Rotation time</h3>
              <span></span>
            </div>
            <div className="border p-6 uppercase">
              <h3>Revolution time</h3>
              <span></span>
            </div>
            <div className="border p-6 uppercase">
              <h3>Radius</h3>
              <span></span>
            </div>
            <div className="border p-6 uppercase">
              <h3>Average temp.</h3>
              <span></span>
            </div>
          </div>
        </TabPanel>
        <TabPanel className="text-center">
          <img
            src={planetInternal}
            alt=""
            className="mx-auto my-28"
            width="150px"
          />
          <h2
            className="uppercase text-5xl my-8"
            style={{ fontFamily: "Antonio" }}
          >
            Mercury
          </h2>
          <p className="mx-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            sequi aliquid in nemo ducimus ullam hic placeat, dignissimos
            suscipit eaque, deleniti dolorum quia. Tempora porro, reiciendis cum
            assumenda rem excepturi?
          </p>
          <div className="flex justify-center items-center my-10">
            <p>Source:</p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="text-xs text-left mx-6 space-y-3">
            <div className="border p-6 uppercase">
              <h3>Rotation time</h3>
              <span></span>
            </div>
            <div className="border p-6 uppercase">
              <h3>Revolution time</h3>
              <span></span>
            </div>
            <div className="border p-6 uppercase">
              <h3>Radius</h3>
              <span></span>
            </div>
            <div className="border p-6 uppercase">
              <h3>Average temp.</h3>
              <span></span>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
