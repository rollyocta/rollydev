import React from 'react'

const Footer = () => {
  return (
    <>
     {/* Footer */}
      <footer className="py-12 border-t border-slate-800 text-center text-slate-500">
        <p className="text-sm">© {new Date().getFullYear()} RollyDev Portfolio.</p>
      </footer> 
    </>
  )
}

export default Footer
