import "../styles/App.css";

export default function GradientText({
                                         children,
                                         className = "",
                                         colors = ["#ec8f44", "#1c51cc", "#5a4ebd", "#ec5e32", "#40ffaa"],
                                         animationSpeed = 8,
                                         showBorder = false
                                     }) {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        animationDuration: `${animationSpeed}s`,
    };

    return (
        <div className={`animated-gradient-text ${className}`}>
            {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
            <div className="text-content" style={gradientStyle}>{children}</div>
        </div>
    );
}
