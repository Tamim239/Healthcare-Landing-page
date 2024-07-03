import { FaStar } from "react-icons/fa6";

export const Review = () => {
  return (
    <div className="max-sm:my-10">
      <div className="border border-[#343268] rounded-full inline-block py-2 px-4 ">
        <p>Testimonial</p>
      </div>
      <h2 className="text-3xl font-medium my-3">What they say about us</h2>
      {/* reviews */}
      <div>
        <section className="bg-white">
          <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 bg-[#FFFFF5]">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <h1 className="text-xl font-medium">
                  Expertise and Compassion Combined
                </h1>
                <p className="mt-4 text-gray-700">
                  I can not thank enough for their exceptional care. The doctors
                  and staff showed incredible expertise and compassion
                  throughout my treatment journey. I felt truly cared for every
                  step of the way.
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="size-12 rounded-full object-cover"
                  />

                  <div>
                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Paul Starr
                    </p>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <FaStar className="text-amber-400 " />
                      <FaStar className="text-amber-400 " />
                      <FaStar className="text-amber-400 " />
                      <FaStar className="text-amber-400 " />
                      <FaStar className="text-amber-400 " />
                    </div>
                  </div>
                </div>
              </blockquote>
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <h1 className="text-xl font-medium">
                  Life-Saving Care, Life-Changing Experience
                </h1>
                <p className="mt-4 text-gray-700">
                  My experience at [Healthcare Provider Name] was life-changing.
                  The prompt and accurate diagnosis, coupled with the advanced
                  treatments they provided, saved my life.
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="size-12 rounded-full object-cover"
                  />

                  <div>
                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Paul Starr
                    </p>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <FaStar className="text-amber-400 " />
                      <FaStar className="text-amber-400 " />
                      <FaStar className="text-amber-400 " />
                      <FaStar className="text-amber-400 " />
                      <FaStar className="text-amber-400 " />
                    </div>
                  </div>
                </div>
              </blockquote>
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <h1 className="text-xl font-medium">
                  A Partner in Health and Wellness
                </h1>
                <p className="mt-4 text-gray-700">
                  As a busy professional, I appreciate the convenience and
                  quality of care I receive at [Healthcare Provider Name]. From
                  telemedicine consultations to routine check-ups, they have
                  become my trusted partner in health and
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    className="size-12 rounded-full object-cover"
                  />

                  <div>
                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      Paul Starr
                    </p>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      <FaStar className="text-amber-400 " />
                      <FaStar className="text-amber-400 " />
                      <FaStar className="text-amber-400 " />
                      <FaStar className="text-amber-400 " />
                      <FaStar className="text-amber-400 " />
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </section>
        <div className="flex justify-center gap-3 items-center">
        <div className="badge bg-gray-400 badge-xs"></div>
        <div className="badge bg-yellow-400 badge-xs"></div>
        <div className="badge bg-gray-400 badge-xs"></div>
        </div>
      </div>
    </div>
  );
};
