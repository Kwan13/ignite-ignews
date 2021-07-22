import { SignInButton } from '../SignInButton';
import { Activelink } from '../ActiveLink';

import styles from './styles.module.scss';

export function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <Activelink activeClassName={styles.active} href="/">
            <a>Home</a>
          </Activelink>

          <Activelink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </Activelink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
