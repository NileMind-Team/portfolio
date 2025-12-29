export const getLogoUrl = () => {
  try {
    const logo = require("../assets/logo.png");
    return logo;
  } catch (error) {
    console.log("⚠️ اللوجو غير موجود في assets/logo.png");
    console.log("✅ سيتم استخدام البديل");
    return null;
  }
};

export const renderLogo = (size = "medium", darkMode = false) => {
  const sizes = {
    small: "w-10 h-10",
    medium: "w-12 h-12",
    large: "w-14 h-14",
  };

  const logoUrl = getLogoUrl();

  if (logoUrl) {
    return (
      <img
        src={logoUrl}
        alt="Triple S Logo"
        className={`${sizes[size]} object-contain rounded-xl`}
      />
    );
  }

  return (
    <div
      className={`${sizes[size]} bg-gradient-to-br from-primary-light to-primary-darker rounded-xl flex items-center justify-center shadow-lg`}
    >
      <span className="text-white font-bold text-lg">SSS</span>
    </div>
  );
};
