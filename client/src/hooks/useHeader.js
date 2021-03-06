import useScrollPos from './useScrollPos' ;
import { useState , useEffect}  from 'react' ;
import * as Scroll from "react-scroll";

// useHeader hook
export default function() {
  const [showSerchBar, setSearchBar] = useState(false);
  const scrollPos = useScrollPos();
  const scrolled = scrollPos !== 0;

  useEffect(() => {
    const scroll = Scroll.animateScroll;
    if (showSerchBar && scrolled) {
      scroll.scrollTo(2.2);
    }
  }, [showSerchBar , scrolled]);

  function toggleShowSearchBar() {
    setSearchBar(!showSerchBar);
  }

  return {showSerchBar, toggleShowSearchBar, scrolled} ;
}
