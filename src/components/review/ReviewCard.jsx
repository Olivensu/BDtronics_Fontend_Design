import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Avatar from '@mui/material/Avatar';
import GoogleIcon from '@mui/icons-material/Google';

function ReviewCard() {
  return (
    <div className="p-4 max-w-sm bg-white rounded-lg shadow-xl my-10">
      <div className="flex items-center mb-2">
        <StarIcon className="text-yellow" />
        <StarIcon className="text-yellow" />
        <StarIcon className="text-yellow" />
        <StarIcon className="text-yellow" />
        <StarHalfIcon className="text-yellow" />
        <span className="ml-2 text-sm text-gray-600">4 months ago</span>
        <GoogleIcon className="ml-auto text-blue-500" />
      </div>
      <p className="text-sm text-gray-800 mb-4">
        Good Product, 100% Recommend and Trusted Shop.
        আমি SRNE 20a Mppt charge controller নিয়েছি। আরো
        সোলার প্যানেল নিতে চাচ্ছি কিন্তু available নেই।
        আর আমার সবচেয়ে ভালো লেগেছে আপনাদের ডেলিভারি
        সিস্টেম কে, অন্য অনেক দোকানেও যোগাযোগ করেছি,
        তাদের থেকে নিতে কম করে ১০০০ টাকা অতিরিক্ত দিতে
        হবে যা আমার পক্ষে সম্ভব নয়, প্রথমত আমি
        ডেলিভারি চার্জ টা দিয়ে হয় দরদাম কমফার।
        পরবর্তীতে সকলকে নিঃসন্দেহে এখান থেকে
        তাদের কারবার অনুমোদিত থাকলো। ধন্যবাদ সকলকে।
      </p>
      <div className="flex items-center">
        <Avatar className="mr-2">P</Avatar>
        <span className="text-sm text-gray-800">Poranno ciji</span>
      </div>
    </div>
  );
}

export default ReviewCard;
