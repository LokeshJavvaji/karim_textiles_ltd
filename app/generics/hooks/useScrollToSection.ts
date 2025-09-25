import { useCallback } from "react";

const useScrollToSection = () => {
    const scrollToSection = useCallback((sectionId: string) => {
        const section = document?.getElementById(sectionId)

        if(section) {
            window.scrollTo({
                top: (section?.offsetTop ?? 0) - 40,
                behavior: 'smooth'
            });
        }
    }, [])

    return scrollToSection
}

export default useScrollToSection