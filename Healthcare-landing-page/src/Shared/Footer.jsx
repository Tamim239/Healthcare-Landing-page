import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6'
import logoLight from '../assets/logo light.png'

export const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-[#020043] text-white">
	<div className=" w-4/5 mx-auto container flex flex-col justify-between py-20 space-y-8 lg:flex-row lg:space-y-0 ">
		<div className="lg:w-1/3">
			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
				<div className="flex items-center justify-center  rounded-full dark:bg-violet-600">
					<img src={logoLight} alt="" className=''/>
				</div>
			</a>
      <p className='pt-5'>123 Main Street Anytown, USA <br /> Postal Code: 12345 <br /> <br />

Support: support@oyolloo.com <br />
(Available : 10:00am to 07:00pm)</p>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
			<div className="space-y-3">
				<ul className="space-y-3">
					<li>
						<a rel="noopener noreferrer" href="#">Home</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">About Us</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Success Page</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms and Condition</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<ul className="space-y-3">
					<li>
						<a rel="noopener noreferrer" href="#">Services</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Scheduling</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Contact Us</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Patient Portal</a>
					</li>
				</ul>
			</div>
			<div className="space-y-4">
				<div>Follow Us</div>
				<div className="flex justify-start space-x-3">
					<a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
						<FaFacebook className="w-5 h-5 fill-current"/>
					</a>
					<a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
						<FaInstagram className="w-5 h-5 fill-current"/>
					</a>
					<a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
						<FaLinkedin className="w-5 h-5 fill-current"/>
					</a>
					<a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
						<FaYoutube className="w-5 h-5 fill-current"/>
					</a>

				</div>
          <p>@docplus 2024</p>
			</div>
		</div>
	</div>
</footer>
  )
}
