// Custom hook to animate elements on scroll. 

import { useState, useEffect } from 'react'

const useScrollAnimation = (ref) => {
    
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const { top } = ref.current.getBoundingClientRect(); // Getting the top position of the element

            const windowHeight = window.innerHeight; // Getting the height of the window

            // Checking if component is visible in the viewport
            if (top <= windowHeight) {
                setIsVisible(true);

            } else {
                setIsVisible(false);
            }
        };

        // Add event listener for the scroll 
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ref]);

    return isVisible;
}

export default useScrollAnimation