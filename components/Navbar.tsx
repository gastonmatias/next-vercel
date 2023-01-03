import { ActiveLink } from "./ActiveLink"
import style from './navbar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={style.menu}>
        
        {menuItems.map((e) => (
          <ActiveLink 
            key={e.text}
            text={e.text} 
            href={e.href} 
            />
        ))}
        
    </nav>
  )
}