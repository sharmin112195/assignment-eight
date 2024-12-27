

const Footer = () => {
    return (
        <>
              <div className="text-center  mx-auto space-y-4 my-4 overflow-hidden">
        <h2 className="text-4xl font-semibold">Gadget Heaven</h2>
        <h2 className=" mx-auto text-gray-500">
          Leading the way in cutting-edge technology and innovation.
        </h2>
        <hr />
      </div>

      <footer className="flex md:justify-evenly items-center space-y-4 justify-center flex-col md:flex-row mx-auto my-5">
        <nav className="flex flex-col">
          <h6 className="font-semibold text-xl mb-2">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="font-semibold text-xl mb-2">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="font-semibold text-xl mb-2">Terms of Service</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </footer>

</>
    );
};

export default Footer;











