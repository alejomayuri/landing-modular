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
        paddingY = "py-4",
        paddingX = "px-4",
        bgColor = "bg-white",
        scrolledBgColor = "bg-gray-100",
        isFixed = false,
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
            />
        ) : null;

    // Componente CallAction
    const showCallAction =
        callAction && Object.keys(callAction).length > 0 ? (
            <CallAction
                text={callAction.text}
                href={callAction.href}
                borderWidth={callAction.borderWidth}
                borderColor={callAction.borderColor}
                borderRadius={callAction.borderRadius}
                hoverBorderColor={callAction.hoverBorderColor}
                backgroundColor={callAction.backgroundColor}
                hoverBackgroundColor={callAction.hoverBackgroundColor}
                textColor={callAction.textColor}
                hoverTextColor={callAction.hoverTextColor}
                transition={callAction.transition}
            />
        ) : null;

    // Determinar contenido según el tipo
    let content;
    if (type === 1) {
        content = (
            <>
                {showLogo}
                {showNavbar}
                {showCallAction}
            </>
        );
    } else if (type === 2) {
        content = (
            <>
                {showLogo}
                <div className="flex gap-10 items-center">
                    {showNavbar}
                    {showCallAction}
                </div>
                {showLogo}
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
        >
            {content}
        </HeaderWrapper>
    );
}
