
import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
      <div className='container'>
        <div className='flex w-fit gap-10 mx-auto font-bold py-4 text-accent'>
          <a className='navbar__link relative' href='#'>HOME</a>

          {/* <a className='navbar__link relative' href='#'>CATEGORIES</a> */}
          <a className="navbar__link" href="#categories">CATEGORIES</a>


          {/* <a className='navbar__link relative' href='#'>HIJAB</a> */}

          <a className='navbar__link' href='#abayas'>ABAYAS</a>

          <a className='navbar__link' href='#hijab'>HIJAB BUNDLES</a>

        <a className='navbar__link relative' href='#deals'>HOT DEALS</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar