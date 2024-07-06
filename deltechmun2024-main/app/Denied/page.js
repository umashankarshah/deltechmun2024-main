import Link from 'next/link'

const page = () => {
  return (
    
    <section className="pt-16 bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-[#3b82f6]">Access Denied</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">Contact technical team for access.</p>
            <p className="mb-4 text-lg font-light text-gray-400">This page is reserved only for society members.</p>
            <Link href="/" className="inline-flex text-white bg-[#2563eb] hover:bg-[#1e40af] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-[#1e3a8a] my-4">Back to Homepage</Link>
        </div>   
    </div>
</section>
   
  )
}

export default page