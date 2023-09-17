import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useLocale } from "@/hooks/useLocale";
import { HUB } from "@/routes";
import LocaleSelector from "@/components/locale-selector/LocaleSelector";
import Card from "@/components/shared/card/Card";
import IconButton from "@/components/shared/icon-button/IconButton";
import Navbar from "@/components/shared/navbar/Navbar";
import ThemeSelector from "@/components/theme-selector/ThemeSelector";
import "./About.scss";
import { FULL_VERSION } from "@/constants";

function About() {
  const navigate = useNavigate();
  const { i18n } = useLocale();

  const onNavbarBackButtonClick = React.useCallback(() => navigate(HUB), [
    navigate,
  ]);
  return (
    <div className="about">
      <Navbar
        className="about__navbar"
        title={i18n("nav_about")}
        onBackButtonClick={onNavbarBackButtonClick}
      />

      <Card className="about__app-preferences">
        <div className="about__subtitle">{i18n("app_settings")}</div>

        <div className="about__app-preferences__buttons">
          <LocaleSelector />
          <ThemeSelector />
        </div>
      </Card>




    </div>
  );
}

export default About;
