'use client'

type Tab = {
  id: string
  name: string
}

const tabs: Tab[] = [
  { id: 'templates', name: 'Templates' },
  { id: 'graphics', name: 'Graphics' },
  { id: 'wordpress', name: 'WordPress' },
  { id: 'source', name: 'Source Code' }
]

export default function TabSwitch({ activeTab, onTabChange }: { 
  activeTab: string, 
  onTabChange: (tab: string) => void 
}) {
  return (
    <div className="border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap
                ${activeTab === tab.id
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                }
                transition-colors duration-200
              `}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
} 