"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-[#a90909] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="50" className="mb-2">
          <div className="flex flex-col gap-1 text-[16px] font-medium text-white sm:text-xs lg:text-sm xl:text-base">
            <div className="relative z-10 flex w-fit items-center rounded-sm px-2 py-[2px] uppercase bg-[#EC9006]">TOP</div>
          </div>
        </CardItem>
        <CardItem translateZ="70" className="mb-4">
          <div className="flex flex-col gap-1 text-[16px] font-medium text-white sm:text-xs lg:text-sm xl:text-base">
            <div className="relative z-10 flex w-fit items-center rounded-sm px-2 py-[2px] uppercase bg-[#07C70D]">НОВИНКА</div>
          </div>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/img/meat.svg"
            // src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-100 w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ='70'
            className="px-4 py-2 text-xl rounded-xl font-normal dark:text-white"
          >
            150 грн
          </CardItem>
          <CardItem
            translateZ='70'
            as="button"
            className="px-4 py-2 bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            До кошика
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
