import React from "react";

function Product() {
	return (
		<section className="mx-auto  w-5/6">
			<div className="bg-white/50 w-3/4 hover:shadow-black  shadow-black shadow-sm mx-auto my-4 hover:shadow-md rounded-lg border-2 border-cyan-600">
				<div>
					<ul className="flex overflow-x-auto snap-x snap-mandatoty gap-6 before:shrink-0 after:shrink-0 before:w-[10vw] after:w-[10vw]">
						<li className="shrink-0 snap-center">
							<img
								src="https://media.istockphoto.com/photos/toketee-falls-picture-id1145963174?k=20&m=1145963174&s=612x612&w=0&h=4zl1OjB7ZamMxbcPTy34NvqxQZqpDkCM1Au2V-zCbew="
								className="h-40 w-40 lg:h-96 lg:w-96 my-1"
							></img>
						</li>
						<li className="shrink-0 snap-center">
							<img
								src="https://media.istockphoto.com/photos/toketee-falls-picture-id1145963174?k=20&m=1145963174&s=612x612&w=0&h=4zl1OjB7ZamMxbcPTy34NvqxQZqpDkCM1Au2V-zCbew="
								className="h-40 w-40 lg:h-96 lg:w-96 my-1"
							></img>
						</li>
						<li className="shrink-0 snap-center">
							<img
								src="https://iconarchive.com/download/i85638/graphicloads/100-flat/zoom-seach.ico"
								className="h-40 w-40 lg:h-96 lg:w-96 my-1"
							></img>
						</li>
						<li className="shrink-0 snap-center">
							<img
								src="https://iconarchive.com/download/i85638/graphicloads/100-flat/zoom-seach.ico"
								className="h-40 w-40 lg:h-96 lg:w-96 my-1"
							></img>
						</li>
					</ul>
				</div>
				<div className="bg-white/50">
					<h1 className="text-2xl ml-2 inline-block">Table Lamp for sale</h1>
					<p className="ml-2 text-lg">Rs.500(negotiable)</p>
					<div className="inline-block ml-2">Phone:</div>
					<div className="inline-block ml-2">9844267181</div>
				</div>
			</div>
		</section>
	);
}

export default Product;
