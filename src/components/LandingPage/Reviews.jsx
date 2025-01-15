import React from "react";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ReviewCard from "../review/ReviewCard";

export const Reviews = () => {
  return (
    <div className="my-10">
      <div className="flex">
        <p className=" text-[1.5rem] mr-5 font-semibold">Reviews from Our Customers</p>
      </div>
      <div className=" grid grid-cols-3">
      <ReviewCard></ReviewCard>
      <ReviewCard></ReviewCard>
      <ReviewCard></ReviewCard>
      </div>
      </div>
  )
}
