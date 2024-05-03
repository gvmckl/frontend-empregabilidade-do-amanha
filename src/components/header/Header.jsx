import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext } from "react";
import { AuthContext } from "../../hooks/AuthContext";
export const Header = () => {
    const { isLoggedIn, logout } = useContext(AuthContext);
    return (
        <header className={styles["header"]}>
            <figure className={styles["img-logo-header"]}>
                <img src="/src/assets/logo-site.svg" alt="" />
            </figure>
            <nav className={styles["nav-link-header"]}>
                <Link to={"/"} className={styles["link-header"]}>
                    Home
                </Link>
                <a href="#" className={styles["link-header"]}>
                    Sobre
                </a>
                {!isLoggedIn && (
                    <>
                        <Link to={"/register-student"} className={styles["link-header"]}>
                            Cadastre-se
                        </Link>
                        <Link to={"/login"} className={styles["link-header"]}>
                            Login
                        </Link>
                    </>
                )}
                {isLoggedIn && (
                    <>
                        <Link to={"/perfil-student"} className={styles["link-header"]}>
                            Perfil
                        </Link>
                        <Link to={"/login"} onClick={logout} className={styles["link-header"]}>
                            Logout
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
};
