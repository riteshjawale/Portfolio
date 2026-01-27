import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import FloatingCTA from '../../components/ui/FloatingCTA';
import Icon from '../../components/AppIcon';
import BlogCard from './components/BlogCard';
import FeaturedArticle from './components/FeaturedArticle';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import NewsletterSection from './components/NewsletterSection';
import PopularTopics from './components/PopularTopics';
import RecentArticles from './components/RecentArticles';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);

  const categories = [
  { value: 'all', label: 'All Articles', icon: 'Grid3x3', count: 24 },
  { value: 'tutorials', label: 'Tutorials', icon: 'BookOpen', count: 12 },
  { value: 'insights', label: 'Insights', icon: 'Lightbulb', count: 8 },
  { value: 'opensource', label: 'Open Source', icon: 'Github', count: 4 }];


  const featuredArticle = {
    id: 'featured-1',
    title: "Building Scalable React Applications: A Complete Architecture Guide",
    excerpt: "Dive deep into modern React architecture patterns, state management strategies, and performance optimization techniques that power production-grade applications. Learn how to structure your codebase for long-term maintainability and team collaboration.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12225c17b-1765211045033.png",
    imageAlt: "Modern developer workspace with dual monitors displaying React code and component architecture diagrams on dark themed IDE",
    category: "Tutorial",
    categoryIcon: "BookOpen",
    categoryColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    author: "Ritesh Chen",
    authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1a40ad7b3-1763293582906.png",
    authorAvatarAlt: "Professional headshot of Asian male developer with short black hair wearing navy blue shirt and glasses",
    date: "2026-01-08",
    dateFormatted: "Jan 8, 2026",
    readTime: "12 min",
    tags: ["React", "Architecture", "Best Practices"]
  };

  const articles = [
  {
    id: 'article-1',
    title: "Mastering TypeScript: Advanced Type Patterns for React Developers",
    excerpt: "Explore advanced TypeScript patterns including conditional types, mapped types, and utility types that will elevate your React development experience and catch bugs before they reach production.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1053029aa-1766568263280.png",
    imageAlt: "Close-up of TypeScript code on computer screen showing complex type definitions and interfaces with syntax highlighting",
    category: "Tutorial",
    categoryIcon: "BookOpen",
    categoryColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    author: "Sarah Martinez",
    authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b3335386-1763298777514.png",
    authorAvatarAlt: "Professional portrait of Hispanic female developer with long brown hair in white blouse smiling confidently",
    date: "2026-01-06",
    dateFormatted: "Jan 6, 2026",
    readTime: "10 min",
    tags: ["TypeScript", "React", "Types"]
  },
  {
    id: 'article-2',
    title: "The Future of Web Development: What\'s Coming in 2026",
    excerpt: "Industry analysis of emerging trends including WebAssembly adoption, edge computing, AI-assisted development, and the evolution of JavaScript frameworks that will shape how we build web applications.",
    image: "https://images.unsplash.com/photo-1649682892309-e10e0b7cd40b",
    imageAlt: "Futuristic digital technology concept with glowing blue circuit board patterns and network connections on dark background",
    category: "Insights",
    categoryIcon: "Lightbulb",
    categoryColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    author: "Michael Roberts",
    authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d28c8c34-1763292298495.png",
    authorAvatarAlt: "Professional headshot of Caucasian male tech leader with short blonde hair in dark suit and tie",
    date: "2026-01-05",
    dateFormatted: "Jan 5, 2026",
    readTime: "8 min",
    tags: ["Trends", "Industry", "Future"]
  },
  {
    id: 'article-3',
    title: "Contributing to Open Source: A Beginner\'s Complete Guide",
    excerpt: "Step-by-step guide to making your first open source contribution, from finding the right project to submitting pull requests, understanding community guidelines, and building your developer reputation.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fd7ce6bd-1767096082672.png",
    imageAlt: "Diverse group of developers collaborating around laptop showing GitHub repository with pull requests and code reviews",
    category: "Open Source",
    categoryIcon: "Github",
    categoryColor: "bg-green-500/10 text-green-600 dark:text-green-400",
    author: "Emily Zhang",
    authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1891d604d-1763300022227.png",
    authorAvatarAlt: "Professional portrait of Asian female developer with short black hair wearing red sweater in casual office setting",
    date: "2026-01-04",
    dateFormatted: "Jan 4, 2026",
    readTime: "15 min",
    tags: ["Open Source", "GitHub", "Community"]
  },
  {
    id: 'article-4',
    title: "Performance Optimization: Making Your React App Lightning Fast",
    excerpt: "Comprehensive guide to React performance optimization covering code splitting, lazy loading, memoization, virtual scrolling, and profiling tools to identify and eliminate bottlenecks in your application.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_120803e5a-1764651524476.png",
    imageAlt: "Computer screen displaying performance metrics dashboard with graphs showing load times and optimization statistics",
    category: "Tutorial",
    categoryIcon: "BookOpen",
    categoryColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    author: "David Kim",
    authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_13d2a71e4-1763293053693.png",
    authorAvatarAlt: "Professional headshot of Korean male developer with black hair and glasses wearing casual gray t-shirt",
    date: "2026-01-03",
    dateFormatted: "Jan 3, 2026",
    readTime: "14 min",
    tags: ["Performance", "React", "Optimization"]
  },
  {
    id: 'article-5',
    title: "State Management in 2026: Redux, Zustand, or Context API?",
    excerpt: "Detailed comparison of modern state management solutions, analyzing when to use each approach, performance implications, developer experience, and real-world use cases from production applications.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fec095dd-1766988591961.png",
    imageAlt: "Whiteboard diagram showing state management flow with Redux store, actions, and reducers connected by arrows",
    category: "Insights",
    categoryIcon: "Lightbulb",
    categoryColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    author: "Jessica Taylor",
    authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_151316034-1763295408985.png",
    authorAvatarAlt: "Professional portrait of Caucasian female developer with blonde hair in blue blazer presenting at tech conference",
    date: "2026-01-02",
    dateFormatted: "Jan 2, 2026",
    readTime: "11 min",
    tags: ["State Management", "Redux", "React"]
  },
  {
    id: 'article-6',
    title: "Building Accessible Web Applications: WCAG 2.2 Compliance Guide",
    excerpt: "Essential guide to web accessibility covering ARIA attributes, keyboard navigation, screen reader compatibility, color contrast, and automated testing tools to ensure your applications are usable by everyone.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b2759046-1764651526261.png",
    imageAlt: "Person using assistive technology with screen reader software displaying accessible web interface with high contrast",
    category: "Tutorial",
    categoryIcon: "BookOpen",
    categoryColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    author: "Marcus Johnson",
    authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e66e052e-1763296758737.png",
    authorAvatarAlt: "Professional headshot of African American male accessibility expert with short hair wearing green polo shirt",
    date: "2025-12-30",
    dateFormatted: "Dec 30, 2025",
    readTime: "13 min",
    tags: ["Accessibility", "WCAG", "Best Practices"]
  },
  {
    id: 'article-7',
    title: "Microservices Architecture: Lessons from Production Deployments",
    excerpt: "Real-world insights from implementing microservices at scale, covering service communication, data consistency, deployment strategies, monitoring, and common pitfalls to avoid in distributed systems.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17026ac76-1765244681454.png",
    imageAlt: "Network diagram showing microservices architecture with multiple interconnected service nodes and API gateways",
    category: "Insights",
    categoryIcon: "Lightbulb",
    categoryColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    author: "Rachel Anderson",
    authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_15fa68d8e-1763300113194.png",
    authorAvatarAlt: "Professional portrait of Caucasian female architect with red hair in black blazer at modern tech office",
    date: "2025-12-28",
    dateFormatted: "Dec 28, 2025",
    readTime: "16 min",
    tags: ["Microservices", "Architecture", "DevOps"]
  },
  {
    id: 'article-8',
    title: "GraphQL vs REST: Choosing the Right API Strategy for Your Project",
    excerpt: "In-depth comparison of GraphQL and REST APIs, analyzing query flexibility, performance characteristics, caching strategies, tooling ecosystem, and decision framework for selecting the right approach.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_191859e3f-1764684678401.png",
    imageAlt: "Split screen comparison showing GraphQL query structure on left and REST API endpoints on right with JSON responses",
    category: "Tutorial",
    categoryIcon: "BookOpen",
    categoryColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    author: "Thomas Lee",
    authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1895d9025-1763293667030.png",
    authorAvatarAlt: "Professional headshot of Asian male backend developer with glasses and short black hair in casual blue shirt",
    date: "2025-12-26",
    dateFormatted: "Dec 26, 2025",
    readTime: "12 min",
    tags: ["GraphQL", "REST", "API Design"]
  },
  {
    id: 'article-9',
    title: "My Journey Contributing to React Core: Behind the Scenes",
    excerpt: "Personal story of contributing to React's open source codebase, from understanding the contribution process to working with maintainers, code review experiences, and lessons learned from the React team.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fd7ce6bd-1767096082672.png",
    imageAlt: "Developer working on laptop with React logo sticker showing GitHub pull request interface with code changes",
    category: "Open Source",
    categoryIcon: "Github",
    categoryColor: "bg-green-500/10 text-green-600 dark:text-green-400",
    author: "Nina Patel",
    authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_11a4d8839-1763298800548.png",
    authorAvatarAlt: "Professional portrait of Indian female developer with long black hair wearing purple top smiling warmly",
    date: "2025-12-24",
    dateFormatted: "Dec 24, 2025",
    readTime: "9 min",
    tags: ["React", "Open Source", "Personal Story"]
  }];


  const popularTopics = [
  { name: "React", count: 156 },
  { name: "TypeScript", count: 142 },
  { name: "Performance", count: 98 },
  { name: "Architecture", count: 87 },
  { name: "Testing", count: 76 },
  { name: "Accessibility", count: 64 },
  { name: "State Management", count: 59 },
  { name: "GraphQL", count: 52 }];


  const recentArticles = articles?.slice(0, 5)?.map((article) => ({
    id: article?.id,
    title: article?.title,
    image: article?.image,
    imageAlt: article?.imageAlt,
    date: article?.date,
    dateFormatted: article?.dateFormatted,
    readTime: article?.readTime
  }));

  useEffect(() => {
    let filtered = articles;

    if (activeCategory !== 'all') {
      filtered = filtered?.filter((article) =>
      article?.category?.toLowerCase() === activeCategory
      );
    }

    if (searchQuery) {
      const query = searchQuery?.toLowerCase();
      filtered = filtered?.filter((article) =>
      article?.title?.toLowerCase()?.includes(query) ||
      article?.excerpt?.toLowerCase()?.includes(query) ||
      article?.tags?.some((tag) => tag?.toLowerCase()?.includes(query))
      );
    }

    setFilteredArticles(filtered);
  }, [activeCategory, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleTopicClick = (topic) => {
    setSearchQuery(topic);
    setActiveCategory('all');
  };

  const handleArticleClick = (articleId) => {
    console.log('Navigating to article:', articleId);
  };

  return (
    <>
      <Helmet>
        <title>Blog & Insights | DevPortfolio - Technical Tutorials & Industry Trends</title>
        <meta name="description" content="Explore technical tutorials, development insights, and industry trends. Weekly content on React, TypeScript, architecture patterns, and open source contributions." />
        <meta name="keywords" content="React tutorials, TypeScript guides, web development blog, technical insights, open source, programming tutorials" />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1 pt-16">
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4 md:mb-6">
                  <Icon name="BookOpen" size={20} className="text-primary" />
                  <span className="text-sm font-mono font-semibold text-primary">Knowledge Vault</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-4 md:mb-6 text-foreground">
                  Technical Insights & Tutorials
                </h1>

                <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8">
                  Explore in-depth tutorials, industry insights, and development best practices. Join 5,000+ developers learning and growing together.
                </p>

                <SearchBar onSearch={handleSearch} />
              </div>

              <div className="mb-8 md:mb-12">
                <CategoryFilter
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={handleCategoryChange} />

              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12 lg:py-16">
            <div className="mb-12 md:mb-16 lg:mb-20">
              <FeaturedArticle article={featuredArticle} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold font-mono text-foreground">
                    {searchQuery ? `Search Results for "${searchQuery}"` : 'Latest Articles'}
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    {filteredArticles?.length} {filteredArticles?.length === 1 ? 'article' : 'articles'}
                  </span>
                </div>

                {filteredArticles?.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {filteredArticles?.map((article) =>
                  <BlogCard key={article?.id} article={article} />
                  )}
                  </div> :

                <div className="text-center py-12 md:py-16">
                    <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your search or filter to find what you're looking for.
                    </p>
                    <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}
                    className="text-primary hover:underline font-medium">

                      Clear all filters
                    </button>
                  </div>
                }
              </div>

              <div className="space-y-6 md:space-y-8">
                <PopularTopics topics={popularTopics} onTopicClick={handleTopicClick} />
                <RecentArticles articles={recentArticles} onArticleClick={handleArticleClick} />
              </div>
            </div>

            <div className="mt-12 md:mt-16 lg:mt-20">
              <NewsletterSection />
            </div>
          </div>
        </main>

        <Footer />
        <FloatingCTA />
      </div>
    </>);

};

export default Blog;