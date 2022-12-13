import React from 'react'
import { Link } from 'react-router-dom'


const Single = () =>{
	return (
		<div className='single'>
			<div className='content'>
				<img src='https://heraldodemexico.com.mx/u/fotografias/m/2022/2/18/f850x638-479897_557386_5050.jpg' alt=''/>
				<div className='user'>
					<img src='https://images.pexels.com/photos/3822943/pexels-photo-3822943.png?auto=compress&cs=tinysrgb&w=1600' alt=''/>
				<div className="info">
					<span>BetoDev</span>
					<p>Posted 12 days ago...</p>
				</div>
				<div className='edit'>					
					<Link to={`/write?edit=2`}>
						<img src="https://www.pngfind.com/pngs/m/202-2022234_png-file-svg-edit-delete-icon-png-transparent.png" alt="" />
					</Link>
					<img src="https://www.pngitem.com/pimgs/m/31-314793_free-delete-icon-png-edit-and-delete-icons.png" alt="" />
				</div>
				</div>
				<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1> <br />
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <p>Ea, beatae neque vero accusantium eius obcaecati labore ullam voluptates deserunt, alias quis corrupti dolore, quia repellat vitae quae ut quos sit.
					<br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, beatae neque vero accusantium eius obcaecati labore ullam voluptates deserunt, alias quis corrupti dolore, quia repellat vitae quae ut quos sit. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, beatae neque vero accusantium eius obcaecati labore ullam voluptates deserunt, alias quis corrupti dolore, quia repellat vitae quae ut quos sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, beatae neque vero accusantium eius obcaecati labore ullam voluptates deserunt, alias quis corrupti dolore, quia repellat vitae quae ut quos sit. <br /> <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, beatae neque vero accusantium eius obcaecati labore ullam voluptates deserunt, alias quis corrupti dolore, quia repellat vitae quae ut quos sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, beatae neque vero accusantium eius obcaecati labore ullam voluptates deserunt, alias quis corrupti dolore, quia repellat vitae quae ut quos sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, beatae neque vero accusantium eius obcaecati labore ullam voluptates deserunt, alias quis corrupti dolore, quia repellat vitae quae ut quos sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, beatae neque vero accusantium eius obcaecati labore ullam voluptates deserunt, alias quis corrupti dolore, quia repellat vitae quae ut quos sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, beatae neque vero accusantium eius obcaecati labore ullam voluptates deserunt, alias quis corrupti dolore, quia repellat vitae quae ut quos sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, beatae neque vero accusantium eius obcaecati labore ullam voluptates deserunt, alias quis corrupti dolore, quia repellat vitae quae ut quos sit.
					</p>
					</p>
			</div>
			<div className='menu'>m</div>
		</div>
	)
}

export default Single
