import Link from 'next/link'

export default function Footer() {
  const footerSections = [
    {
      title: 'Resources',
      links: [
        { name: 'Templates', href: '#templates' },
        { name: 'Graphics', href: '#graphics' },
        { name: 'WordPress', href: '#wordpress' },
        { name: 'Source Code', href: '#source' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'License', href: '#' },
      ]
    }
  ]

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="font-mono text-white text-lg">DevResources</span>
            <p className="mt-4 text-sm text-gray-400">
              High-quality resources for developers and designers.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} DevResources. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 