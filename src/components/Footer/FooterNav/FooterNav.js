import classes from "./FooterNav.module.css";
import footerNavData from "./footerNavData.json";

const FooterNav = () => {
  return (
    <div
      className={classes.nav}
    >
      {footerNavData.map((link) => (
        <div key={link.link} className={classes.navLink} >
          <p className={classes.link}>{link.link}</p>
          {link.sublinks && (
            <ul className={classes.sublinks}>
              {link.sublinks.map((sublink) => (
                <li key={sublink}>{sublink}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default FooterNav;
