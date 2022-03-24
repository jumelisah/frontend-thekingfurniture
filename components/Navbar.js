import Link from "next/link";
import Image from 'next/image'
import styles from './styles/Navbar.module.css'
import { useRouter } from "next/router";
import { BiSearchAlt2, BiHeart, BiCartAlt } from 'react-icons/bi';

const Navbar = () => {
  const route = useRouter();

  const searchBtn = (e) => {
    e.preventDefault()
    const input = document.getElementById('formSearch')
    if (input.style.display === 'block') {
      input.style.display = 'none'
    } else {
    input.style.display = 'block'
    }
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-color1 fixed-top">
      <div className={`container ${styles.layout}`}>
        <Link href='/'>
          <a>
            <Image layout='intrinsic' alt='logo' src='/images/logo.png' width={70} height={70} />
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto my-0 my-lg-auto align-items-lg-center mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href='/'>
                <a className={`${route.pathname === '/' && 'active'}nav-link fw-bold fs-5`} aria-current="page">HOME</a>
              </Link>
            </li>
            <li className="nav-item dropdown ms-lg-3">
              <Link href='/'>
                <a className="nav-link dropdown-toggle fw-bold fs-5" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PAGES
                </a>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {[...Array(4)].map((data, index) => {
                  return(
                    <li key={index}>
                      <Link href='/'>
                        <a className="dropdown-item">pages</a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
            <li className="nav-item dropdown mx-lg-3">
              <Link href='/'>
                <a className="nav-link dropdown-toggle fw-bold fs-5" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  SHOP
                </a>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {[...Array(4)].map((data, index) => {
                  return(
                    <li key={index}>
                      <Link href='/'>
                        <a className="dropdown-item">shop {index + 1}</a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
            <li>
              <Link href='/blog'>
                <a className="fw-bold fs-5">
                  BLOG
                </a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li  onClick={searchBtn} className="nav-item d-flex flex-row align-items-center">
              <button className="btn" type="submit">
                <BiSearchAlt2 className="fs-2 text-white"/>
              </button>
              <form id="formSearch" className={styles.formSearch}>
                <input className="form-control bg-white text-white text-center" />
              </form>
            </li>
            <li className="nav-item">
              <button className="btn position-relative ms-lg-1">
                <BiHeart className="fs-2 text-white"/>
                <div className={`bg-white position-absolute text-white rounded-circle ${styles.notif}`}>10</div>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn position-relative mx-lg-1">
                <BiCartAlt className="fs-2 text-white"/>
                <div className={`bg-white position-absolute text-white rounded-circle ${styles.notif}`}>10</div>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn position-relative mx-lg-3 bg-white">
                <Image src='/images/menu.png' layout='intrinsic' alt='menu' width={25} height={25} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   </>
  )
}

export default Navbar;
