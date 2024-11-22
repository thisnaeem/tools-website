export default function Navbar() {
  const navItems = [
    { name: 'Templates', href: '#templates' },
    { name: 'Graphics', href: '#graphics' },
    { name: 'WordPress', href: '#wordpress' },
    { name: 'Source Code', href: '#source' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <span className="font-mono text-white">DevResources</span>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 