import Link from 'next/link'
import {
  Github,
  Home,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  Twitter,
  User,
} from 'lucide-react'

const NavButton = ({ x, y, label, link, icon, newTab }) => {
  const getIcon = (icon) => {
    switch (icon) {
      case 'home':
        return (
          <Home
            className='w-full h-auto'
            strokeWidth={1.5}
          />
        )
      case 'about':
        return (
          <User
            className='w-full h-auto'
            strokeWidth={1.5}
          />
        )
      case 'projects':
        return (
          <Palette
            className='w-full h-auto'
            strokeWidth={1.5}
          />
        )
      case 'contact':
        return (
          <Phone
            className='w-full h-auto'
            strokeWidth={1.5}
          />
        )
      case 'github':
        return (
          <Github
            className='w-full h-auto'
            strokeWidth={1.5}
          />
        )
      case 'linkedin':
        return (
          <Linkedin
            className='w-full h-auto'
            strokeWidth={1.5}
          />
        )
      case 'twitter':
        return (
          <Twitter
            className='w-full h-auto'
            strokeWidth={1.5}
          />
        )
      case 'resume':
        return (
          <NotebookText
            className='w-full h-auto'
            strokeWidth={1.5}
          />
        )

      default:
        return (
          <Home
            className='w-full h-auto'
            strokeWidth={1.5}
          />
        )
    }
  }
  return (
    <div
      className='absolute cursor-pointer z-50'
      style={{ transform: `translate(${x}px,${y}px)` }}>
      <Link
        href={link}
        target={newTab ? '_blank' : '_self'}
        className='text-foreground rounded-full flex items-center justify-center cursor-pointer '
        aria-label={label}
        name={label}>
        <span>{getIcon(icon)}</span>
      </Link>
    </div>
  )
}

export default NavButton
