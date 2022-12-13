import React from 'react'
import { Link } from 'react-router-dom';

const posts = [
	{
		id: 1,
		title: "Lorem ipsum 1",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil doloremque earum doloribus, veniam provident exercitationem sed iste voluptates quos ullam hic, illo in repellat. Incidunt aut ipsum a ut!",
		img: "https://heraldodemexico.com.mx/u/fotografias/m/2022/2/18/f850x638-479897_557386_5050.jpg"
	},
	
	{
		id: 2,
		title: "Lorem ipsum 2",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil doloremque earum doloribus, veniam provident exercitationem sed iste voluptates quos ullam hic, illo in repellat. Incidunt aut ipsum a ut!",
		img: "https://images.pexels.com/photos/2946853/pexels-photo-2946853.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
	},
	{
		id: 3,
		title: "Lorem ipsum 3",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil doloremque earum doloribus, veniam provident exercitationem sed iste voluptates quos ullam hic, illo in repellat. Incidunt aut ipsum a ut!",
		img: "https://images.pexels.com/photos/6750259/pexels-photo-6750259.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
	},
	{
		id: 4,
		title: "Lorem ipsum 4",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil doloremque earum doloribus, veniam provident exercitationem sed iste voluptates quos ullam hic, illo in repellat. Incidunt aut ipsum a ut!",
		img: "https://images.pexels.com/photos/4359212/pexels-photo-4359212.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
	},
	{
		id: 5,
		title: "Lorem ipsum 5",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil doloremque earum doloribus, veniam provident exercitationem sed iste voluptates quos ullam hic, illo in repellat. Incidunt aut ipsum a ut!",
		img: "https://images.pexels.com/photos/2236399/pexels-photo-2236399.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
	},
	{
		id: 6,
		title: "Lorem ipsum 6",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil doloremque earum doloribus, veniam provident exercitationem sed iste voluptates quos ullam hic, illo in repellat. Incidunt aut ipsum a ut!",
		img: "https://images.pexels.com/photos/8922613/pexels-photo-8922613.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
	},
	{
		id: 7,
		title: "Lorem ipsum 7",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil doloremque earum doloribus, veniam provident exercitationem sed iste voluptates quos ullam hic, illo in repellat. Incidunt aut ipsum a ut!",
		img: "https://images.pexels.com/photos/12389111/pexels-photo-12389111.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
	},
	{
		id: 8,
		title: "Lorem ipsum 8",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil doloremque earum doloribus, veniam provident exercitationem sed iste voluptates quos ullam hic, illo in repellat. Incidunt aut ipsum a ut!",
		img: "data:image/jpeg;base64,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"
	},
	{
		id: 9,
		title: "Lorem ipsum 9",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil doloremque earum doloribus, veniam provident exercitationem sed iste voluptates quos ullam hic, illo in repellat. Incidunt aut ipsum a ut!",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl7K-gh7TAEobrveyTZ6lblkl_OihuiP9Kzg&usqp=CAU"
	},
];

const Homepage = () => {
	return (
		<div className='home'>
			<div className='posts'>
				{posts.map((post)=>(
					<div className='post' key={post.id}>
						<div className="img">
							<img src={post.img} alt="" />
							
						</div>
						<div className="content">
							<Link className='link' to={`/post/${post.id}`}>
							<h1>{post.title}</h1>
							</Link>
							<p>{post.description}</p>
							<button>Read More</button>
							
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Homepage
