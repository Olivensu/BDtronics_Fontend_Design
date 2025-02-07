import Link from "next/link"
import { Search } from "lucide-react"

const BlogLayout = () => {
  const recentPosts = [
    {
      id: 1,
      title: "Bambu Lab X1E landed in Bangladesh for the first time at BDTronics",
      date: "January 04, 2025",
      image: "/img/product/10.webp",
    },
    {
      id: 2,
      title: "BDTronics delivers 3D printers to Maple Leaf International School",
      date: "October 09, 2024",
      image: "/img/product/10.webp",
    },
    {
      id: 3,
      title: "Latest Anycubic resin 3D Printers are now available in Bangladesh",
      date: "October 04, 2024",
      image: "/img/product/10.webp",
    },
    {
      id: 4,
      title: "BDTronics delivers 3D printers and laser engravers to Ahsanullah University",
      date: "October 04, 2024",
      image: "/img/product/10.webp",
    },
    {
      id: 5,
      title: "থ্রিডি প্রিন্টিং সার্ভিস (3D Printing Service) এখন যাচ্ছে বাড়িতে",
      date: "September 30, 2024",
      image: "/img/product/10.webp",
    },
  ]

  return (
    <div className="container mx-auto my-5 py-5 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Blog Content */}
        <div className="lg:w-3/4">
          <p className="font-bold text-dark-green">OUR BLOG POST</p>
          <h1 className="text-3xl font-bold mb-8">Latest Article of Voltech</h1>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog 1 */}
            <div className="bg-blue shadow-lg rounded-lg p-6">
              <div className="flex items-center">
                <div className="w-1/3 bg-yellow text-white text-center p-2 rounded-lg">
                  <h4 className="text-2xl font-bold">24</h4>
                  <p className="text-sm">Feb</p>
                </div>
                <div className="w-2/3 pl-4">
                  <p className="text-lg">
                    <span className="text-dark-green">By:</span> Shamuel Acuista
                  </p>
                </div>
              </div>
              <Link href="/blog/blog-details" className="no-underline text-black">
                <h3 className="text-xl font-bold pt-4 hover:text-dark-green">
                  Difference between authorization and authentication..
                </h3>
              </Link>
              <p className="text-gray mt-2">
                In the world of information security, two concepts that are often used interchangeably but have
                different meanings are "authentication" and "authorization".
              </p>
            </div>

            {/* Blog 2 */}
            <div className="bg-blue shadow-lg rounded-lg p-6">
              <div className="flex items-center">
                <div className="w-1/3 bg-yellow text-white text-center p-2 rounded-lg">
                  <h4 className="text-2xl font-bold">28</h4>
                  <p className="text-sm">Feb</p>
                </div>
                <div className="w-2/3 pl-4">
                  <p className="text-lg">
                    <span className="text-dark-green">By:</span> Tasbiul Hasan
                  </p>
                </div>
              </div>
              <Link href="/blog/blog-details" className="no-underline text-black">
                <h3 className="text-xl font-bold pt-4 hover:text-dark-green">
                  Why are you using firebase? What other options do you have to implement authentication?..
                </h3>
              </Link>
              <p className="text-gray mt-2">
                Firebase is a popular mobile and web application development platform that provides a suite of tools and
                services to help developers build and deploy applications quickly and easily.
              </p>
            </div>

            {/* Blog 3 */}
            <div className="bg-blue shadow-lg rounded-lg p-6">
              <div className="flex items-center">
                <div className="w-1/3 bg-yellow text-white text-center p-2 rounded-lg">
                  <h4 className="text-2xl font-bold">21</h4>
                  <p className="text-sm">Feb</p>
                </div>
                <div className="w-2/3 pl-4">
                  <p className="text-lg">
                    <span className="text-dark-green">By:</span> Maddie Rife
                  </p>
                </div>
              </div>
              <Link href="/blog/blog-details" className="no-underline text-black">
                <h3 className="text-xl font-bold pt-4 hover:text-dark-green">
                  What other services does firebase provide other than authentication?..
                </h3>
              </Link>
              <p className="text-gray mt-2">
                Firebase is a comprehensive mobile and web development platform that offers developers a wide range of
                services to build, grow and manage their applications.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/4">
          {/* Search Bar */}
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search posts here..."
              className="w-full px-4 py-2 border rounded-md pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <Link key={post.id} href={`/blog/blog-details`} className="flex gap-3 group no-underline">
                  <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden shrink-0">
                    <img src={post.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 group-hover:text-dark-green line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogLayout

