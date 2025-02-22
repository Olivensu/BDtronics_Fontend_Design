export default function page () {
    return (
        <div className="max-w-[1280px] mx-auto p-4 md:p-6 space-y-6">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">আমাদের ওয়েবসাইটে কিভাবে অর্ডার করবেন?</h2>

      <p className="text-base md:text-lg">
        আপনি কোন প্রোডাক্টের ব্যাপারে আগ্রহী হলে আমাদের ওয়েবসাইট থেকে সরাসরি অর্ডার করতে পারেন। অথবা, ফোনে অর্ডার করতে ডায়াল করুন:{" "}
        <a href="tel:+8801974277797" className="text-blue-600 hover:text-blue-800 font-semibold">
          +88 01974 277 797
        </a>
      </p>

      <p className="text-sm text-gray-600 italic">(উল্লেখ্য যে আমাদের সার্ভিস এই মুহূর্তে শুধু বাংলাদেশে গ্রহণ করা যাবে।)</p>

      <div className="mt-6">
        <p className="mb-4">ওয়েবসাইটের মাধ্যমে অর্ডার করতে অনুগ্রহ করে নিচের ধাপগুলো অনুসরণ করুন:</p>

        <h3 className="font-semibold mb-2">ধাপ-১:</h3>
        <div className="space-y-4 ml-4">
          <p>প্রথমে আপনি যে প্রোডাক্টটি ক্রয় করতে ইচ্ছুক, প্রোডাক্টটির ছবির উপর ক্লিক করুন।</p>
          <p>১। প্রোডাক্টটির বিবরণ ও স্পেসিফিকেশন সতর্কতার সাথে পড়ে আপনার কাঙ্ক্ষিত পণ্যটি সম্পর্কে নিশ্চিত হোন।</p>
          <p>
            ২। আপনি পণ্যটি তত্ত্বগুলো ক্রয় করতে ইচ্ছুক QTY বক্সে সংখ্যাটি দিয়ুন। একটি পণ্যের ক্ষেত্রে সাধারণত কিছু পরিবর্তন করার প্রয়োজন
            নেই। কিছু কিছু পণ্যের ক্ষেত্রে Minimum QTY দেয়া থাকে যা পরিবর্তনযোগ্য নয়।
          </p>
          <p>
            ৩। পণ্যটি টি আপনার কার্টের জন্য বাছাই করতে "ADD TO CART" বাটনে ক্লিক করুন। এভাবে যতগুলো পণ্য অর্ডার করতে চান #১ থেকে ধাপগুলো
            রিপিট করে সবগুলো আপনার কার্টে রাখুন।
          </p>
          <p>
            ৪। সবগুলো প্রোডাক্ট বাছাই সম্পন্ন হলে, উপরে ডান পাশের শপিং ব্যাগ আইকনে ক্লিক করে আপনার বাছাইকৃত প্রোডাক্টগুলো দেখে নিতে পারেন।
          </p>
          
        </div>
        <div>
        <img src="/img/order/1.png" alt="" />
        </div>
        <p>
            ৫। আপনি প্রয়োজনে বাছাইকৃত প্রোডাক্ট থেকে কোনটি বাদ দিতে পারেন কিংবা QTY পরির্তন করতে পারেন। সেজন্য "View and Edit Cart" লিঙ্কে ক্লিক করুন।
          </p>
          <div>
        <img src="/img/order/2.png" alt="" />
        </div>
        <section>
        <h3 className="text-lg font-semibold mb-3">ধাপ-২:</h3>
        <p className="text-base leading-relaxed">
          আপনি কোন প্রোডাক্ট বাদ দিতে নির্দিষ্ট প্রোডাক্টটির ডান পাশে "x" আইকনে ক্লিক করুন। যদি QTY পরিবর্তন করতে চান তালে "Gear" আইকনে
          ক্লিক করুন। অতিদ্রুত আপনি প্রোডাক্টের বিবরণ পেইজে স্থানান্তরিত হবেন। যেখানে পরিবর্তিত QTY দিয়ে "Update Cart" বাটনে ক্লিক করলে
          তা QTY আপডেট হয়ে যাবে।
        </p>

        <p className="mt-4 text-base leading-relaxed">
          আপনার যদি কোন ডিসকাউন্ট কোড থাকে তাহ কার্ট পেইজের ডান পাশে "Apply Discount Code" বক্সের ঘরে ডিসকাউন্ট কোড লিখে "Apply
          Discount" বাটনে ক্লিক করুন। ডিসকাউন্ট প্রযোজ্য হলে তা অটোমেটিক্যালি আপনার কার্টে যোগ হবে।
        </p>

        <p className="mt-4 text-base leading-relaxed">
          এ পর্যায়ে আপনি পরবর্তী ধাপে যেতে ও অর্ডার সম্পন্ন করতে "PROCEED TO CHECKOUT" বাটনে ক্লিক করুন।
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-3">ধাপ-৩</h3>
        <p className="text-base leading-relaxed">
          আপনি রেজিস্টার্ড কাস্টমার হলে ওয়েবসাইটে আপনার Username ও Password ব্যবহার করে লগইন করতে পারবেন। রেজিস্টার্ড কাস্টমারের বিভিন্ন
          সুবিধা রয়েছে যেমন পূর্ববর্তী অর্ডারসমূহ ম্যানেজ করা, পূর্বের অর্ডার হতে ডেলিভারি এড্রেস স্বয়ংক্রিয়ভাবে পূরণ হওয়া, রি-অর্ডার করা এবং
          সহজে অর্ডার ট্র্যাক করা ইত্যাদি। আপনি সাধারণভাবেও অর্ডারটি সম্পন্ন করতে পারেন সেক্ষেত্রে রেজিস্ট্রেশনের প্রয়োজন নেই।
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-3">ধাপ-৪</h3>
        <p className="text-base leading-relaxed">
          আমাদের ওয়েবসাইটে আপনার কোন একাউন্ট না থাকলে, আপনার ডেলিভারি এড্রেস সঠিকভাবে পূরণ করুন:
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-3">ধাপ-৫</h3>
        <p className="text-base leading-relaxed">
          আপনার ডেলিভারি মেথড বাছাই করুন, অর্থাৎ আপনি যে পদ্ধতিতে ডেলিভারি পেতে ইচ্ছুক। এই মুহূর্তে আমাদের নিজের ডেলিভারি সার্ভিস রয়েছে:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>১. রেগুলার ডেলিভারি (ঢাকায় ১-২ দিনে ডেলিভারি। ঢাকার বাহিরে ২-৩ দিনে ডেলিভারি।)</li>
          <li>২. এক্সপ্রেস ডেলিভারি (শুধুমাত্র ঢাকার ক্ষেত্রে প্রযোজ্য ২৪ ঘন্টায় ডেলিভারি।)</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-3">ধাপ-৬</h3>
        <p className="text-base leading-relaxed">
          আপনার পেমেন্ট মেথড সিলেক্ট করুন অর্থাৎ আপনি যেভাবে অর্ডারের মূল্য পরিশোধ করতে ইচ্ছুক:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>
            বিকাশ: বিকাশে পেমেন্ট করতে অবশ্যই Bkash পেমেন্টে মেথড সিলেক্ট করুন এবং আপনার বিকাশ নাম্বার ও পিন দিয়ে অর্ডার সম্পন্ন করুন।
          </li>
          <li>ক্যাশ অন ডেলিভারি: এক্ষেত্রে অর্ডার ডেলিভারির সময় পণ্যের মূল্য প্রদেয়।</li>
        </ul>
      </section>

      <section className="space-y-4">
        <p className="text-base leading-relaxed">এর পর "Place Order" বাটনে ক্লিক করে আপনার অর্ডারটি সম্পূর্ণ করুন।</p>
        <p className="text-base leading-relaxed">
          আমাদের ওয়েবসাইটে অর্ডার করার মাধ্যমে আপনি নিচের শর্তসমূহে সম্মতি জ্ঞাপন করেন:
          <a href="#" className="text-blue-600 hover:text-blue-800 ml-1">
            Terms and conditions
          </a>
          .
        </p>
      </section>

      <section className="bg-gray-50 p-4 rounded-lg mt-8">
        <h3 className="text-lg font-semibold mb-3">জরুরী নোটিশমূহ</h3>
        <div className="space-y-4">
          <p className="text-base leading-relaxed">
            আপনি অনলাইনে পেমেন্ট মেথড সিলেক্ট করে থাকলে আপনি পেমেন্ট সার্ভিস প্রোভাইডারের ওয়েবসাইটে স্বয়ংক্রিয়ভাবে স্থানান্তরিত হবেন আপনার
            প্রোডাক্টের মূল্য পরিশোধের লক্ষ্যে।
          </p>
          <p className="text-base leading-relaxed">
            আপনি "ক্যাশ অন ডেলিভারি" মেথড সিলেক্ট করে থাকলে, অর্ডারটি কনফার্মের জন্য আমাদের কাস্টমার সার্ভিস থেকে আপনাকে কল করা হতে পারে।
            অর্ডারটি কনফার্ম হলে আপনি স্বয়ংক্রিয় ইমেইল ও SMS এর মাধ্যমে আপনার অর্ডারের আপডেট জানতে পারবেন।
          </p>
          <p className="text-base leading-relaxed">
            আপনি যদি সর্বশেষ প্রয়োজনীয় অফার ও ডিসকাউন্ট সম্পর্কে আপডেট পেতে ইচ্ছুক, তাহলে ওয়েবসাইটের ফুটারে অবস্থিত নিউজলেটার বক্সের দ্বারা
            সাবস্ক্রাইব করতে ভুলবেন না।
          </p>
        </div>
      </section>
      </div>
    </div>
    )
}