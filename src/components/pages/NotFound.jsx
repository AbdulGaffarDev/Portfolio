import { FaHome, FaArrowLeft } from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';

const NotFound = () => {
  return (
    <>
      <SEOHead 
        title="404 - Page Not Found | Abdul Gaffar Portfolio"
        description="The page you're looking for doesn't exist. Return to Abdul Gaffar's portfolio homepage."
        noindex={true}
      />
      <div className="min-h-screen bg-main flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          {/* 404 Animation */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary opacity-20">404</h1>
            <div className="relative -mt-16">
              <div className="w-32 h-32 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                <FaHome className="text-4xl text-white" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl font-bold text-primary">Page Not Found</h2>
            <p className="text-muted text-lg">
              Oops! The page you're looking for seems to have wandered off into the digital void.
            </p>
            <p className="text-muted">
              Don't worry, even the best developers encounter 404 errors. Let's get you back on track!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/'}
              className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FaHome className="w-4 h-4" />
              Go Home
            </button>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 hover:bg-gradient-primary hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              <FaArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-base">
            <p className="text-muted mb-4">Quick Navigation:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/#about'} 
                className="text-primary hover:text-secondary transition-colors"
              >
                About Me
              </button>
              <button 
                onClick={() => window.location.href = '/#projects'} 
                className="text-primary hover:text-secondary transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => window.location.href = '/#skills'} 
                className="text-primary hover:text-secondary transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => window.location.href = '/#contact'} 
                className="text-primary hover:text-secondary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
