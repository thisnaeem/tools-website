type PaginationProps = {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  onPageChange: (page: number) => void
}

export default function Pagination({ 
  totalItems, 
  itemsPerPage, 
  currentPage, 
  onPageChange 
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex justify-center space-x-2 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2  border border-white/10 
                 text-gray-400 hover:text-white hover:border-white/20 
                 disabled:opacity-50 disabled:hover:border-white/10 
                 disabled:hover:text-gray-400 transition-colors"
      >
        Previous
      </button>
      
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2  border 
                    ${currentPage === page 
                      ? 'border-white text-white' 
                      : 'border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                    } transition-colors`}
        >
          {page}
        </button>
      ))}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 border border-white/10 
                 text-gray-400 hover:text-white hover:border-white/20 
                 disabled:opacity-50 disabled:hover:border-white/10 
                 disabled:hover:text-gray-400 transition-colors"
      >
        Next
      </button>
    </div>
  )
} 