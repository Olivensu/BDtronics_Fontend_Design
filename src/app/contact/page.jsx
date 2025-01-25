import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-10 px-5">
      <h1 className="text-3xl font-bold mb-5">Contact Us</h1>

      <div className="w-full max-w-5xl bg-white rounded-md shadow-md p-8 grid md:grid-cols-2 gap-10">
        {/* Write Us Section */}
        <div className="space-y-6 mx-3">
          <h2 className="text-2xl font-semibold">Write Us</h2>
          <p className="text-gray-600">
            Jot us a note and we’ll get back to you as quickly as possible.
          </p>

          <form className="space-y-4">
            <div className="form-control">
              <label className="label font-semibold">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Phone Number</label>
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">What’s on your mind?</label>
              <textarea
                placeholder="Write your message here..."
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
            <button className="btn btn-primary w-full text-white font-bold">
              SUBMIT
            </button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="border-l border-gray-200 pl-6">
          <h2 className="text-2xl font-semibold">Contact Details</h2>
          <div className="mt-4">
            <h3 className="text-lg font-bold">BDTronics.com</h3>
            <p>77/1 Fakirapool, Motijheel</p>
            <p>Dhaka, 1000</p>
            <div className="mt-4">
              <p className="flex items-center gap-2">
                <span role="img" aria-label="phone">
                  📞
                </span>{" "}
                +88 01974-277797
              </p>
              <p className="flex items-center gap-2 mt-2">
                <span role="img" aria-label="email">
                  📧
                </span>{" "}
                info@bdtronics.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
