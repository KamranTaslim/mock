"use client"
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Menu, X, Search, ChevronDown, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import categories from "./data/HeaderCategory"
// Mock categories data - replace with your actual categories import

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState("bank");
  const [expandedMobileCategory, setExpandedMobileCategory] = useState(null);

  const handleSearchClick = () => {
    setIsSearchActive(true);
    setIsMenuOpen(false);
  };

  const handleSearchClose = () => {
    setIsSearchActive(false);
    setSearchQuery("");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Add your search logic here
    }
  };

  const handleCategoryHover = (category) => setActiveCategory(category);

  const toggleMobileCategory = (categoryKey) => 
    setExpandedMobileCategory(expandedMobileCategory === categoryKey ? null : categoryKey);

  // Animation variants for mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const hamburgerVariants = {
    closed: {
      rotate: 0,
      scale: 1
    },
    open: {
      rotate: 180,
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <>
      <style jsx>{`
        .dropdown-content { 
          position: absolute; 
          top: 100%; 
          left: -200px; 
          background-color: white; 
          min-width: 800px; 
          box-shadow: 0 8px 16px rgba(17, 45, 78, 0.15); 
          border-radius: 12px; 
          z-index: 1000; 
          margin-top: 8px; 
          overflow: hidden; 
          animation: dropdownFade 0.3s ease; 
        }
        @keyframes dropdownFade { 
          from { opacity: 0; transform: translateY(-10px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .categories-layout { display: flex; min-height: 400px; }
        .categories-sidebar { 
          width: 240px; 
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); 
          border-right: 1px solid #e2e8f0; 
          overflow-y: auto; 
          max-height: 400px; 
        }
        .category-sidebar-item { 
          display: flex; 
          align-items: center; 
          padding: 12px 16px; 
          border-left: 3px solid transparent; 
          border-bottom: 1px solid #e2e8f0; 
          cursor: pointer; 
          transition: all 0.2s ease; 
        }
        .category-sidebar-item:hover, .category-sidebar-item.active { 
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); 
          border-left-color: #3b82f6; 
          box-shadow: 0 2px 4px rgba(59, 130, 246, 0.1);
        }
        .category-icon { 
          margin-right: 12px; 
          font-size: 1.1rem; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          width: 24px; 
          height: 24px; 
          color: #475569; 
        }
        .category-name { 
          flex: 1; 
          font-size: 0.9rem; 
          color: #334155; 
          font-weight: 500; 
        }
        .category-arrow { 
          margin-left: auto; 
          color: #94a3b8; 
          font-size: 1rem; 
          transition: transform 0.2s ease; 
        }
        .category-sidebar-item:hover .category-arrow { 
          transform: translateX(3px); 
          color: #3b82f6; 
        }
        .category-exams { 
          flex: 1; 
          padding: 20px; 
          background: linear-gradient(135deg, #ffffff 0%, #fefefe 100%); 
          overflow-y: auto; 
        }
        .exam-grid { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          gap: 10px; 
          padding: 4px; 
        }
        
        @media (max-width: 1024px) { 
          .dropdown-content { min-width: 600px; left: -150px; } 
          .exam-grid { grid-template-columns: repeat(2, 1fr); } 
        }
        @media (max-width: 768px) { 
          .dropdown-content { min-width: 400px; left: -100px; }
          .categories-sidebar { width: 180px; }
          .exam-grid { grid-template-columns: repeat(1, 1fr); }
        }
           .mobile-exam-item {
          display: flex;
          align-items: center;
          padding: 12px 15px;
          margin: 5px 0;
          background-color: rgba(59, 130, 246, 0.1);
          border-radius: 8px;
          transition: all 0.3s ease;
          color: #1f2937;
          text-decoration: none;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
        .mobile-exam-item:hover {
          background-color: rgba(59, 130, 246, 0.15);
          transform: translateX(5px);
          border-color: rgba(59, 130, 246, 0.4);
        }
      `}</style>

      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Mobile Layout */}
            <div className="lg:hidden flex items-center justify-between w-full">
              <AnimatePresence mode="wait">
                {isSearchActive ? (
                  // Search Mode - Full width search
                  <motion.div 
                    key="search-mode"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center w-full"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSearchClose}
                      className="p-2 mr-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ArrowLeft size={20} className="text-gray-600" />
                    </motion.button>
                    <form onSubmit={handleSearchSubmit} className="flex-1 flex items-center">
                      <div className="relative flex-1">
                        <Input
                          type="text"
                          placeholder="Search mock tests, categories..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-4 pr-10 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          autoFocus
                        />
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          type="submit"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded"
                        >
                          <Search size={18} className="text-gray-500" />
                        </motion.button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  // Normal Mode - Hamburger + Logo + Search
                  <motion.div
                    key="normal-mode"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-between w-full"
                  >
                    <motion.button
                      variants={hamburgerVariants}
                      animate={isMenuOpen ? "open" : "closed"}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative overflow-hidden"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <motion.div
                        animate={{ rotate: isMenuOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {isMenuOpen ? (
                          <X size={24} className="text-gray-700" />
                        ) : (
                          <Menu size={24} className="text-gray-700" />
                        )}
                      </motion.div>
                      {/* Ripple effect */}
                      <motion.div
                        className="absolute inset-0 bg-blue-500/20 rounded-lg"
                        initial={{ scale: 0, opacity: 0 }}
                        whileTap={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.button>
                    
                    <motion.div 
                      variants={logoVariants}
                      initial="hidden"
                      animate="visible"
                      className="absolute left-1/2 transform -translate-x-1/2"
                    >
                      <motion.span 
                        className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        MockCenter
                      </motion.span>
                    </motion.div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSearchClick}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative overflow-hidden"
                    >
                      <Search size={24} className="text-gray-700" />
                      {/* Ripple effect */}
                      <motion.div
                        className="absolute inset-0 bg-purple-500/20 rounded-lg"
                        initial={{ scale: 0, opacity: 0 }}
                        whileTap={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-between w-full">
              {/* Logo */}
              <div className="flex items-center">
                <motion.span 
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  MockCenter
                </motion.span>
              </div>

              {/* Desktop Navigation */}
              <nav className="flex items-center space-x-8">
                <motion.a 
                  href="#home" 
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Home
                </motion.a>
                
                {/* Exam Categories Dropdown */}
                <div className="relative group">
                  <motion.button 
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setShowCategoriesDropdown(true)}
                  >
                    Exam Categories
                    <ChevronDown size={16} className="ml-1" />
                  </motion.button>
                  
                  {showCategoriesDropdown && (
                    <div
                      className="dropdown-content"
                      onMouseLeave={() => setShowCategoriesDropdown(false)}
                    >
                      <div className="categories-layout">
                        <div className="categories-sidebar">
                          {Object.entries(categories).map(([key, category]) => (
                            <div
                              key={key}
                              className={`category-sidebar-item ${
                                activeCategory === key ? "active" : ""
                              }`}
                              onMouseEnter={() => handleCategoryHover(key)}
                            >
                              <span className="category-icon">{category.icon}</span>
                              <span className="category-name">{category.name}</span>
                              <span className="category-arrow">›</span>
                            </div>
                          ))}
                        </div>
                        <div className="category-exams">
                          <div className="exam-grid">
                            {categories[activeCategory]?.exams.map((exam, index) => (
                              <a
                                key={index}
                                href={`/exams/${activeCategory}/${exam.name
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="flex items-center p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 text-gray-800 no-underline transition-all duration-200 h-12 shadow-sm hover:from-blue-50 hover:to-purple-50 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-200"
                              >
                                <span className="flex items-center justify-center w-7 h-7 mr-3 rounded bg-white border border-gray-200 overflow-hidden transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 hover:scale-105">
                                  {exam.imageSrc ? (
                                    <img
                                      src={exam.imageSrc}
                                      alt={`${exam.name} logo`}
                                      className="w-4 h-4 object-contain"
                                      loading="lazy"
                                    />
                                  ) : (
                                    <span className="text-sm">{exam.icon}</span>
                                  )}
                                </span>
                                <span className="text-sm font-medium text-gray-700 transition-colors duration-200 flex-1 leading-tight hover:text-blue-700">
                                  {exam.name}
                                </span>
                                <span className="ml-auto text-gray-400 text-sm transition-all duration-200 opacity-70 font-normal hover:translate-x-0.5 hover:opacity-100 hover:text-blue-500">›</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative group">
                  <motion.button 
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    Mock Tests
                    <ChevronDown size={16} className="ml-1" />
                  </motion.button>
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <a href="#free-tests" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-t-lg">Free Tests</a>
                    <a href="#practice-tests" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Practice Tests</a>
                    <a href="#previous-papers" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-b-lg">Previous Papers</a>
                  </div>
                </div>
                <motion.a 
                  href="#blog" 
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Blog
                </motion.a>
                <motion.a 
                  href="#challenge" 
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Challenge Arena
                </motion.a>
              </nav>

              {/* Desktop Search and User Section */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search mock tests, categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-72 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 btn-ripple">
                    Search
                  </Button>
                </motion.div>
                <motion.div 
                  className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-white text-sm font-medium">MC</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMenuOpen && !isSearchActive && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="lg:hidden border-t border-gray-200/50 overflow-hidden"
              >
                <motion.div className="py-4">
                  <nav className="flex flex-col space-y-1">
                    <motion.a 
                      variants={menuItemVariants}
                      href="#home" 
                      className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-3 px-4 rounded-lg font-medium group"
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ x: 5 }}
                    >
                      <motion.span className="flex items-center" whileHover={{ scale: 1.02 }}>
                        🏠 Home
                      </motion.span>
                    </motion.a>
                    
                    {/* Mobile Categories Section */}
                    <motion.div variants={menuItemVariants} className="py-2">
                      <motion.div className="w-full">
                        <button
                          className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-200 text-gray-700 rounded-lg cursor-pointer font-medium hover:bg-gray-100 hover:border-gray-300 transition-all duration-300"
                          onClick={() => setShowCategoriesDropdown(!showCategoriesDropdown)}
                        >
                          📚 Exam Categories
                          <span className={`text-sm transform transition-transform duration-300 ${showCategoriesDropdown ? 'rotate-180' : ''}`}>
                            ▼
                          </span>
                        </button>
                        
                        {showCategoriesDropdown && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-gray-50/50 rounded-lg mt-2 p-3 max-h-[400px] overflow-y-auto"
                          >
                            {Object.entries(categories).map(([key, category]) => (
                              <div key={key} className="mb-2">
                                <div
                                  className="flex items-center p-3 my-1 bg-white rounded-lg hover:bg-blue-50 hover:translate-x-1 transition-all duration-300 cursor-pointer shadow-sm border border-gray-100"
                                  onClick={() => toggleMobileCategory(key)}
                                >
                                  <span className="mr-3 text-lg">{category.icon}</span>
                                  <span className="text-gray-700 font-medium flex-1">{category.name}</span>
                                  <span className={`text-gray-500 text-sm transform transition-transform duration-300 ${expandedMobileCategory === key ? 'rotate-180' : ''}`}>
                                    ▼
                                  </span>
                                </div>
                                
                                {expandedMobileCategory === key && (
                                  <motion.div 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="bg-white/70 rounded-lg mt-1 p-2 ml-4 border-l-2 border-blue-200"
                                  >
                                    {category.exams.map((exam, examIndex) => (
                                      <a
                                        key={examIndex}
                                        href={`/exams/${key}/${exam.name
                                          .toLowerCase()
                                          .replace(/\s+/g, "-")}`}
                                        className="flex items-center p-3 my-1 bg-blue-50/50 rounded-lg hover:bg-blue-100/70 hover:translate-x-1 transition-all duration-300 text-gray-700 no-underline border border-blue-100/50"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        <span className="mr-3 text-sm flex items-center justify-center w-6 h-6 text-blue-600">
                                          {exam.imageSrc ? (
                                            <img
                                              src={exam.imageSrc}
                                              alt={`${exam.name} logo`}
                                              className="w-4 h-4 object-contain"
                                              loading="lazy"
                                            />
                                          ) : (
                                            exam.icon
                                          )}
                                        </span>
                                        <span className="text-gray-700 font-medium text-sm flex-1">
                                          {exam.name}
                                        </span>
                                        <span className="ml-auto text-gray-400 text-xs opacity-70">›</span>
                                      </a>
                                    ))}
                                  </motion.div>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </motion.div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={menuItemVariants} className="py-2">
                      <motion.h4 className="text-sm font-medium text-gray-500 px-4 mb-2">
                        QUICK LINKS
                      </motion.h4>
                      
                      {[
                        { href: "#mock-tests", emoji: "📝", text: "Mock Tests" },
                        { href: "#challenge", emoji: "🏆", text: "Challenge Arena" },
                        { href: "#blog", emoji: "📰", text: "Blog" }
                      ].map((item, index) => (
                        <motion.a 
                          key={item.href}
                          variants={menuItemVariants}
                          href={item.href}
                          className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-2 px-4 rounded-lg block group"
                          onClick={() => setIsMenuOpen(false)}
                          whileHover={{ x: 8 }}
                        >
                          <motion.span whileHover={{ scale: 1.05 }} className="flex items-center">
                            {item.emoji} {item.text}
                          </motion.span>
                        </motion.a>
                      ))}
                    </motion.div>

                    {/* User Section */}
                    <motion.div 
                      variants={menuItemVariants}
                      className="pt-4 border-t border-gray-200/50 mt-2"
                    >
                      <div className="px-4">
                        <motion.div className="flex items-center space-x-3 mb-4">
                          <motion.div 
                            className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center"
                            whileHover={{ rotate: 10, scale: 1.1 }}
                          >
                            <span className="text-white font-medium">MC</span>
                          </motion.div>
                          <div>
                            <div className="font-medium text-gray-900">MockCenter User</div>
                            <div className="text-sm text-gray-500">Free Account</div>
                          </div>
                        </motion.div>
                        <Button 
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Start Mock Test
                        </Button>
                      </div>
                    </motion.div>
                  </nav>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}