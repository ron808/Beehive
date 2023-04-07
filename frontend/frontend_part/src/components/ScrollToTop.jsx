import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0); // Reset scroll position to top of page
    });
    return () => {
      unlisten(); // Clean up the event listener when component unmounts
    };
  }, [history]);

  return null; // This component doesn't render anything
}

export default withRouter(ScrollToTop);