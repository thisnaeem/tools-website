'use client'

import { useState } from "react";
import TabSwitch from "./TabSwitch";
import Pagination from "./Pagination";
import Image from "next/image";

type Item = {
  name: string
  description: string
  downloads?: string
  stars?: string
  repo?: string
  preview?: string
  logo?: string
}


const ITEMS_PER_PAGE = 9

export default function ToolsList() {
  const [activeTab, setActiveTab] = useState('templates')
  const [currentPage, setCurrentPage] = useState(1)

  const categoryContent: Record<string, { title: string; items: Item[] }> = {
    templates: {
      title: 'Templates',
      items: [
        {
          name: 'Portfolio Pro',
          description: 'Modern portfolio template',
          downloads: '2,341',
          preview: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&auto=format&fit=crop'
        },
        {
          name: 'Dashboard Kit',
          description: 'Admin dashboard template',
          downloads: '1,892',
          preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop'
        },
        {
          name: 'E-commerce Starter',
          description: 'Complete e-commerce template',
          downloads: '3,456',
          preview: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop'
        },
        {
          name: 'E-commerce Starter',
          description: 'Complete e-commerce template',
          downloads: '3,456',
          preview: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop'
        },
        {
          name: 'E-commerce Starter',
          description: 'Complete e-commerce template',
          downloads: '3,456',
          preview: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop'
        },
        {
          name: 'E-commerce Starter',
          description: 'Complete e-commerce template',
          downloads: '3,456',
          preview: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop'
        },
        {
          name: 'E-commerce Starter',
          description: 'Complete e-commerce template',
          downloads: '3,456',
          preview: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop'
        },
        {
          name: 'E-commerce Starter',
          description: 'Complete e-commerce template',
          downloads: '3,456',
          preview: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop'
        },
        {
          name: 'E-commerce Starter',
          description: 'Complete e-commerce template',
          downloads: '3,456',
          preview: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop'
        },
        {
          name: 'E-commerce Starter',
          description: 'Complete e-commerce template',
          downloads: '3,456',
          preview: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop'
        },
        {
          name: 'E-commerce Starter',
          description: 'Complete e-commerce template',
          downloads: '3,456',
          preview: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop'
        },
        {
          name: 'E-commerce Starter',
          description: 'Complete e-commerce template',
          downloads: '3,456',
          preview: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop'
        },
        {
          name: 'E-commerce Starter',
          description: 'Complete e-commerce template',
          downloads: '3,456',
          preview: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop'
        },
        {
          name: 'E-commerce Starter',
          description: 'Complete e-commerce template',
          downloads: '3,456',
          preview: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop'
        },
      ]
    },
    graphics: {
      title: 'Graphics',
      items: [
        {
          name: 'UI Kit Essential',
          description: 'Complete UI design system',
          downloads: '5,677',
          preview: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop'
        },
        {
          name: 'Icon Pack Pro',
          description: '500+ vector icons',
          downloads: '4,233',
          preview: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop'
        }
      ]
    },
    wordpress: {
      title: 'WordPress Themes',
      items: [
        {
          name: 'Business Pro',
          description: 'Professional WordPress theme',
          downloads: '3,455',
          preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop'
        },
        {
          name: 'Blog Master',
          description: 'Premium blog theme',
          downloads: '2,788',
          preview: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop'
        },
        {
          name: 'Blog Master',
          description: 'Premium blog theme',
          downloads: '2,788',
          preview: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop'
        },
        {
          name: 'Blog Master',
          description: 'Premium blog theme',
          downloads: '2,788',
          preview: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop'
        },
        {
          name: 'Blog Master',
          description: 'Premium blog theme',
          downloads: '2,788',
          preview: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop'
        },
        {
          name: 'Blog Master',
          description: 'Premium blog theme',
          downloads: '2,788',
          preview: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop'
        },
        {
          name: 'Blog Master',
          description: 'Premium blog theme',
          downloads: '2,788',
          preview: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop'
        },
        {
          name: 'Blog Master',
          description: 'Premium blog theme',
          downloads: '2,788',
          preview: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop'
        },
        {
          name: 'Blog Master',
          description: 'Premium blog theme',
          downloads: '2,788',
          preview: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop'
        },
        {
          name: 'Blog Master',
          description: 'Premium blog theme',
          downloads: '2,788',
          preview: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop'
        },
      ]
    },
    source: {
      title: 'Source Code',
      items: [
        {
          name: 'React Components',
          description: 'UI Component Library',
          repo: 'user/react-components',
          stars: '12,181',
          logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&auto=format&fit=crop'
        },
        {
          name: 'Vue Utils',
          description: 'Utility functions for Vue',
          repo: 'user/vue-utils',
          stars: '8,432',
          logo: 'https://images.unsplash.com/photo-1661961111184-11317b40adb2?w=200&auto=format&fit=crop'
        },
        {
          name: 'Vue Utils',
          description: 'Utility functions for Vue',
          repo: 'user/vue-utils',
          stars: '8,432',
          logo: 'https://images.unsplash.com/photo-1661961111184-11317b40adb2?w=200&auto=format&fit=crop'
        },
        {
          name: 'Vue Utils',
          description: 'Utility functions for Vue',
          repo: 'user/vue-utils',
          stars: '8,432',
          logo: 'https://images.unsplash.com/photo-1661961111184-11317b40adb2?w=200&auto=format&fit=crop'
        },
        {
          name: 'Vue Utils',
          description: 'Utility functions for Vue',
          repo: 'user/vue-utils',
          stars: '8,432',
          logo: 'https://images.unsplash.com/photo-1661961111184-11317b40adb2?w=200&auto=format&fit=crop'
        },
        {
          name: 'Vue Utils',
          description: 'Utility functions for Vue',
          repo: 'user/vue-utils',
          stars: '8,432',
          logo: 'https://images.unsplash.com/photo-1661961111184-11317b40adb2?w=200&auto=format&fit=crop'
        },
        {
          name: 'Vue Utils',
          description: 'Utility functions for Vue',
          repo: 'user/vue-utils',
          stars: '8,432',
          logo: 'https://images.unsplash.com/photo-1661961111184-11317b40adb2?w=200&auto=format&fit=crop'
        },
        {
          name: 'Vue Utils',
          description: 'Utility functions for Vue',
          repo: 'user/vue-utils',
          stars: '8,432',
          logo: 'https://images.unsplash.com/photo-1661961111184-11317b40adb2?w=200&auto=format&fit=crop'
        },
        {
          name: 'Vue Utils',
          description: 'Utility functions for Vue',
          repo: 'user/vue-utils',
          stars: '8,432',
          logo: 'https://images.unsplash.com/photo-1661961111184-11317b40adb2?w=200&auto=format&fit=crop'
        },
        {
          name: 'Vue Utils',
          description: 'Utility functions for Vue',
          repo: 'user/vue-utils',
          stars: '8,432',
          logo: 'https://images.unsplash.com/photo-1661961111184-11317b40adb2?w=200&auto=format&fit=crop'
        },
        {
          name: 'Vue Utils',
          description: 'Utility functions for Vue',
          repo: 'user/vue-utils',
          stars: '8,432',
          logo: 'https://images.unsplash.com/photo-1661961111184-11317b40adb2?w=200&auto=format&fit=crop'
        },
        {
          name: 'Vue Utils',
          description: 'Utility functions for Vue',
          repo: 'user/vue-utils',
          stars: '8,432',
          logo: 'https://images.unsplash.com/photo-1661961111184-11317b40adb2?w=200&auto=format&fit=crop'
        },
      ]
    }
  }

  const currentCategory = categoryContent[activeTab]
  const totalItems = currentCategory.items.length
  
  // Calculate pagination
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE
  const currentItems = currentCategory.items.slice(indexOfFirstItem, indexOfLastItem)

  // Reset page when tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setCurrentPage(1)
  }

  return (
    <div className="py-12">
      <TabSwitch activeTab={activeTab} onTabChange={handleTabChange} />
      
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold text-white mb-12">{currentCategory.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="group relative bg-white/5  p-6 
                       hover:bg-white/10 transition-all duration-300 
                       border border-white/10 hover:border-white/20"
            >
              <div className="relative z-10">
                {item.logo && (
                  <div className="h-12 mb-6">
                    <Image 
                      src={item.logo} 
                      alt={item.name}
                      width={48}
                      height={48}
                      className="rounded"
                    />
                  </div>
                )}
                {item.preview && (
                  <div className="aspect-video mb-6 overflow-hidden ">
                    <Image 
                      src={item.preview} 
                      alt={item.name}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transform 
                               group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  {item.repo && (
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                      </svg>
                      {item.repo}
                    </div>
                  )}
                  {item.downloads && (
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      {item.downloads}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Pagination
          totalItems={totalItems}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  )
}
 