import HeaderWrapper from "./HeaderWrapper";
import Logo from "../global/Logo";
import Navbar from "../global/Navbar";
import CallAction from "../global/CallAction";

export default function Header({ data }) {
    if (!data || Object.keys(data).length === 0) {
        return null; // Devuelve null si no hay datos
    }

    const { type, global, logo, navbar, callAction } = data;

    // Valores globales
    const {
        paddingY,
        paddingX,
        bgColor,
        scrolledBgColor,
        isFixed,
        aligne,
        shadow
    } = global || {};

    // Componente Logo
    const showLogo =
        logo && Object.keys(logo).length > 0 ? (
            <Logo
                logoSlug={logo.logoSlug}
                logoWidth={logo.logoWidth}
                logoHeight={logo.logoHeight}
            />
        ) : null;

    // Componente Navbar
    const showNavbar =
        navbar && Object.keys(navbar).length > 0 ? (
            <Navbar
                navItems={navbar.navItems}
                color={navbar.navItemsColor}
                hoverColor={navbar.hoverColor}
                hoverUnderline={navbar.hoverUnderline}
                hoverTransform={navbar.hoverTransform}
                fontFamily={navbar.fontFamily}
                itemsWeight={navbar.itemsWeight}
                transition={navbar.transition}
                spaceBetweenItems={navbar.spaceBetweenItems}
                fontSize={navbar.fontSize}
            />
        ) : null;

    // Componente CallAction
    const showCallAction = callAction && Object.keys(callAction).length > 0 ? (
        <div className="flex gap-4 items-center">
            {callAction.map((item, index) => {
                const { 
                    text, 
                    href, 
                    borderWidth, 
                    borderColor, 
                    borderRadius, 
                    hoverBorderColor, 
                    backgroundColor, 
                    hoverBackgroundColor, 
                    textColor, 
                    hoverTextColor, 
                    transition,
                    paddingY
                } = item;
        
                return (
                    <CallAction
                        key={index}
                        text={text}
                        href={href}
                        borderWidth={borderWidth}
                        borderColor={borderColor}
                        borderRadius={borderRadius}
                        hoverBorderColor={hoverBorderColor}
                        backgroundColor={backgroundColor}
                        hoverBackgroundColor={hoverBackgroundColor}
                        textColor={textColor}
                        hoverTextColor={hoverTextColor}
                        transition={transition}
                        paddingY={paddingY}
                    />
                );
            })}
        </div>
    ) : null;
    
    // Determinar contenido según el tipo
    let content;
    if (type === 1) {
        content = (
            <>
                {showLogo}
            </>
        );
    } else if (type === 2) {
        content = (
            <>
                {showNavbar}
            </>
        );
    } else if (type === 3) {
        content = (
            <>
                {showCallAction}
            </>
        );
    } else if (type === 4) {
        content = (
            <>
                {showLogo}
                {showCallAction}
            </>
        );
    } else if (type === 5) {
        content = (
            <>
                {showLogo}
                <div className="flex gap-10 items-center">
                    {showNavbar}
                    {showCallAction}
                </div>
            </>
        );
    } else if (type === 6) {
        content = (
            <>
                {showLogo}
                {showNavbar}
                {showCallAction}
            </>
        );
    }

    return (
        <HeaderWrapper
            paddingY={paddingY}
            paddingX={paddingX}
            bgColor={bgColor}
            isFixed={isFixed}
            scrolledBgColor={scrolledBgColor}
            aligne={aligne}
            shadow={shadow}
        >
            {content}
        </HeaderWrapper>
    );
}
